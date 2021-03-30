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
