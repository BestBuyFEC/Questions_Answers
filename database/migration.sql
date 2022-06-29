DROP DATABASE IF EXISTS qa_db;

CREATE DATABASE qa_db;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;


CREATE TABLE users (
    userID SERIAL NOT NULL,
    username TEXT,
    PRIMARY KEY(userID)
);

CREATE TABLE questions (
    question_id SERIAL NOT NULL,
    question TEXT,
    PRIMARY KEY (question_id),
    userID INTEGER REFERENCES users(userID)
);

CREATE TABLE answers (
    answer_id SERIAL NOT NULL,
    answer TEXT,
    PRIMARY KEY (answer_id),
    userID INTEGER REFERENCES users(userID),
    question_id INTEGER REFERENCES questions(question_id)
);