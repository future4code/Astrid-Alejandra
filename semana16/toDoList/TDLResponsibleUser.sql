CREATE TABLE TDLResponsibleUser (
task_id INT NOT NULL,
responsible_user_id INT NOT NULL,
FOREIGN KEY (task_id) REFERENCES TDLTask(id),
FOREIGN KEY (responsible_user_id) REFERENCES TDLUser(id)
);


