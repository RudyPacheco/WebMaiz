CREATE DATABASE web_maiz;


CREATE TABLE importancia(
titulo_dato VARCHAR(50) NOT NULL,
definicion_dato TEXT NOT NULL,
constraint PK_IMPORTANCIA PRIMARY KEY(titulo_dato)
);


CREATE TABLE nutricion(
titulo_nutricion VARCHAR(50) NOT NULL,
definicion_nutricion TEXT NOT NULL,
constraint PK_NUTRICION PRIMARY KEY(titulo_nutricion)
);

CREATE TABLE gastronomia(
titulo_platillo VARCHAR(50) NOT NULL,
definicion_platillo TEXT NOT NULL,
constraint PK_GASTRONOMIA PRIMARY KEY(titulo_platillo)
);


