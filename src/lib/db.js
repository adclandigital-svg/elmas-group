import { createClient } from '@supabase/supabase-js';
import { Pool } from 'pg';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// For raw SQL queries, use the pool with Supabase connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export { supabase, pool };
export default supabase;