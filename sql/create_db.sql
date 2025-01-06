DROP DATABASE vote;
DROP USER jango;

CREATE DATABASE vote;
CREATE USER jango WITH ENCRYPTED PASSWORD 'jango';

ALTER ROLE jango SET client_encoding TO 'utf8';
ALTER ROLE jango SET default_transaction_isolation TO 'read committed';
ALTER ROLE jango SET timezone TO 'UTC';

GRANT ALL PRIVILEGES ON vote TO jango;
