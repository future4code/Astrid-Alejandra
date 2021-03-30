SET SQL_SAFE_UPDATES = 0;
USE `epps-astrid-bemporad`;

SELECT * FROM Movie;

ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);
ALTER TABLE Movie CHANGE playing_limit_date playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie SET playing_limit_date = "2021-12-05" WHERE title LIKE "%flor%";

DELETE FROM Movie WHERE id="002";
UPDATE Movie SET synopsis="Um filme bem maneiro" WHERE id="002";

SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

SELECT AVG(rating) FROM Movie;

SELECT COUNT(*) FROM Movie WHERE playing_limit_date > current_date();

SELECT COUNT(*) FROM Movie WHERE release_date > current_date();

SELECT title, rating FROM Movie ORDER BY rating DESC LIMIT 1;

SELECT title, rating FROM Movie ORDER BY rating ASC LIMIT 1;

SELECT * FROM Movie ORDER BY title ASC;

INSERT INTO Movie 
VALUES (005, "Cidade de Deus", "uma sinopse", "2002-08-30", 9.5, "2021-08-09"),
(006, "Um cão Andaluz", "outra sinopse", "1929-06-06", 6.3, null),
(007, "Raya e o último dragão", "mais uma sinopse", "2021-04-05", 8.9, "2022-01-01");

UPDATE Movie SET id="005" WHERE id=5;
UPDATE Movie SET id="006" WHERE id=6;
UPDATE Movie SET id="007" WHERE id=7;

SELECT * FROM Movie ORDER BY title DESC LIMIT 5;

SELECT * FROM Movie WHERE (release_date < CURRENT_DATE()) ORDER BY release_date DESC LIMIT 3;

SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;