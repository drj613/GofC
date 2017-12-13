DROP DATABASE IF EXISTS commerce_game2;

CREATE DATABASE commerce_game2;

USE commerce_game2;

CREATE TABLE players (
id INT(10) NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
max_space INT(10) NOT NULL DEFAULT 20,
defense INT(10) NOT NULL DEFAULT 0,
cityid INT(10) NOT NULL DEFAULT 1,
gold INT(10) NOT NULL DEFAULT 100,
grain INT(10) NOT NULL DEFAULT 0,
fish INT(10) NOT NULL DEFAULT 0,
cloth INT(10) NOT NULL DEFAULT 0,
metal INT(10) NOT NULL DEFAULT 0,
silk INT(10) NOT NULL DEFAULT 0,
wood INT(10) NOT NULL DEFAULT 0,
weapons INT(10) NOT NULL DEFAULT 0,
gems INT(10) NOT NULL DEFAULT 0,
medicine INT(10) NOT NULL DEFAULT 0,
poison INT(10) NOT NULL DEFAULT 0,
dragon_glass INT(10) NOT NULL DEFAULT 0,
wine INT(10) NOT NULL DEFAULT 0,
PRIMARY KEY(id)
);

CREATE TABLE cities (
id INT(10) NOT NULL AUTO_INCREMENT,
cityname VARCHAR(30) NOT NULL,
xcoord INT(5) NOT NULL,
ycoord INT(5) NOT NULL,
grain_low INT(10) NOT NULL,
grain_high INT(10) NOT NULL,
fish_low INT(10) NOT NULL,
fish_high INT(10) NOT NULL,
cloth_low INT(10) NOT NULL,
cloth_high INT(10) NOT NULL,
metal_low INT(10) NOT NULL,
metal_high INT(10) NOT NULL,
silk_low INT(10) NOT NULL,
silk_high INT(10) NOT NULL,
wood_low INT(10) NOT NULL,
wood_high INT(10) NOT NULL,
weapons_low INT(10) NOT NULL,
weapons_high INT(10) NOT NULL,
gems_low INT(10) NOT NULL,
gems_high INT(10) NOT NULL,
medicine_low INT(10) NOT NULL,
medicine_high INT(10) NOT NULL,
poison_low INT(10) NOT NULL,
poison_high INT(10) NOT NULL,
dragonglass_low INT(10) NOT NULL,
dragonglass_high INT(10) NOT NULL,
wine_low INT(10) NOT NULL,
wine_high INT(10) NOT NULL,
PRIMARY KEY(id)
);







