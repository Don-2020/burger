-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS seinfield_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfield_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE seinfield_db;

-- Created the table "schools"
CREATE TABLE cast (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  coolness_points INTEGER(10),
  attitude VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

