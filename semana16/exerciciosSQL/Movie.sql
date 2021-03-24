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