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
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(12,'JOHNNIE WALKER RED LABEL WHISKY 750 ML','Johnnie Walker​ es una marca de whisky escoces producida por Diageo en Kilmarnock, Escocia.',800,32,2)
--JACK DANIELS WHISKY 750 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(13,'JACK DANIELS WHISKY 750 ML','es una destileria y marca de whiskey estadounidense de Tennessee. La diferencia mas notable es que el whisky Tennessee es filtrado en carbon de arce sacarino, dandole un sabor y aroma distintivos. Conocida por sus botellas cuadradas y su etiqueta de color negro, la compania fue establecida en Lynchburg, Tennessee y adquirida por la compania Brown-Forman en 1957.',1500,32,2)
