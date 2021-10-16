import { Router } from 'express'
import { adaptRoute } from '@/infra/http/adapters/express-router-adapter'
import { makeCreateCityController } from '@/modules/city/factories/controllers/make-create-city-controller'

const cityRouter = Router()

cityRouter.post('/create', adaptRoute(makeCreateCityController()))

export { cityRouter }
