import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: './src/db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgres://lsplanner:lsplanner@localhost:5432/lsplanner',
  },
  verbose: true,
  strict: true,
})
