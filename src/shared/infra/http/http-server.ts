import 'dotenv/config'

import http from 'http'
import { expressServer } from './express-server'

const PORT = process.env.PORT || 3333

http.createServer(expressServer).listen(PORT, () => {
  console.log(`Process running on PORT: ${PORT}`)
})
