select * from producto
where id = 14
and tipo=3

select * from producto

JAMESON IRISH WHISKEY 750 ML + JENGA

UPDATE producto
SET nombre='JOHNNIE WALKER RED LABEL'
WHERE id=12
 
 select * 
 from producto
 where tipo = 3
 
 select * 
  from usuarios
  
  	CREATE TABLE Compras(
       id INT NOT NULL AUTO_INCREMENT,
       idPersona int NOT NULL,
       idProducto1 int NOT NULL,
       precio1 int NOT NULL,
       cant_producto1 int not null,
       idProducto2 int,
       cant_producto2 int, 
       precio2 int,
       idProducto3 int ,
       precio3 int,
       cant_producto3 int,
       idProducto4 int,
       precio4 int,
       cant_producto4 int,
       idProducto5 int,
       precio5 int,
       cant_producto5 int,
       nro_compra int NOT NULL ,
       precio_total_compra int not Null,
       cant_producto int NOT NULL,
       fecha date,
       PRIMARY KEY (id)
);
select * from compras
select * from producto

insert into compras(id,idPersona,idProducto1,precio1,cant_producto1,idProducto2,precio2,cant_producto2,idProducto3,precio3,cant_producto3,idProducto4,precio4,cant_producto4,idProducto5,precio5,cant_producto5,nro_compra,precio_total_compra,cant_producto,fecha)
values(1,4,1,498,1,2,402,1,3,1000,1,4,1550,1,5,391,1,1,3841,5,STR_TO_DATE('12-10-2015', '%d-%m-%Y'))

insert into compras(idPersona,idProducto1,precio1,cant_producto1,nro_compra,precio_total_compra,cant_producto,fecha)
values(4,1,498,2,2,996,2,STR_TO_DATE('1-01-2013', '%d-%m-%Y'))


insert into compras(idPersona,idProducto1,precio1,cant_producto1,idProducto2,precio2,cant_producto2,idProducto3,precio3,cant_producto3,idProducto4,precio4,cant_producto4,nro_compra,precio_total_compra,cant_producto,fecha)
values(4,1,498,1,2,402,1,3,1000,1,4,1550,1,1,3450,4,STR_TO_DATE('12-10-2015', '%d-%m-%Y'))

insert into compras(idPersona,idProducto1,precio1,cant_producto1,idProducto2,precio2,cant_producto2,idProducto3,precio3,cant_producto3,nro_compra,precio_total_compra,cant_producto,fecha)
values(4,1,498,1,2,402,1,3,1000,1,1,1900,4,STR_TO_DATE('12-10-2017', '%d-%m-%Y'))


UPDATE compras
SET cant_producto=3
WHERE id=4
