-- V1__initial_schema.sql
-- Migración inicial para crear tablas base
CREATE TABLE IF NOT EXISTS releases (
    id SERIAL PRIMARY KEY,
    version VARCHAR(50) NOT NULL UNIQUE,
    release_notes TEXT,
    artifact_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deployed_at TIMESTAMP,
    deployed_by VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS config_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    value TEXT,
    environment VARCHAR(50),
    version VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
