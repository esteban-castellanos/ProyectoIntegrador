CREATE SCHEMA `healthy_journey` ;
CREATE TABLE `healthy_journey`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` TEXT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `healthy_journey`.`stores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `image` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `healthy_journey`.`products` (
  `codigo` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `short_description` TEXT NOT NULL,
  `long_description` TEXT NULL,
  `image` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `store_id` INT NOT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `healthy_journey`.`users_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `product_id` INT NULL,
  `quantity` INT NULL,
  `order_number` INT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `healthy_journey`.`products_categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NULL,
  `category_id` INT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `healthy_journey`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  ALTER TABLE `healthy_journey`.`products_categories` 
;
ALTER TABLE `healthy_journey`.`products_categories` 
ADD CONSTRAINT `fk_products_id`
  FOREIGN KEY (`product_id`)
  REFERENCES `healthy_journey`.`products` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  ALTER TABLE `healthy_journey`.`products_categories` 
;
ALTER TABLE `healthy_journey`.`products_categories` 
ADD CONSTRAINT `kf_category_id`
  FOREIGN KEY (`category_id`)
  REFERENCES `healthy_journey`.`categories` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  ALTER TABLE `healthy_journey`.`users_products` 
;
ALTER TABLE `healthy_journey`.`users_products` 
ADD CONSTRAINT `fk_user_id`
  FOREIGN KEY (`user_id`)
  REFERENCES `healthy_journey`.`users` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  ALTER TABLE `healthy_journey`.`users_products` 
;
ALTER TABLE `healthy_journey`.`users_products` 
ADD CONSTRAINT `fk_product_id`
  FOREIGN KEY (`product_id`)
  REFERENCES `healthy_journey`.`products` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  ALTER TABLE `healthy_journey`.`products` 
;
ALTER TABLE `healthy_journey`.`products` 
ADD CONSTRAINT `fk_products_stores`
  FOREIGN KEY (`store_id`)
  REFERENCES `healthy_journey`.`stores` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;