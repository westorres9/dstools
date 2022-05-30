INSERT INTO tb_department (name) VALUES ('Epis e Epcs');

INSERT INTO tb_category (name) VALUES ('Botinas');

INSERT INTO tb_brand(name) VALUES ('Usafe');

INSERT INTO tb_product (name, description, price, quantity, img_url) VALUES ('Bonita bico PVC Nº38','Botina de Segurança com elastico bico pvc Solado Bidensidade Nº38', 45.60, 40, 'https://github.com/westorres9/dstools/blob/main/backend/src/main/resources/img/botinapvcusafe.png');

INSERT INTO tb_product_category (product_id, category_id) VALUES (1, 1);

INSERT INTO tb_category_department (category_id, department_id) VALUES (1,1);

INSERT INTO tb_product_brand (product_id, brand_id) VALUES (1,1);


