-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;


CREATE DATABASE burgers_db;

USE burgers_db;
-- Table for burgers
CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN DEFUALT NULL,
  PRIMARY KEY(id)
);

