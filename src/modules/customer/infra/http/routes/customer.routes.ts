import { Router } from 'express'
import { adaptRoute } from '@/infra/http/adapters/express-router-adapter'
import { makeCreateCustomerController } from '@/modules/customer/factories/controllers/make-create-customer-controller'
import { makeFindCustomerByIdController } from '@/modules/customer/factories/controllers/make-find-customer-by-id-controller'
import { makeFindCustomerByNameController } from '@/modules/customer/factories/controllers/make-find-customer-by-name-controller'
import { makeRemoveCustomerController } from '@/modules/customer/factories/controllers/make-remove-customer-controller'
import { makeUpdateCustomerNameController } from '@/modules/customer/factories/controllers/make-update-customer-name-controller'

const customerRouter = Router()

customerRouter.post('/create', adaptRoute(makeCreateCustomerController()))
customerRouter.get(
  '/:customerId/find',
  adaptRoute(makeFindCustomerByIdController())
)
customerRouter.get(
  '/find-by-name',
  adaptRoute(makeFindCustomerByNameController())
)
customerRouter.delete(
  '/remove/:customerId',
  adaptRoute(makeRemoveCustomerController())
)
customerRouter.put('/update', adaptRoute(makeUpdateCustomerNameController()))

export { customerRouter }
