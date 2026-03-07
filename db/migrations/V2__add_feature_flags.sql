-- V2: Tabla de feature flags
CREATE TABLE IF NOT EXISTS feature_flags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    enabled BOOLEAN DEFAULT false,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO feature_flags (name, enabled, description) VALUES
  ('NEW_ITEMS_UI', false, 'Habilita la nueva interfaz de items'),
  ('MAINTENANCE_MODE', false, 'Activa el modo mantenimiento');

-- V2: Agregar columna deployed_by a config_log
ALTER TABLE config_log ADD COLUMN IF NOT EXISTS git_sha VARCHAR(100);

INSERT INTO config_log (env, version, deployed_by, git_sha)
VALUES ('dev', '0.2.0', 'semana2-setup', 'local');
