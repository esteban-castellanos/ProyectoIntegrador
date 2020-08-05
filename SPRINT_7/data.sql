INSERT INTO categories VALUES
(1, "filtroSinTacc");
INSERT INTO categories VALUES
(2, "filtroSinLactosa");
INSERT INTO categories VALUES
(3, "filtroOrg");
INSERT INTO `healthy_journey`.`stores` (`id`, `name`, `description`, `image`) VALUES ('1', 'Mistica Natural', 'Con 9 años en el rubro, es la primera tienda dedicada a los productos orgánicos en Mendoza. Ofrecemos productos orgánicos, medicinas naturales, productos ecológicos para el hogar, planificación integral y alimentos para celíacos y veganos.', 'mistica_natural.png');
INSERT INTO `healthy_journey`.`stores` (`id`, `name`, `description`, `image`) VALUES ('2', 'Natureba', 'Natureba ofrece productos saludables de altísima calidad. Busca mejorar la alimentación de sus consumidores ofreciendo toda la variedad de productos para lograrlo.', 'natureba.png');
INSERT INTO `healthy_journey`.`stores` (`id`, `name`, `description`, `image`) VALUES ('3', 'Cardamomo', 'Difundimos la alimentación saludable y vegana. Queremos compartir lo simple y delicioso que es cocinar y comer de esta manera.', 'cardamomo.png');
INSERT INTO `healthy_journey`.`stores` (`id`, `name`, `description`, `image`) VALUES ('4', 'Reparto Alegría', 'Reparto Alegría se dedica a la Venta de Frutas y Hortalizas Orgánicas en el Gran Mendoza. Además, poseen huertas propias en Maipú.', 'reparto_alegria.png');
INSERT INTO `healthy_journey`.`stores` (`id`, `name`, `description`, `image`) VALUES ('5', 'Cabaña Piedras Blancas', 'Promovemos el desarrollo de la cultura por los alimentos gourmet, que tienen estrecha vinculación con el respeto por la producción, la calidad de los insumos y las manos de nuestra gente.', 'cabaคa_piedras_blancas.jpg');
INSERT INTO `healthy_journey`.`stores` (`id`, `name`, `description`, `image`) VALUES ('6', 'Vaquets', 'Está pensado para los más exigentes consumidores, no solo se esfuerza por cumplir con las expectativas del paladar, sino que también se adapta a una amplia gama de necesidades.', 'vaquets.jpg');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `image`, `price`, `store_id`) VALUES ('1015','1', 'Almendras', 'Almendras orgánicas peladas 100gr', 'almendras.png', '180', '1');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `image`, `price`, `store_id`) VALUES ('2005','2', 'Leche de Almendras', 'Leche de Almendras 50cl', 'leche_almendras.png', '250', '2');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `long_description`, `image`, `price`, `store_id`) VALUES ('1016','3', 'Chocolate', 'Chocolate 1kilo', 'Dr. Cacao: ¡No somos golosina, somos alimento! Vinimos a reconectarte con el verdadero sabor del cacao. Somos deliciosos, somos reales.', 'chocolate_drcacao.jpg', '50', '1');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `long_description`, `image`, `price`, `store_id`) VALUES ('1017','4', 'Vino', 'Vino Orgánico Malbec Roble Cecchin', 'Vino certificado orgánico y apto para veganos. Bodega Cecchin toma los frutos en el momento preciso respetando su propio espacio y tiempo. El proceso de producción y elaboración natural acompaña al medio ambiente, sosteniendo la continuidad de “no químicos” hasta acercar el producto a las mesas.', 'vino_organico.jpg', '480', '1');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `image`, `price`, `store_id`) VALUES ('1018','5', 'Pistachos', 'Pistachos con cáscara 500gr', 'pistachos.png', '70', '1');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `long_description`, `image`, `price`, `store_id`) VALUES ('2006','6', 'Yogur', 'Yogur 160gr, varios gustos disponibles.', 'Yogur elaborado a base de leche de coco y sin azúcar. Sin tacc, sin lactosa y vegano', 'yogur.png', '130', '2');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `image`, `price`, `store_id`) VALUES ('1019','7', 'Avena', 'Avena arrollada orgánica 500gr', 'avena_organica.png', '500', '1');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `image`, `price`, `store_id`) VALUES ('1020','8', 'Coco', 'Coco en escamas 100gr', 'coco_escamas.jpg', '80', '1');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `image`, `price`, `store_id`) VALUES ('3005','9', 'Aceite de coco', 'Aceite de coco Neutro “MK Orgánic” 660cc', 'aceite_coco.jpg', '560', '3');
INSERT INTO `healthy_journey`.`products` (`code`,`id`, `name`, `short_description`, `long_description`, `image`, `price`, `store_id`) VALUES ('2007','10', 'Helado', '500gr, varios gustos disponibles', 'A base de leche de coco, endulzado con azúcar orgánica.', 'helado.png', '360', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('1', '1', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('2', '1', '1');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('3', '1', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('4', '2', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('5', '3', '1');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('6', '3', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('7', '3', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('8', '4', '1');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('9', '4', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('10', '4', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('11', '5', '1');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('12', '5', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('13', '5', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('14', '6', '1');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('15', '6', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('16', '7', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('17', '7', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('18', '8', '1');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('19', '8', '2');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('20', '8', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('21', '9', '3');
INSERT INTO `healthy_journey`.`products_categories` (`id`, `product_id`, `category_id`) VALUES ('22', '10', '2');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('1', 'Luciana', 'Perez', 'lucianaperez@gmail.com', 'qweqwe12', 'user');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('2', 'Bruno', 'Marchetta', 'brunito@gmail.com', 'qweqwe12', 'user');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('3', 'Pedro', 'Martinez', 'pedromartinez@gmail.com', 'qweqwe12', 'user');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('4', 'Juan', 'Perez', 'juan1@gmail.com', '$2b$10$YyHQGYYxXjQ8K79iFXlOOe6U2PN7uI.a7uIOaZV.j2Z4oqtrnGboW', 'user');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('5', 'Agustin', 'Perez', 'agustin@gmail.com', '$2b$10$PslleWuUxSOuxx5xXtRRau4uMj8unBc.xesKodSiJopR2VoJ1T1bm', 'user');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('6', 'Federica', 'Torres', 'federicatorres@gmail.com', '$2b$10$NZdaBVBmr4/jh6lOnh/Pj.0/aNclPaF7DtraEtaL8oe0Kc5d.Fhf2', 'user');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('7', 'Verónica', 'Sardin', 'veronicasardin@gmail.com', '$2b$10$YqXOgNXB33/Ezu.tgljbL.iGtm0ZQwuJ26hjAoB1u5cPrYbOqeiQe', 'adm');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('8', 'Ana', 'Del Arco', 'anadelarco@gmail.com', '$2b$10$pa93NR3PBWop532HRloh/OooflmEgaphSlmgVKsoii.SMmZhtcqiC', 'adm');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('9', 'Esteban', 'Castellanos', 'estebancastellanos@gmail.com', '$2b$10$0QgG5EX83.wZ3JxfxXsGQ.DmplNTuQWzD7529VAENRkygxpWOTn5C', 'adm');
INSERT INTO `healthy_journey`.`users` (`id`, `first_name`, `last_name`, `email`, `password`, `category`) VALUES ('10', 'Fernando', 'Fuster', 'fernandofuster@gmail.com', '$2b$10$huHbuT4MLLNQ9I.X9nQPjOzZmC/keDX/QTYncF7MYxjB5kf4bZjJO', 'adm');
INSERT INTO `healthy_journey`.`users_products` (`id`, `user_id`, `product_id`, `quantity`, `order_number`) VALUES ('1', '1', '2', '4', '1030');
INSERT INTO `healthy_journey`.`users_products` (`id`, `user_id`, `product_id`, `quantity`, `order_number`) VALUES ('2', '3', '4', '2', '2030');
INSERT INTO `healthy_journey`.`users_products` (`id`, `user_id`, `product_id`, `quantity`, `order_number`) VALUES ('3', '3', '5', '1', '2030');
INSERT INTO `healthy_journey`.`users_products` (`id`, `user_id`, `product_id`, `quantity`, `order_number`) VALUES ('4', '2', '8', '3', '4005');

