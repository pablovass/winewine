-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-12-2019 a las 02:57:22
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.10

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
-- Estructura de tabla para la tabla `billetera`
--

CREATE TABLE `billetera` (
  `id` int(11) NOT NULL,
  `idPersona` int(11) DEFAULT NULL,
  `dinero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `billetera`
--

INSERT INTO `billetera` (`id`, `idPersona`, `dinero`) VALUES
(1, 1, 10000),
(4, 4, 8699);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `idPersona` int(11) DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `fecha` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `idPersona`, `idProducto`, `nombre`, `precio`, `fecha`) VALUES
(101, 4, 9, 'CUTTY SARK WHISKY 700 ML', 617, '17/12/2019'),
(104, 1, 8, 'THE FAMOUS GROUSE WHISKY 750 ML', 717, '17/12/2019'),
(105, 1, 2, 'DONA PAULA PASEO DE PIEDRA CABERNET SAUVIGNON ', 402, '17/12/2019');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `nro_compra` int(11) DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `fecha` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `nro_compra`, `idPersona`, `idProducto`, `nombre`, `precio`, `fecha`) VALUES
(98, 72, 1, 3, 'Quinta do Noval Unfiltered Late-Bottled Vintage Port 2011', 1000, '14/12/2019'),
(99, 72, 1, 1, 'CALLEJON DEL CRIMEN GRAN RESERVA CABERNET SAUVIGNON', 498, '14/12/2019'),
(100, 58, 1, 9, 'CUTTY SARK WHISKY 700 ML', 617, '14/12/2019'),
(101, 78, 1, 2, 'DONA PAULA PASEO DE PIEDRA CABERNET SAUVIGNON ', 402, '14/12/2019'),
(118, 61, 4, 9, 'CUTTY SARK WHISKY 700 ML', 617, '14/12/2019'),
(119, 61, 4, 5, 'LOS INTOCABLES BLACK MALBEC', 391, '14/12/2019'),
(120, 40, 4, 10, 'THE KING OF SCOTS WHISKY 700 ML', 650, '14/12/2019'),
(121, 46, 4, 10, 'THE KING OF SCOTS WHISKY 700 ML', 650, '17/12/2019'),
(122, 54, 4, 11, 'JAMESON WHISKEY + JENGA', 750, '17/12/2019'),
(123, 54, 4, 3, 'Quinta do Noval Unfiltered Late-Bottled Vintage Port 2011', 1000, '17/12/2019'),
(124, 40, 1, 5, 'LOS INTOCABLES BLACK MALBEC', 391, '14/12/2019'),
(125, 40, 1, 15, 'ESTRELLA DAMM CERVEZA LATA 500 ML', 110, '14/12/2019'),
(126, 40, 1, 15, 'ESTRELLA DAMM CERVEZA LATA 500 ML', 110, '17/12/2019'),
(127, 40, 1, 13, 'JACK DANIELS WHISKY 750 ML', 1500, '17/12/2019');

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
(7, 'DONA PAULA SELECCION DE BODEGA MALBEC', 'Color violeta intenso y profundo, aromas a frutos del bosque, notas de grafito, cereza negra, moka y especias. \nEs probablemente hasta ahora la mejor y mas estructurada version de nuestro icono Malbec, manteniendo intacta su elegancia, fineza y multiples expresiones', 850, 12, 1),
(8, 'THE FAMOUS GROUSE WHISKY 750 ML', 'raduccion del ingles-The Famous Grouse es una marca de whisky escoces mezclado, producida por primera vez por Matthew Gloag & Son en 1896, y actualmente producida y propiedad de The Edrington Group. Los whiskies de malta usados ??en la mezcla de The Famous Grouse incluyen el Highland Park y The Macallan, propiedad de Edringto', 717, 32, 2),
(9, 'CUTTY SARK WHISKY 700 ML', 'una gama de whisky escoces mezclado producido por Edrington plc de Glasgow, cuya oficina principal esta a menos de diez millas del lugar de nacimiento del famoso barco clipper del mismo nombre. El whisky se creo el 23 de marzo de 1923 ', 617, 32, 2),
(10, 'THE KING OF SCOTS WHISKY 700 ML', 'Fred Laing, la segunda generacion de la empresa familiar y el maestro mezclador de la compania, selecciona barricas a mano para el King of Scots y las casa para crear esto, la joya de la corona del Blended Scotch Whisky.', 650, 40, 2),
(11, 'JAMESON WHISKEY + JENGA', 'Jameson es un whiskey irlandes mezclado, producido por primera vez en 1780. Originalmente uno de los cuatro whiskeys mas importantes de Dublin', 750, 40, 2),
(12, 'JOHNNIE WALKER RED LABEL', 'Johnnie Walker? es una marca de whisky escoces producida por Diageo en Kilmarnock, Escocia.', 800, 32, 2),
(13, 'JACK DANIELS WHISKY 750 ML', 'es una destileria y marca de whiskey estadounidense de Tennessee. La diferencia mas notable es que el whisky Tennessee es filtrado en carbon de arce sacarino, dandole un sabor y aroma distintivos. Conocida por sus botellas cuadradas y su etiqueta de color negro, la compania fue establecida en Lynchburg, Tennessee y adquirida por la compania Brown-Forman en 1957.', 1500, 32, 2),
(14, 'BLUE MOON BELGIAN WHITE ALE CERVEZA 330 ML', 'Blue Moon Belgian White, es una cerveza estilo witbier belga lanzada al mercado en 1995. Es fabricada por la compania Blue Moon Brewing Co. en Golden, Colorado, parte de la compania cervecera Tenth and Blake, la division de importacion y embarcaciones de MillerCoors con base en Chicago.', 120, 52, 3),
(15, 'ESTRELLA DAMM CERVEZA LATA 500 ML', 'Estrella Damm es una cerveza tipo lager elaborada con malta de cebada, arroz y lupulo, siguiendo la receta original desde su fundacion, en 1876. Cuenta con un grado de alcohol de 5,4% ', 110, 52, 3),
(16, 'DAB CERVEZA LATA 500 ML', 'Una cerveza de calidad superior, la DAB es una opcion facil de tomar. De color dorado, en boca presenta notas a lupulo y malta.', 115, 52, 3),
(19, 'KAPUZINER WEISSBIER CERVEZA LATA 500 ML', 'Esta cerveza alemana es una tipica Hefeweizen que, por supuesto, responde a la ley de pureza de 1516. Super refrescante, es de un color entre dorado y anaranjado, con mucha turbidez, tipico de este estilo cervecero. Tanto en nariz como en boca, los tonos citricos se destacan por sobre el resto, en donde se pueden encontrar levadura y especias.', 130, 52, 3),
(20, 'AMSTEL PREMIUM CERVEZA LATA 473 ML', 'Amstel Premium Pilsener es una cerveza refinada, de color dorado intenso, facil de tomar, y con un rico tinte a lupulo que le otorga un sabor refrescante y balanceado con caracter', 60, 52, 3);

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
  `role` int(11) NOT NULL,
  `dinero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `pass`, `nombre`, `apellido`, `email`, `role`, `dinero`) VALUES
(1, 'admin', 'admin', '', '', '', 1, NULL),
(2, 'user', 'passw0rd', '', '', '', 0, NULL),
(3, 'Marky', 'admin', 'Pablo', 'Berna', 'pablo.vallejos@davinci.edu.ar', 1, 200000),
(4, 'jose2017', '123456', 'Jose', 'Hanzzed', 'jose.hernan@davinci.edu.ar', 0, 14000),
(5, 'LadyWaks', 'admin', 'Madam', 'Kirkle', 'Madam@gmail.com', 1, 18000),
(7, 'admin', 'admin', 'Pablo', 'Vass', 'pablo.vallejos@davinci.edu.ar', 1, NULL),
(8, 'rockwell', '123456', 'Jose', 'Hernandez', 'jose.hernan@davinci.edu.ar', 0, 123456),
(26, '', '', '', '', '', 0, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `billetera`
--
ALTER TABLE `billetera`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
