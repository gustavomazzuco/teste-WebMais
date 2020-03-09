CREATE DATABASE webmais;

USE webmais;

CREATE TABLE produto (
	id int NOT NULL PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL,
    preco float NOT NULL,
    comentario varchar(100) NOT NULL,
    altura float NOT NULL,
    largura float NOT NULL,
    profundidade float NOT NULL
);


select * from produto;