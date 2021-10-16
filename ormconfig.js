module.exports = {
  name: 'default',
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/infra/typeorm/migrations'
  }
}
