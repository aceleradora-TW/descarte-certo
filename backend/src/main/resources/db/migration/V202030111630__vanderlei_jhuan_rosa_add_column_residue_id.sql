ALTER TABLE estimate
    ADD COLUMN residue_id INT;

ALTER TABLE estimate
    ADD CONSTRAINT estimate_residue_fk
        FOREIGN KEY (residue_id)
            REFERENCES residue(id)
            ON DELETE CASCADE;