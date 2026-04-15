const { Client } = require('pg');
const fs = require('fs');

async function migrate() {
    const client = new Client({
        connectionString: 'postgresql://burger_db_ic5f_user:3OKzq6Djk0SiTnCDWRUHGfcv7yC9DoCU@dpg-d2n8rdf5r7bs73f8ktd0-a.oregon-postgres.render.com:5432/burger_db_ic5f?sslmode=require',
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        await client.connect();
        console.log("✅ Conectado a Render.");

        // Verificación de seguridad: No sobreescribir si ya existe la tabla "users"
        const check = await client.query("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users');");
        if (check.rows[0].exists) {
            console.log("🟢 La base de datos ya está creada y tiene datos. Saltando la migración inicial para no borrar registros nuevos.");
            return;
        }

        // 1. Crear tablas
        console.log("🔨 Creando tablas...");
        const ddl = `
        DROP TABLE IF EXISTS "order_details" CASCADE;
        DROP TABLE IF EXISTS "orders" CASCADE;
        DROP TABLE IF EXISTS "products" CASCADE;
        DROP TABLE IF EXISTS "users" CASCADE;

        CREATE TABLE "users" (
            "id" SERIAL PRIMARY KEY,
            "name" varchar(100) NOT NULL,
            "email" varchar(100) NOT NULL UNIQUE,
            "password" varchar(255) DEFAULT NULL
        );

        CREATE TABLE "products" (
            "id" SERIAL PRIMARY KEY,
            "name" varchar(100) NOT NULL,
            "description" text,
            "price" decimal(10,2) NOT NULL,
            "image" varchar(255) DEFAULT NULL,
            "category" varchar(50) NOT NULL
        );

        CREATE TABLE "orders" (
            "id" SERIAL PRIMARY KEY,
            "user_id" integer REFERENCES "users"("id") ON DELETE SET NULL,
            "order_date" timestamp DEFAULT CURRENT_TIMESTAMP,
            "total" decimal(10,2) NOT NULL DEFAULT 0.00
        );

        CREATE TABLE "order_details" (
            "id" SERIAL PRIMARY KEY,
            "order_id" integer NOT NULL REFERENCES "orders"("id") ON DELETE CASCADE,
            "product_id" integer NOT NULL REFERENCES "products"("id") ON DELETE CASCADE,
            "quantity" integer DEFAULT 1,
            "price" decimal(10,2) NOT NULL
        );
        `;
        await client.query(ddl);
        console.log("✅ Tablas creadas con éxito en Render.");

        // 2. Extraer inserts
        console.log("📥 Extrayendo registros del respaldo .sql...");
        
        let dump;
        try { dump = fs.readFileSync('backup_burger.sql', 'utf8'); } catch(e){}
        let insertStatements = [];
        let isUtf8 = dump && dump.includes('INSERT INTO');
        
        if (!isUtf8) {
             dump = fs.readFileSync('backup_burger.sql', 'utf16le');
        }

        const lines = dump.split('\n');
        for (let line of lines) {
            line = line.trim();
            if (line.startsWith('INSERT INTO')) {
                line = line.replace(/`/g, '"');
                line = line.replace(/'0000-00-00 00:00:00'/g, 'NULL');
                insertStatements.push(line);
            }
        }

        const orderedTables = ['"users"', '"products"', '"orders"', '"order_details"'];
        let count = 0;
        
        for (const table of orderedTables) {
           for (let stmt of insertStatements) {
               if (stmt.includes(`INSERT INTO ${table}`)) {
                   await client.query(stmt);
                   console.log(`✅ Registros insertados en la tabla ${table} con éxito.`);
                   count++;
               }
           }
        }

        console.log("🔄 Actualizando secuencias de IDs...");
        await client.query(`
            SELECT setval('users_id_seq', COALESCE((SELECT MAX(id) FROM "users"), 1));
            SELECT setval('products_id_seq', COALESCE((SELECT MAX(id) FROM "products"), 1));
            SELECT setval('orders_id_seq', COALESCE((SELECT MAX(id) FROM "orders"), 1));
            SELECT setval('order_details_id_seq', COALESCE((SELECT MAX(id) FROM "order_details"), 1));
        `);

        console.log(`🎉 ¡MIGRACIÓN COMPLETADA! Se inyectaron todos los datos satisfactoriamente.`);

    } catch (e) {
        console.error("❌ Error en la migración:", e);
    } finally {
        await client.end();
    }
}

migrate();
