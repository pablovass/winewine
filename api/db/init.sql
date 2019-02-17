CREATE DATABASE test23;
GRANT USAGE ON *.* TO user23@localhost IDENTIFIED BY 'pass23';
GRANT ALL PRIVILEGES ON test23.* TO user23@localhost ;
USE test23;

CREATE TABLE Producto(
       id INT NOT NULL AUTO_INCREMENT,
       nombre VARCHAR(30) NOT NULL,
       descripcion VARCHAR(1000) NOT NULL,
       precio FLOAT NOT NULL,
       cant_producto INT NOT NULL,
       PRIMARY KEY (id)
);





CREATE TABLE Usuarios(
       id INT NOT NULL AUTO_INCREMENT,
       usuario VARCHAR(30) NOT NULL,
       pass VARCHAR(30) NOT NULL,
       nombre varchar(30) not null, 
       apellido varchar(45) not null, 
       email varchar (60) not null,
       role INT NOT NULL,
       PRIMARY KEY (id)
);

INSERT INTO Usuarios (usuario,pass,role) VALUES ('admin','admin',1);
INSERT INTO Usuarios (usuario,pass,role) VALUES ('user','passw0rd',0);


INSERT INTO Usuarios (usuario,pass,role, nombre,apellido,email)
VALUES ('admin','admin',1, 'Pablo','Vass','pablo.vallejos@davinci.edu.ar');



INSERT INTO Usuarios (usuario,pass,role, nombre,apellido,email)
VALUES ('jose2017','123456',0, 'Jose','Hernan','jose.hernan@davinci.edu.ar');


INSERT INTO Usuarios (usuario,pass,role) VALUES ('admin','admin',1);
INSERT INTO Usuarios (usuario,pass,role) VALUES ('user','passw0rd',0);


INSERT INTO Usuarios (usuario,pass,role, nombre,apellido,email)
VALUES ('admin','admin',1, 'Pablo','Vass','pablo.vallejos@davinci.edu.ar');



INSERT INTO Usuarios (usuario,pass,role, nombre,apellido,email)
VALUES ('jose2017','123456',0, 'Jose','Hernan','jose.hernan@davinci.edu.ar');
