-- Creation database when docker starts

SELECT 'CREATE DATABASE togree'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'togree')\gexec
