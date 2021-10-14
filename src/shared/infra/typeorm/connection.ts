import { createConnection } from 'typeorm'

export default createConnection({
  type: 'mongodb',
  url: process.env.MONGO_URL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: ['src/modules/**/infra/typeorm/entities/*.ts']
})
