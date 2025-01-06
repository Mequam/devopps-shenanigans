DROP DATABASE vote;
DROP ROLE jango;

CREATE DATABASE vote;
CREATE USER jango WITH ENCRYPTED PASSWORD 'jango';

ALTER ROLE jango SET client_encoding TO 'utf8';
ALTER ROLE jango SET default_transaction_isolation TO 'read committed';
ALTER ROLE jango SET timezone TO 'UTC';

GRANT ALL PRIVILEGES ON DATABASE vote TO jango;

--needed for django to update its migration history
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO jango;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO jango;

--quick fix for jango permisions
GRANT postgres TO jango;
