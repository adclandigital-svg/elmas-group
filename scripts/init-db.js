import { initializeDatabase } from './src/lib/db/init.js';

async function runInit() {
  try {
    await initializeDatabase();
    console.log('Database initialization completed.');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
}

runInit();