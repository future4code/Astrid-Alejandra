SET SQL_SAFE_UPDATES = 0;
USE `epps-astrid-bemporad`;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

SELECT * FROM Actor;
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Anne Hathaway",
birth_date = "1982-11-12"
WHERE id = "003";

SELECT UPPER(name) FROM Actor WHERE name = "Juliana Paes";
SELECT LOWER(name) FROM Actor WHERE name = "Juliana Paes";

UPDATE Actor
SET name="Julie Benz", salary=900000, birth_date="1972-05-01", favorite_ice_cream_flavor="strawberry"
WHERE id="005";

UPDATE Actor
SET name="Pepito de los palotes"
WHERE name="Fernanda";

DELETE FROM Actor WHERE name="Tony Ramos";

DELETE FROM Actor WHERE gender="male" AND salary>1000000;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor WHERE gender = "female" ORDER BY name ASC LIMIT 4;

SELECT COUNT(*), gender FROM Actor GROUP BY gender;

SELECT id, name FROM Actor ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary ASC;

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender FROM Actor GROUP BY gender;