module.exports = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    `./${process.env.TS_NODE_ENV === 'prod' ? 'dist' : 'src'}/modules/**/infra/typeorm/entities/*.{js,ts}`
  ],
  migrations: [
    `./${process.env.TS_NODE_ENV === 'prod' ? 'dist' : 'src'}/infra/typeorm/migrations/*.{js,ts}`
  ],
  cli: {
    migrationsDir: './src/infra/typeorm/migrations'
  },
  ...(process.env.TS_NODE_ENV === 'prod' && { ssl: { rejectUnauthorized: false } }),
}
