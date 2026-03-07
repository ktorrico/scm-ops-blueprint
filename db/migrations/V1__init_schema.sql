CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS config_log (
    id SERIAL PRIMARY KEY,
    env VARCHAR(50) NOT NULL,
    version VARCHAR(50) NOT NULL,
    deployed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deployed_by VARCHAR(100)
);

INSERT INTO config_log (env, version, deployed_by)
VALUES ('dev', '0.1.0', 'initial-setup');
