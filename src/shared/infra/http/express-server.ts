import express from 'express'

const expressServer = express()

expressServer.use('/api', (_, res) => {
  return res.json({ success: true })
})

export { expressServer }
