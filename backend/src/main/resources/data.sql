INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_category (name) VALUES ('Epis');
INSERT INTO tb_category (name) VALUES ('Ferramentas');


INSERT INTO tb_product (name, description, full_price, promo_price, finance_price, img_url) VALUES ('Bonita bico PVC Nº38','Botina de Segurança com elastico bico pvc Solado Bidensidade Nº38', 65.99, 59.99, '63.99 em 1x', 'https://user-images.githubusercontent.com/91570669/171781213-9f89350e-45ec-46dd-8329-91efe2315dbd.png');
INSERT INTO tb_product (name, description, full_price, promo_price, finance_price, img_url) VALUES ('Jogo de Soquetes Estriado 8 a 32 mm','O Jogo de Soquetes Estriado 8 a 32 mm Encaixe 1/2" com 22 Peças - Robust foi feito em aço cromo-vanádio proporcionando durabilidade e resistência e cabo metálico com perfil recartilhado oferecendo firmeza e ergonomia.
', 383.70, 255.60, 'R$ 269,05 em até 5x sem juros', 'https://user-images.githubusercontent.com/91570669/171783595-50110020-e1d1-4cd4-b43c-a1c6c420b1b1.png');

INSERT INTO tb_product_category (product_id, category_id) VALUES (1, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (2, 2);

