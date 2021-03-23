CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos" ,400000, "1948-08-25", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("004", "Antônio Fagundes", 400000, "1949-04-18", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("006", "Tarcísio Meira", 200000, "1935-10-05", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("007", "Maria Flor", 100000, "1983-08-31", "female");

SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name FROM Actor WHERE gender = "male";

SELECT * FROM Actor WHERE gender = "female";

SELECT salary FROM Actor WHERE name = "Tony Ramos";

SELECT id, name, salary FROM Actor WHERE salary <= 500000;

SELECT id, name FROM Actor WHERE id="002";

SELECT * FROM Actor WHERE (name LIKE "a%" OR name LIKE "j%") AND salary > 300000;

SELECT * FROM Actor WHERE name NOT LIKE "a%" AND salary > 350000;

SELECT * FROM Actor WHERE name LIKE "%g%";

SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
);

INSERT INTO Movie
VALUES ("001", "Se eu fosse você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "2006-01-06", 7);

INSERT INTO Movie
VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

INSERT INTO Movie
VALUES ("003", "Dona Flor e seus dois maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

INSERT INTO Movie
VALUES ("004", "Estômago", "Raimundo Nonato, é um migrante nordestino que chega à cidade grande em busca de oportunidade. Aprende a profissão de cozinheiro e recebe uma melhor oportunidade de trabalho. Sua vida se complica ao se envolver com a prostituta Iria.", "2007-09-26", 10);

SELECT id, title, rating FROM Movie WHERE id="004";

SELECT * FROM Movie WHERE title LIKE "%Flor%";

SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

SELECT * FROM Movie WHERE title LIKE "%vida%";

SELECT * FROM Movie WHERE title LIKE "%casa%" OR synopsis LIKE "%casa%";

SELECT * FROM Movie WHERE release_date < current_date();

SELECT * FROM Movie WHERE release_date < current_date() AND (title LIKE "%casa%" OR synopsis LIKE "%casa%") AND rating > 8;