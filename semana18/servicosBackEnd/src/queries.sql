CREATE TABLE Address(
user_id VARCHAR(255) NOT NULL PRIMARY KEY,
cep VARCHAR(8) NOT NULL,
street VARCHAR(255) NOT NULL,
neighborhood VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
state VARCHAR(255) NOT NULL,
FOREIGN KEY (user_id) REFERENCES User(id)
);

SELECT * FROM Address;
SELECT * FROM User;

SELECT u.email, u.role, a.cep FROM User as u
RIGHT JOIN Address as a
ON u.id = a.user_id;

