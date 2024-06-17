-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17/06/2024 às 05:16
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `restaurante_dede_e_leo`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedido`
--

CREATE TABLE `pedido` (
  `idpedido` int(11) NOT NULL,
  `usuario_idusuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `prato`
--

CREATE TABLE `prato` (
  `idprato` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `preco` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `prato`
--

INSERT INTO `prato` (`idprato`, `nome`, `preco`) VALUES
(9, 'tes3', 45),
(10, 's', 34),
(11, 'sfd', 234),
(12, 'pikachu', 50),
(13, 'sopa de macaco', 32);

-- --------------------------------------------------------

--
-- Estrutura para tabela `prato_has_pedido`
--

CREATE TABLE `prato_has_pedido` (
  `pedido_idpedido` int(11) NOT NULL,
  `pedido_usuario_idusuario` int(11) NOT NULL,
  `prato_idprato` int(11) NOT NULL,
  `prato_has_pedidocol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `categoria` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nome`, `senha`, `email`, `categoria`) VALUES
(1, 'andre', '0000', 'andre@hotmail.com', 1),
(2, 'teste', '1111', 'teste@hotmail.com', 1),
(3, 'leo', '0000', 'leo@hotmail.com', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idpedido`,`usuario_idusuario`),
  ADD KEY `fk_pedido_usuario` (`usuario_idusuario`);

--
-- Índices de tabela `prato`
--
ALTER TABLE `prato`
  ADD PRIMARY KEY (`idprato`);

--
-- Índices de tabela `prato_has_pedido`
--
ALTER TABLE `prato_has_pedido`
  ADD PRIMARY KEY (`prato_has_pedidocol`),
  ADD KEY `fk_prato_has_pedido_pedido1` (`pedido_idpedido`,`pedido_usuario_idusuario`),
  ADD KEY `fk_prato_has_pedido_prato1` (`prato_idprato`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `prato`
--
ALTER TABLE `prato`
  MODIFY `idprato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `prato_has_pedido`
--
ALTER TABLE `prato_has_pedido`
  MODIFY `prato_has_pedidocol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_pedido_usuario` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `prato_has_pedido`
--
ALTER TABLE `prato_has_pedido`
  ADD CONSTRAINT `fk_prato_has_pedido_pedido1` FOREIGN KEY (`pedido_idpedido`,`pedido_usuario_idusuario`) REFERENCES `pedido` (`idpedido`, `usuario_idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_prato_has_pedido_prato1` FOREIGN KEY (`prato_idprato`) REFERENCES `prato` (`idprato`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
