select * from producto;
--wiskey tipo = 2 
--espumante es tipo= 3

INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(8,'THE FAMOUS GROUSE WHISKY 750 ML','raducción del ingles-The Famous Grouse es una marca de whisky escocés mezclado, producida por primera vez por Matthew Gloag & Son en 1896, y actualmente producida y propiedad de The Edrington Group. Los whiskies de malta usados ​​en la mezcla de The Famous Grouse incluyen el Highland Park y The Macallan, propiedad de Edringto',717,32,2)
--correccion sin acento
UPDATE producto
SET descripcion='raduccion del ingles-The Famous Grouse es una marca de whisky escoces mezclado, producida por primera vez por Matthew Gloag & Son en 1896, y actualmente producida y propiedad de The Edrington Group. Los whiskies de malta usados ​​en la mezcla de The Famous Grouse incluyen el Highland Park y The Macallan, propiedad de Edringto'
WHERE id=8 
---CUTTY SARK WHISKY 700 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(9,'CUTTY SARK WHISKY 700 ML','una gama de whisky escoces mezclado producido por Edrington plc de Glasgow, cuya oficina principal esta a menos de diez millas del lugar de nacimiento del famoso barco clipper del mismo nombre. El whisky se creo el 23 de marzo de 1923 ',617,32,2)
--THE KING OF SCOTS WHISKY 700 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(10,'THE KING OF SCOTS WHISKY 700 ML','Fred Laing, la segunda generacion de la empresa familiar y el maestro mezclador de la companía, selecciona barricas a mano para el King of Scots y las casa para crear esto, la joya de la corona del Blended Scotch Whisky.',650,40,2)

UPDATE producto
SET descripcion='Fred Laing, la segunda generacion de la empresa familiar y el maestro mezclador de la compania, selecciona barricas a mano para el King of Scots y las casa para crear esto, la joya de la corona del Blended Scotch Whisky.'
WHERE id=10

-------JAMESON IRISH WHISKEY 750 ML + JENGA
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(11,'JAMESON IRISH WHISKEY 750 ML + JENGA','Jameson es un whiskey irlandes mezclado, producido por primera vez en 1780. Originalmente uno de los cuatro whiskeys mas importantes de Dublin,',750,40,2)
---JOHNNIE WALKER RED LABEL WHISKY 750 ML
UPDATE producto
SET descripcion='Jameson es un whiskey irlandes mezclado, producido por primera vez en 1780. Originalmente uno de los cuatro whiskeys mas importantes de Dublin',
nombre='JOHNNIE WALKER RED LABEL WHISKY 750 ML',
 precio=750,cant_producto=31
 tipo=
 WHERE id=11

INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(12,'JOHNNIE WALKER RED LABEL WHISKY 750 ML','Johnnie Walker​ es una marca de whisky escoces producida por Diageo en Kilmarnock, Escocia.',800,32,2)
--JACK DANIELS WHISKY 750 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(13,'JACK DANIELS WHISKY 750 ML','es una destileria y marca de whiskey estadounidense de Tennessee. La diferencia mas notable es que el whisky Tennessee es filtrado en carbon de arce sacarino, dandole un sabor y aroma distintivos. Conocida por sus botellas cuadradas y su etiqueta de color negro, la compania fue establecida en Lynchburg, Tennessee y adquirida por la compania Brown-Forman en 1957.',1500,32,2)

select * from producto;
----BLUE MOON BELGIAN WHITE ALE CERVEZA 330 ML

INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(14,'BLUE MOON BELGIAN WHITE ALE CERVEZA 330 ML','Blue Moon Belgian White, es una cerveza estilo witbier belga lanzada al mercado en 1995. Es fabricada por la compania Blue Moon Brewing Co. en Golden, Colorado, parte de la compania cervecera Tenth and Blake, la division de importacion y embarcaciones de MillerCoors con base en Chicago.',120,52,3)
--ESTRELLA DAMM CERVEZA LATA 500 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(15,'ESTRELLA DAMM CERVEZA LATA 500 ML','Estrella Damm es una cerveza tipo lager elaborada con malta de cebada, arroz y lupulo, siguiendo la receta original desde su fundacion, en 1876. Cuenta con un grado de alcohol de 5,4%  ',110,52,3)

UPDATE producto
SET descripcion='Estrella Damm es una cerveza tipo lager elaborada con malta de cebada, arroz y lupulo, siguiendo la receta original desde su fundacion, en 1876. Cuenta con un grado de alcohol de 5,4%  '
WHERE id=15
---DAB CERVEZA LATA 500 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(16,'DAB CERVEZA LATA 500 ML','Una cerveza de calidad superior, la DAB es una opcion facil de tomar. De color dorado, en boca presenta notas a lupulo y malta.',115,52,3)
--ORANJEBOOM ULTRA STRONG 14 CERVEZA LATA 500 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(17,'DAB CERVEZA LATA 500 ML','Version Ultra Strong es una Pale Lager que, si bien te hace sentir su elevada graduacion alcoholica, no la expresa tanto como uno esperaria. A su aroma a licor y malta se suma un sabor especiado, que deja un final persistente pero agradable.',120,52,3)
UPDATE producto
set nombre='ORANJEBOOM ULTRA STRONG 14 CERVEZA LATA 500 ML'
WHERE id=17

--KAPUZINER WEISSBIER CERVEZA LATA 500 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(19,'KAPUZINER WEISSBIER CERVEZA LATA 500 ML','Esta cerveza alemana es una tipica Hefeweizen que, por supuesto, responde a la ley de pureza de 1516. Super refrescante, es de un color entre dorado y anaranjado, con mucha turbidez, tipico de este estilo cervecero. Tanto en nariz como en boca, los tonos citricos se destacan por sobre el resto, en donde se pueden encontrar levadura y especias.',130,52,3)

UPDATE producto
set descripcion='Esta cerveza alemana es una tipica Hefeweizen que, por supuesto, responde a la ley de pureza de 1516. Super refrescante, es de un color entre dorado y anaranjado, con mucha turbidez, tipico de este estilo cervecero. Tanto en nariz como en boca, los tonos citricos se destacan por sobre el resto, en donde se pueden encontrar levadura y especias.'
WHERE id=19

--AMSTEL PREMIUM CERVEZA LATA 473 ML
select *from producto
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(18,'AMSTEL PREMIUM CERVEZA LATA 473 ML','Amstel Premium Pilsener es una cerveza refinada, de color dorado intenso, facil de tomar, y con un rico tinte a lupulo que le otorga un sabor refrescante y balanceado con caracter',60,52,3)

select * from producto