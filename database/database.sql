-- Table: public.games

-- DROP TABLE public.games;

CREATE TABLE public.games
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    title "char"[],
    description "char"[],
    image "char"[],
    created_at timestamp with time zone NOT NULL,
    CONSTRAINT games_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.games
    OWNER to postgres;
-- Index: id

-- DROP INDEX public.id;

CREATE UNIQUE INDEX id
    ON public.games USING btree
    (id DESC NULLS LAST)
    TABLESPACE pg_default;