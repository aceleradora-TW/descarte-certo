ALTER TABLE net_promoter_score RENAME COLUMN id_enterpreneur TO id_users;
ALTER TABLE net_promoter_score ADD CONSTRAINT id_users_fk FOREIGN KEY (id_users) REFERENCES public.users(id);
