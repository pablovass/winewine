CREATE DATABASE test23;
GRANT USAGE ON *.* TO user23@localhost IDENTIFIED BY 'pass23';
GRANT ALL PRIVILEGES ON test23.* TO user23@localhost ;
USE test23;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test23`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(1000) COLLATE utf8_spanish_ci NOT NULL,
  `precio` float NOT NULL,
  `cant_producto` int(11) NOT NULL,
  `tipo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `precio`, `cant_producto`, `tipo`) VALUES
(1, 'CALLEJON DEL CRIMEN GRAN RESERVA CABERNET SAUVIGNON', 'La nariz ofrece intensos aromas de frutos negros maduros con dedos de tabaco, cedro. \nEn boca es un vino de gran estructura con sabor a cassis y frutos.', 498, 30, 1),
(2, 'DONA PAULA PASEO DE PIEDRA CABERNET SAUVIGNON ', 'Este Malbec presenta un estilo elegante y complejo, donde se destacan en nariz notas de frambuesa, arandano, violeta y especias que se integran armoniosamente a ciertos aromas minerales y de encina tostada. \nEn boca es un vino muy equilibrado, de gran cuerpo, concentrado y aterciopelado con un persistente final que recuerdan su paso por la madera.', 402, 25, 1),
(3, 'Quinta do Noval Unfiltered Late-Bottled Vintage Port 2011', 'A traditional, unfiltered LBV from a fine vintage, this is a well-upholstered, rich and generous wine, with complex plum and rich black cherry and spice flavours, finishing sweet and smooth on the palate. Packed in a cardboard gift carton.', 1000, 10, 1),
(4, 'MIGUEL ESCORIHUELA GASCON MALBEC', 'Aromas de frutos rojos y negros como ciruelas, grosellas silvestres y cassis provenientes del Malbec, combinados con vainilla, chocolate y cafe aportado durante su crianza en barricas. \nEn boca se presenta intenso, de buena estructura y concentracion. Asombrosamente suave y complejo, muy elegante y de persistente final.', 1550, 12, 1),
(5, 'LOS INTOCABLES BLACK MALBEC', 'De color violaceo profundo, con matices negros. Sus uvas Malbec provenientes de una cuidadosa seleccion de parcelas, con muy bajo rendimiento de racimos por planta, logran un vino de muy agradable sabor y largo final. \nSu innovador proceso de elaboracion, que contempla una maduracion del vino de 12 meses en barricas de roble Bourbon, desprende aromas a humo, chocolate y caramelo. \nEn boca, el tostado medio, aporta sabores a vainilla y a mermelada de frutos rojos cocidos, como las moras y las ciruelas.', 391, 52, 1),
(6, 'LAS PERDICES ALA COLORADA ANCELLOTTA 2013', 'Las Perdices Ala Colorada Ancellotta 2013 tuvo una crianza en madera de 15 meses en barricas\n nuevas de roble: 50% roble frances y 50% roble americano. Un vino de color rojo profundo, con tonos azulados. Intensos aromas de frutas rojas, mermeladas e higos \nsecos conjugados con notas de tabaco y chocolate. En boca, buen ataque, voluminoso, estructura bien balanceada con taninos maduros, \ndonde se combinan las notas de fruta, con los aportes de la madera. Excelente companero para carnes rojas y platos contundentes en general.', 550, 12, 1),
(7, 'DONA PAULA SELECCION DE BODEGA MALBEC', 'Color violeta intenso y profundo, aromas a frutos del bosque, notas de grafito, cereza negra, moka y especias. \nEs probablemente hasta ahora la mejor y mas estructurada version de nuestro icono Malbec, manteniendo intacta su elegancia, fineza y multiples expresiones', 850, 12, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `pass`, `nombre`, `apellido`, `email`, `role`) VALUES
(1, 'admin', 'admin', '', '', '', 1),
(2, 'user', 'passw0rd', '', '', '', 0),
(3, 'admin', 'admin', 'Pablo', 'Vass', 'pablo.vallejos@davinci.edu.ar', 1),
(4, 'jose2017', '123456', 'Jose', 'Hernan', 'jose.hernan@davinci.edu.ar', 0),
(5, 'admin', 'admin', '', '', '', 1),
(6, 'user', 'passw0rd', '', '', '', 0),
(7, 'admin', 'admin', 'Pablo', 'Vass', 'pablo.vallejos@davinci.edu.ar', 1),
(8, 'jose2017', '123456', 'Jose', 'Hernan', 'jose.hernan@davinci.edu.ar', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
