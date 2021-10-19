import { Router } from 'express'
import { cityRouter } from '@/modules/city/infra/http/routes/city.routes'
import { customerRouter } from '@/modules/customer/infra/http/routes/customer.routes'

const appRouter = Router()

appRouter.use('/city', cityRouter)
appRouter.use('/customer', customerRouter)

export { appRouter }
