select * from producto;
--wiskey tipo = 2 
--espumante es tipo= 3

--correccion sin acento
---CUTTY SARK WHISKY 700 ML
--THE KING OF SCOTS WHISKY 700 ML

UPDATE producto
SET descripcion=''
WHERE id=10


--JACK DANIELS WHISKY 750 ML

select * from producto;
----BLUE MOON BELGIAN WHITE ALE CERVEZA 330 ML

--ESTRELLA DAMM CERVEZA LATA 500 ML

UPDATE producto
SET descripcion=' '
WHERE id=15
---DAB CERVEZA LATA 500 ML
--ORANJEBOOM ULTRA STRONG 14 CERVEZA LATA 500 ML
INSERT INTO producto(id, nombre,descripcion,precio,cant_producto,tipo)
values(17,'DAB CERVEZA LATA 500 ML','Version Ultra Strong es una Pale Lager que, si bien te hace sentir su elevada graduacion alcoholica, no la expresa tanto como uno esperaria. A su aroma a licor y malta se suma un sabor especiado, que deja un final persistente pero agradable.',120,52,3)
UPDATE producto
set nombre='ORANJEBOOM ULTRA STRONG 14 CERVEZA LATA 500 ML'
WHERE id=17

--KAPUZINER WEISSBIER CERVEZA LATA 500 ML



--AMSTEL PREMIUM CERVEZA LATA 473 ML

select * from producto
