CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id) 
);

SELECT * FROM Rating;
SELECT * FROM Movie;
SELECT * FROM Actor;
SELECT * FROM MovieCast; 

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001", "ótimo filme", 8.9, "004");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("002", "ótimo filme", 8.9, "0555");
INSERT INTO Rating
VALUES ("003", "filme bem bom", 9, "006");
INSERT INTO Rating
VALUES ("004", "um filme muito bom", 8.8, "005");

ALTER TABLE Movie
DROP COLUMN Rating;

DELETE FROM Movie WHERE id = "004";

CREATE TABLE MovieCast (
movie_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast
VALUES("004", "002");

INSERT INTO MovieCast
VALUES("004", "003");

INSERT INTO MovieCast
VALUES("003", "005");

INSERT INTO MovieCast
VALUES("005", "004");

INSERT INTO MovieCast
VALUES("007", "004");

INSERT INTO MovieCast
VALUES("006", "006");

DELETE FROM MovieCast WHERE actor_id = "006";

SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT Movie.id, title, rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT Movie.id, title, rate, comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;

SELECT Movie.id, title, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast ON Movie.id = MovieCast.movie_id;

SELECT AVG (Rating.rate), Movie.title FROM Movie
LEFT JOIN Rating ON  Movie.id = Rating.movie_id
GROUP BY Movie.id;

SELECT * FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON MovieCast.actor_id = Actor.id;

SELECT Movie.id as movie_id, Movie.title as movie_title, Actor.id as actor_id, Actor.name as actor_name FROM Movie
LEFT JOIN MovieCast on Movie.id = MovieCast.movie_id
JOIN Actor ON MovieCast.actor_id = Actor.id;

SELECT Movie.title as movie_title, Actor.name as actor_name, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating on Movie.id = Rating.movie_id
LEFT JOIN MovieCast on Rating.movie_id = MovieCast.movie_id
LEFT JOIN Actor on MovieCast.actor_id = Actor.id;
