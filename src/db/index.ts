import { drizzle } from 'drizzle-orm/postgres-js'
// import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgress from 'postgres'
import * as schema from './schema'

// const migrationClient = postgress(process.env.NEXT_PUBLIC_DB_STRING as string)
// migrate(drizzle(migrationClient), 'src/db/migrations')

const queryClient = postgress('postgres://lsplanner:lsplanner@localhost:5432/lsplanner')
const db = drizzle(queryClient, { schema })

export { db }
