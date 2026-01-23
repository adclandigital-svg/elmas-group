CREATE TABLE IF NOT EXISTS public.users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO public.users (email, password_hash)
VALUES (
  'randomuser@example.com',
  '12345'
)
ON CONFLICT (email) DO NOTHING;
