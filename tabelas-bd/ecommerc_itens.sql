-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ecommerc
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

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
-- Table structure for table `itens`
--

DROP TABLE IF EXISTS `itens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` text DEFAULT NULL,
  `valor` decimal(10,2) NOT NULL,
  `imagem_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itens`
--

LOCK TABLES `itens` WRITE;
/*!40000 ALTER TABLE `itens` DISABLE KEYS */;
INSERT INTO `itens` VALUES (1,'Celular Smartphone','Smartphone de última geração com tela de alta resolução e câmera de 64MP.',899.99,'https://m.media-amazon.com/images/I/61bK6PMOC3L.__AC_SY445_SX342_QL70_ML2_.jpg'),(2,'Notebook Ultrafino','Notebook leve e potente, ideal para trabalho e entretenimento.',999.99,'https://m.media-amazon.com/images/I/71C9z5vNDhL._AC_SX569_.jpg'),(3,'Fone de Ouvido Bluetooth','Fone de ouvido sem fio com cancelamento de ruído ativo e bateria de longa duração.',149.99,'https://m.media-amazon.com/images/I/61qif4R55hL._AC_SX679_.jpg'),(4,'Smartwatch Fitness','Smartwatch com monitoramento de atividades físicas, frequência cardíaca e GPS integrado.',199.99,'https://m.media-amazon.com/images/I/51IxCp-f3tL._AC_SX679_.jpg'),(5,'Câmera DSLR Profissional','Câmera DSLR de alta qualidade com sensor de 24MP e capacidade de gravação em 4K.',799.99,'https://m.media-amazon.com/images/I/81pz06ySqrL._AC_SX425_.jpg'),(6,'Console de Videogame','Console de videogame de última geração com suporte a jogos em alta definição e streaming.',499.99,'https://m.media-amazon.com/images/I/51bAFZ7d01L._AC_SX679_.jpg'),(7,'Tablet Android','Tablet Android com tela de 10 polegadas e processador quad-core para multitarefa.',299.99,'https://m.media-amazon.com/images/I/61dxj9a7NHL._AC_SX569_.jpg'),(8,'Caixa de Som Portátil','Caixa de som Bluetooth resistente à água, ideal para uso ao ar livre.',79.99,'https://m.media-amazon.com/images/I/718DcKdvQDL._AC_SY679_.jpg'),(9,'Impressora Multifuncional','Impressora a jato de tinta com scanner e copiadora integrados.',199.99,'https://m.media-amazon.com/images/I/51OY4i1sFEL._AC_SX569_.jpg'),(10,'Mouse Gamer','Mouse óptico com design ergonômico e iluminação RGB personalizável.',49.99,'https://m.media-amazon.com/images/I/61VFsNg1rXL._AC_SX425_.jpg'),(11,'Smart TV 4K','Smart TV com resolução 4K e tecnologia de imagem HDR para uma experiência de visualização imersiva.',799.99,'https://m.media-amazon.com/images/I/71vk2qFDSPL._AC_SX425_.jpg'),(12,'Teclado Mecânico Gamer','Teclado mecânico com switches Cherry MX e retroiluminação RGB para jogos de alto desempenho.',129.99,'https://m.media-amazon.com/images/I/61ow7ol23ML._AC_SX425_.jpg'),(13,'Cadeira Ergonômica','Cadeira de escritório ergonômica com ajustes de altura e inclinação para conforto durante longas horas de trabalho.',199.99,'https://m.media-amazon.com/images/I/51B0lQ+v1vL._AC_SX522_.jpg'),(14,'HD Externo 1TB','Disco rígido externo com capacidade de 1TB para armazenamento seguro e portátil de dados.',69.99,'https://m.media-amazon.com/images/I/710tXwU738L.__AC_SX300_SY300_QL70_ML2_.jpg'),(15,'Roteador Wi-Fi Gigabit','Roteador Wi-Fi de alta velocidade com suporte a redes de 5GHz e tecnologia de beamforming para cobertura ampliada.',89.99,'https://m.media-amazon.com/images/I/51B7lgAAVzL.__AC_SX300_SY300_QL70_ML2_.jpg'),(16,'Power Bank 20000mAh','Carregador portátil de alta capacidade com duas portas USB para recarregar dispositivos móveis em movimento.',49.99,'https://m.media-amazon.com/images/I/61otus-W0qL.__AC_SX300_SY300_QL70_ML2_.jpg');
/*!40000 ALTER TABLE `itens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-12  8:20:05
