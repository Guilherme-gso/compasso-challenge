import 'dotenv/config'

import { env } from '@/config/env'
import { PgConnection } from '../typeorm/helpers'

const PORT = env.port || 3333
const pgConnection = PgConnection.getInstance()

pgConnection
  .connect()
  .then(async () => {
    const { app } = await import('@/infra/http/app')
    app.listen(PORT, () =>
      console.log(`Process running on: http://localhost:${PORT}`)
    )
  })
  .catch(error => console.log(error))
