-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: nutriware
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `marmitas`
--

DROP TABLE IF EXISTS `marmitas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marmitas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sabor` varchar(45) NOT NULL,
  `descricao` varchar(1000) NOT NULL,
  `preco` int NOT NULL,
  `urlimagem` varchar(450) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marmitas`
--

LOCK TABLES `marmitas` WRITE;
/*!40000 ALTER TABLE `marmitas` DISABLE KEYS */;
INSERT INTO `marmitas` VALUES (3,'Frango com batatas','Uma refeição balanceada e deliciosa, composta por pedaços suculentos de frango grelhado acompanhados de batatas assadas, temperadas com ervas finas. Ideal para quem busca um prato nutritivo e saboroso, perfeito para o almoço do dia a dia.',25,'https://github.com/Thaynan-souza/Nutriware/blob/main/Frango-batatas.jpeg?raw=true','2024-10-03 14:50:28'),(4,'Arroz com legumes e carne seca','Uma combinação de arroz soltinho, legumes frescos e carne seca desfiada, tudo preparado com um toque especial de temperos que realçam o sabor caseiro. Uma opção reconfortante e cheia de nutrientes, que traz o melhor da culinária brasileira',27,'https://github.com/Thaynan-souza/Nutriware/blob/main/carne-seca.jpeg?raw=true','2024-10-03 14:52:59'),(6,'Lasanha de berinjela com macarrão ao molho','Uma opção leve e saborosa para quem busca um prato vegetariano. Fatias de berinjela substituem a massa tradicional, criando uma lasanha recheada com molho de tomate caseiro, que se combina perfeitamente com o macarrão ao molho. Uma refeição rica em sabor e com um toque de frescor.',26,'https://github.com/Thaynan-souza/Nutriware/blob/main/lasanha.jpeg?raw=true','2024-10-03 14:52:59');
/*!40000 ALTER TABLE `marmitas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-14 20:01:00
