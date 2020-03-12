
DROP DATABASE IF EXISTS Squawk;

CREATE DATABASE Squawk;

USE Squawk;


DROP TABLE IF EXISTS Restaurants;

CREATE TABLE `Restaurants` (
    `id` INTEGER AUTO_INCREMENT,
    `name` VARCHAR(30) DEFAULT NULL,
    PRIMARY KEY(`id`)
);

INSERT INTO Restaurants (name) VALUES ('test1');
INSERT INTO Restaurants (name) VALUES ('test2');

DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
    `user_id` INTEGER AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `profile_pic` VARCHAR(300) DEFAULT NULL,
    `reviews` INTEGER DEFAULT 0,
    `friends` INT DEFAULT 0,
    `photos` INT DEFAULT 0,
    `location` VARCHAR(30),
    primary key(`user_id`)
);

INSERT INTO users (name) VALUES ('name1');
INSERT INTO users (name) VALUES ('name2');  

DROP TABLE IF EXISTS reviews;

CREATE TABLE `reviews` (
    `review_id` INTEGER AUTO_INCREMENT,
    `id_User table` INTEGER NULL DEFAULT NULL,
    `id_Restaurants` INTEGER NULL DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `rating` INTEGER NOT NULL,
    `body` TEXT NOT NULL,
    `useful_count` INTEGER NULL DEFAULT 0,
    `cool_count` INTEGER NULL DEFAULT 0,
    `funny_count` INTEGER NULL DEFAULT 0,
    `check-ins` INTEGER NULL DEFAULT 0,
    PRIMARY KEY(`review_id`)
);

INSERT INTO `reviews` (rating, body) VALUES (3, 'gddgssdgsggdsgsgsgsgdssssgsgs');
INSERT INTO `reviews` (rating, body) VALUES (5, 'gddgssdgsgsgdsdsgsgdsggsgsdgsgsgs');