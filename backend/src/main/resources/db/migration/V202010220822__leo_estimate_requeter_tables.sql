DROP TABLE IF EXISTS generator;
CREATE TABLE estimate (
    id serial primary key,
    requester_id INT
);

CREATE TABLE requester (
    id serial primary key,
    name varchar(255)
);

ALTER TABLE estimate
    ADD CONSTRAINT estimate_requester_fk
        FOREIGN KEY (requester_id)
            REFERENCES requester(id)
            ON DELETE CASCADE;
---------------------------------------------
-- SQL de testes
---------------------------------------------
-- INSERT INTO requester VALUES(1, 'leo');
-- INSERT INTO requester VALUES(2, 'Mario');
-- INSERT INTO estimate VALUES(1, 1);
-- INSERT INTO estimate VALUES(2, 2);
-- SELECT * FROM estimate;
-- SELECT * FROM requester;

-- DROP TABLES
--DROP TABLE requester CASCADE;
--DROP TABLE estimate CASCADE;
