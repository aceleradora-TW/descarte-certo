CREATE TABLE net_promoter_score (
  id serial primary key,
  score int,
  comments varchar(255),
  id_enterpreneur bigint not null,
  FOREIGN KEY (id_enterpreneur) REFERENCES enterpreneur(id)
);

