CREATE TABLE residue_address (
    id serial primary key,
    cep varchar(50)
);

ALTER TABLE estimate
    ADD COLUMN residue_address_id INT;

ALTER TABLE estimate
    ADD CONSTRAINT estimate_residue_address_fk
        FOREIGN KEY (residue_address_id)
            REFERENCES residue_address(id)
            ON DELETE CASCADE;
-------------------------------------------------------
-- SQL de testes
-------------------------------------------------------
-- INSERT INTO residue_address VALUES (1, '00000001');
-- INSERT INTO requester(id, name) VALUES (1, 'Leo');
-- INSERT INTO estimate(id, requester_id, residue_address_id) VALUES (1, 1,1);
-- select * from estimate;

-------------------------------------------------------
-- ROLLBACK
-------------------------------------------------------
-- ALTER TABLE estimate DROP COLUMN residue_address_id;
-- DROP TABLE residue_address;
