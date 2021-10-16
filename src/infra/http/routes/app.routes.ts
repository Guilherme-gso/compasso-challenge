import { Router } from 'express'
import { cityRouter } from '@/modules/city/infra/http/routes/city.routes'

const appRouter = Router()

appRouter.use('/city', cityRouter)

export { appRouter }
