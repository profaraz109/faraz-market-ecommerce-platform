import {defineConfig} from 'drizzle-kit';
export default defineConfig({out:'./mysql-migrations',schema:'./db/mysql-schema.ts',dialect:'mysql'});
