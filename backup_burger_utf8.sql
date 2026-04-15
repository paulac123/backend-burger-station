-- MySQL dump 10.13  Distrib 5.7.44, for Linux (x86_64)
--
-- Host: localhost    Database: burger_db
-- ------------------------------------------------------
-- Server version	5.7.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT '1',
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,13,11,2,9.50),(2,13,13,1,8.75),(3,13,14,1,11.75),(4,14,13,1,8.75),(5,14,11,2,9.50),(6,14,14,1,11.75),(7,15,16,2,1.00),(8,15,14,1,11.75),(9,15,17,1,0.50),(10,16,14,1,11.75),(11,16,16,2,1.00),(12,16,17,1,0.50),(13,18,14,1,11.75),(14,18,18,3,1.50),(15,18,17,1,0.50),(16,19,11,1,9.50),(17,20,11,1,9.50),(18,21,25,1,0.60),(19,21,26,1,2.75),(20,22,12,2,10.00),(21,22,13,1,8.75),(22,23,12,1,10.00),(23,24,12,1,10.00),(24,24,13,1,8.75),(25,25,14,1,11.75),(26,26,14,1,11.75),(27,26,13,1,8.75),(28,26,12,1,10.00),(29,27,12,1,10.00),(30,28,12,1,10.00),(31,28,13,1,8.75),(32,28,11,1,9.50),(33,28,14,1,11.75),(34,29,12,1,10.00),(35,29,13,1,8.75),(36,29,14,1,11.75),(37,29,11,1,9.50),(38,30,13,2,8.75),(39,31,12,1,10.00),(40,31,18,1,1.50),(41,31,13,1,8.75),(42,31,14,1,11.75),(43,31,17,1,0.50),(44,31,16,1,1.00),(45,32,13,1,8.75),(46,32,12,1,10.00),(47,33,12,1,10.00),(48,34,11,1,9.50),(49,34,26,1,2.75),(50,34,16,1,1.00),(51,34,30,1,2.00),(52,34,18,1,1.50),(53,35,12,1,10.00),(54,36,22,1,0.00),(55,36,15,1,13.00),(56,36,21,1,0.00),(57,37,12,1,10.00),(58,37,13,1,8.75),(59,37,14,1,11.75),(60,37,18,1,1.50),(61,37,16,1,1.00),(62,37,20,2,0.80),(63,37,26,3,2.75),(64,37,30,2,2.00),(65,37,22,1,0.00),(66,37,33,2,4.00),(67,37,19,1,0.75),(68,38,11,1,9.50),(69,39,12,3,10.00),(70,40,12,1,10.00),(71,41,12,1,10.00),(72,42,12,1,10.00),(73,43,13,1,8.75),(74,44,12,1,10.00),(75,45,12,1,10.00),(76,46,12,1,10.00),(77,47,12,1,10.00),(78,48,12,2,10.00),(79,49,12,1,10.00),(80,50,12,1,10.00),(81,50,11,1,9.50),(82,51,12,1,10.00),(83,52,12,1,10.00),(84,51,13,1,8.75),(85,52,13,1,8.75),(86,53,13,1,8.75),(87,54,13,1,8.75),(88,54,12,1,10.00);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  KEY `fk_orders_user` (`user_id`),
  CONSTRAINT `fk_orders_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2025-07-29 00:46:26',0.00),(2,1,'2025-07-30 16:15:27',0.00),(3,11,'2025-08-04 17:54:24',0.00),(4,11,'2025-08-04 19:30:35',0.00),(5,11,'2025-08-04 19:32:49',0.00),(6,11,'2025-08-04 19:49:21',45500.00),(7,11,'2025-08-04 20:04:20',0.00),(8,11,'2025-08-04 20:20:37',0.00),(9,11,'2025-08-04 20:26:01',49.00),(10,11,'2025-08-04 20:26:30',68.00),(11,12,'2025-08-05 14:06:22',68.00),(12,12,'2025-08-05 22:31:51',0.00),(13,12,'2025-08-05 22:46:26',39.50),(14,12,'2025-08-05 22:54:08',39.50),(15,13,'2025-08-05 22:57:21',14.25),(16,13,'2025-08-05 23:09:58',14.25),(17,13,'2025-08-06 18:14:12',0.00),(18,13,'2025-08-06 18:14:27',16.75),(19,13,'2025-08-19 19:05:34',9.50),(20,15,'2025-08-19 21:03:54',9.50),(21,15,'2025-08-20 02:19:12',3.35),(22,23,'2025-08-20 04:59:53',28.75),(23,24,'2025-08-20 05:02:28',10.00),(24,25,'2025-08-20 14:04:25',18.75),(25,13,'2025-08-20 14:04:58',11.75),(26,13,'2025-08-20 16:46:45',30.50),(27,26,'2025-08-20 16:49:53',10.00),(28,13,'2025-08-20 17:23:59',40.00),(29,13,'2025-08-20 17:24:02',40.00),(30,28,'2025-08-20 17:25:52',17.50),(31,29,'2025-08-20 18:33:46',33.50),(32,30,'2025-08-20 18:35:39',18.75),(33,15,'2025-08-21 18:34:22',10.00),(34,31,'2025-08-22 01:04:12',16.75),(35,32,'2025-08-22 01:08:24',10.00),(36,29,'2025-08-22 02:02:05',13.00),(37,29,'2025-08-22 02:04:58',55.60),(38,32,'2025-08-22 02:15:53',9.50),(39,32,'2025-08-22 02:17:19',30.00),(40,32,'2025-08-22 02:19:50',10.00),(41,32,'2025-08-22 02:19:51',10.00),(42,32,'2025-08-22 02:24:06',10.00),(43,32,'2025-08-22 02:24:42',8.75),(44,13,'2025-08-22 17:15:43',10.00),(45,13,'2025-08-23 04:29:42',10.00),(46,13,'2025-08-23 04:29:43',10.00),(47,13,'2025-08-23 04:29:44',10.00),(48,13,'2025-08-25 17:03:09',20.00),(49,13,'2025-08-25 17:19:33',10.00),(50,39,'2025-08-25 17:48:31',19.50),(51,41,'2025-08-26 17:29:15',18.75),(52,41,'2025-08-26 17:29:20',18.75),(53,46,'2025-08-26 17:30:46',8.75),(54,46,'2025-08-26 17:41:15',18.75);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (11,'La Monta├▒esa','Carne de res artesanal, queso suizo, champi├▒ones salteados, cebolla caramelizada y salsa de hierbas.',9.50,'/images/burger_montanesa.png','burger'),(12,'El Ranchero','Pollo a la parrilla marinado, tocino crujiente, queso provolone, aros de cebolla fritos y salsa ranch.',10.00,'/images/burger_ranchero.png','burger'),(13,'Veggie Mediterr├ínea','Medall├│n de garbanzos y espinacas, queso feta, aceitunas negras, pimientos asados y tzatziki.',8.75,'/images/burger_veggie.png','burger'),(14,'Doble B├║falo','Doble carne de res, queso cheddar a├▒ejo, pepinillos encurtidos, cebolla roja y salsa b├║falo picante.',11.75,'/images/burger_bufalo.png','burger'),(15,'Mar y Tierra','Carne de res, camarones salteados al ajillo, aguacate y salsa rosada de la casa.',13.00,'/images/burger_marytierra.png','burger'),(16,'Huevo frito','Adici├│n de huevo frito',1.00,'/images/huevo.png','adicion'),(17,'Jalape├▒os','Adici├│n de jalape├▒os',0.50,'/images/jalape├▒o.png','adicion'),(18,'Guacamole','Adici├│n de guacamole',1.50,'/images/guacamole.png','adicion'),(19,'Pi├▒a caramelizada','Adici├│n de pi├▒a caramelizada',0.75,'/images/pi├▒a.png','adicion'),(20,'Extra queso','Adici├│n de queso cheddar o mozzarella',0.80,'/images/queso.png','adicion'),(21,'K├®tchup','Salsa de tomate cl├ísica',0.00,'/images/tomate.png','salsa'),(22,'Mayonesa','Mayonesa tradicional',0.00,'/images/mayonesa.png','salsa'),(23,'Mostaza Dij├│n','Mostaza estilo Dij├│n',0.00,'/images/mostaza.png','salsa'),(24,'Salsa BBQ ahumada','Salsa barbacoa con toque ahumado',0.60,'/images/bbq.png','salsa'),(25,'Mayonesa picante','Mayonesa con un toque picante',0.60,'/images/mayonesapicante.png','salsa'),(26,'Papas Fritas Corte Casero','Papas fritas de corte grueso estilo casero',2.75,'/images/papafritas.png','papas'),(27,'Papas en Cascos con Piel','Papas en cascos con piel, crujientes por fuera y suaves por dentro',3.25,'/images/paparodajas.png','papas'),(28,'Batatas Fritas','Batatas dulces fritas con un toque de sal',3.50,'/images/papascasco.png','papas'),(29,'Limonada Natural','Limonada fresca hecha con jugo natural de lim├│n',2.25,'/images/limonada.png','bebida'),(30,'Gaseosa','Bebidas carbonatadas: Cola, Naranja o Lima-Lim├│n',2.00,'/images/gaseosa.png','bebida'),(31,'T├® Helado','T├® fr├¡o sabor durazno o lim├│n',2.00,'/images/te.png','bebida'),(32,'Agua Embotellada','Agua purificada en botella',1.50,'/images/agua.png','bebida'),(33,'Cerveza Artesanal (sin alcohol)','Cerveza artesanal sin contenido alcoh├│lico',4.00,'/images/cerveza.png','bebida');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'paula','paulacruz.tg@gamil.com','123456'),(2,'Paula Cruz','paula@example.com',NULL),(6,'Cruz','paulacruz@example.com','123456'),(7,'Cruz','prueba@example.com','$2b$10$LoDiHfH6hvAwoOoBCSkgfeqdAJIXnmZLX2hl/98SAbj5USltK0hym'),(8,'Cruz','prueba1@example.com','$2b$10$AStR8j6cGtWiV8EbmGhnJen1ZMMI0F5SdB1fAhqsGVpXbzEKmDEBG'),(9,'Cruz','prueba2@example.com','$2b$10$yIedj7rRtpZm8YfhXwJtMOL7rhPkG83GU7M70Mbz5O0aZzkG7aRjq'),(10,'Cruz','prueba3@example.com','$2b$10$rs1SyMQZrR0qtiDCL5d91.xYOMG7/Nwpbn34dh9uoqDbto0lGousu'),(11,'andrea','andrea@example.com','$2b$10$88N32Fapilb.iTh6dcW5wu1vvPHPC0u3kF4FdZab6UWRI06MjxRq.'),(12,'ana','ana@example.com','$2b$10$s.CK2VXbJuuPQ8CakiX0Ruuqme7ba8XNorZmacNTLSbwMssnHGs0.'),(13,'valentina','paulacruz.tg@gmail.com','$2b$10$zpUNb4T/U0ZYpg9ocotluOh7wR4yZ6khivQYQ.fU/zif0Pan54Gxm'),(14,'valentina','valentina@hotmail.com','$2b$10$6wwYmHkc3qR.xd7x9.MNMeCv4hVrcFm5qipA0U8sGYAUEfdH9eJt2'),(15,'pau','pau@gmail.com','$2b$10$1iQKg/Sk1liTc43wEK4G0ubetsyVchIfly0/PUuWwU43NhhU9.DL.'),(16,'paula1','paula1@gmail.com','$2b$10$cAwKMGCAgR740Ly8Xj2P0uITNwqdadE1rcihLETTGSG8uD0uBcon6'),(17,'paula2','paula2@gmail.com','$2b$10$x05nAqi0rQhcI.3CKmVVkOISkVZrvFVa8GFaDTtKHtYO9ENz4FlaC'),(18,'pau3','pau3@gmail.com','$2b$10$R9O7U3qTRaDrKnksPTMyu.Ed9JHK8y5neVfbq9PQhmLMAnQjQdEMK'),(19,'pau4','pau4@gmail.com','$2b$10$JwlE.8fHF49WVpzxzMS5j.HA.HFE9ZoPc0Wvh5Y6Txayg66TgkA2W'),(22,'pau5','pau5@gmail.com','$2b$10$pPaAuUG0q5fKij/2X/Kbv.HqCLoe/UMy7XMSV4x5Llh88pq6Iyml6'),(23,'pau6','pau6@gmail.com','$2b$10$5tm8wNx5aedQfHjNEENJue9/oC0BDvPbehP/E0oKHaCCzm1BuaGsW'),(24,'pau7','pau7@gmail.com','$2b$10$WlDGGvJ0OEGSIe13GH0vaeyQoL3w0P7po8kUXLI6PdkWmW6.9ZM/2'),(25,'pau8','pau8@gmail.com','$2b$10$NqfcBR3uZkJxkkjDLmGKJeAC5REgkwYxZHziwFOr02Co7XVqEGj/i'),(26,'pau10','paulacruz.superya@gmail.com','$2b$10$xhsTbzyyWK.51iDIeuB6wuIHbtpr8tKB.gP0drFzJCroixccqPWeK'),(27,'pau10','paua@gmail.com','$2b$10$jaX6SNOTasUuQqRP0bFbsudNYAqa38W0jHlNp80CfvNakPIK3Z0au'),(28,'pau12','pau12@gmail.com','$2b$10$F0994keHmpZUrfeC6WuMGe1afy/LWr9w1Dvdy/ai.RBJdA5Ay2QxK'),(29,'david','david.gil.22@outlook.com','$2b$10$nbuSKvK5w4bgGSBIcFMVHOo9wazsx7FqKRaj7nal1KI81dOE6ZBFy'),(30,'david1','david.gil.22superya@gmail.com','$2b$10$ehWzLb8xYoLEuzZeQalG3OnrOIgjjq.uRICdGwQtdUfBYlpusvHaW'),(31,'valen','valentinalozano753@gmial.com','$2b$10$jEu/ItN/lKJ./PVKsyTbEeDER1vQcnIDyjcPmNUtK4MelMBuF..k.'),(32,'valen','valentinalozano573@gmail.com','$2b$10$J1WlH5GCxZ0rC2/ENOC3FO65ihfEuCLDGGsoQwHJ6VyYwoVXtTwaK'),(33,'pau12','pau13@gmail.com','$2b$10$r5LC6wnOhnoOI0KRexGtlOYWMz4iBJjUBTi59rm7NST4vW98WuZma'),(34,'pau','pau18@gmail.com','$2b$10$B7U9f8ncoLOawt38Yuvnduo/qR4SYX9cHWAl3BRFkmVVlxdvZQRY6'),(35,'pau','pau1@gmail.com','$2b$10$Mq27bgwwo5np5wjhPHv65.uv0BobqG5gixsyxzE3Mln.4LLxJzvpu'),(36,'pau15','paula15@gmail.com','$2b$10$0042SjnM/4sVW5doPGyKpumQ1UXQPicwtppH/W8DelMTaaiLRq3KG'),(37,'pau15','paula16@gmail.com','$2b$10$tQnZ0d5ruYIn6XHVVUyR8.lmzhnzP5C/Ainztqc.DyU4L4Y/kSsFe'),(38,'pau20','paula20@gmail.com','$2b$10$IPoEUX/eq.NAxrIiFcJZzeWdQawk4HOxeOxbY.S5NLFZP3Uls40K2'),(39,'pau20','pau20@gmail.com','$2b$10$aRikjijIckHpH..laABh/..fNBtJ4uVJM1XzIg6AiRfPeCKlTxGxa'),(40,'pau','pau21@gmail.com','$2b$10$/X/LvwEx.aOfXwcwj3z3Aemit2e6RcSmX.BcJaD.dXJvfBtF1mRI6'),(41,'pau22','pau22@gmail.com','$2b$10$2DBCkCAcIjRjGndE4QP7junY0IVH8BVQzbven1OCQiLaqqCH.qCSG'),(42,'pau23','pau23@gmail.com','$2b$10$UQ9lN2d0nxTgatYmTRwGzuLbhn8jYhsbI5v5InAwxbjsGrKdyIXwq'),(43,'pau25','pau25@gmail.com','$2b$10$lXbJHdAwcPNg.cWXFsk7tuPpbPyyAjynRsmy4aQbc7p8aUsdVSUxK'),(44,'pau26','pau26@gmail.com','$2b$10$QpiebH7PtWatwUXrVMereOlQmwwYdZwPRbV0PjtW5YXX1urzB34Re'),(45,'valen','valentinalozano753@gmail.com','$2b$10$AMqh8QLz1P/jcipxB00w9O63VsNFqUbvN34qj56uUSQaeOkpBmwBy'),(46,'pau','pau27@gmail.com','$2b$10$OQ0VYrXATiNtztVnXNOTcOykElRUV3S9tCBTIT0gImwvidGAmFiSe'),(47,'pau28','pau28@gmail.com','$2b$10$UJjbibGsoXR0keNbyWqnzOf/Dvx3tYwQbwAOgmWgP25tyBfw.yaAW');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-27  4:39:16
