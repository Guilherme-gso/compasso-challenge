import { Router } from 'express'
import { adaptRoute } from '@/infra/http/adapters/express-router-adapter'
import { makeCreateCityController } from '@/modules/city/factories/controllers/make-create-city-controller'
import { makeFindCityByUfController } from '@/modules/city/factories/controllers/make-find-city-by-uf-controller'
import { makeFindCityByNameController } from '@/modules/city/factories/controllers/make-find-city-by-name-controller'

const cityRouter = Router()

cityRouter.post('/create', adaptRoute(makeCreateCityController()))
cityRouter.get('/find-by-uf', adaptRoute(makeFindCityByUfController()))
cityRouter.get('/find-by-name', adaptRoute(makeFindCityByNameController()))

export { cityRouter }
