import { Controller } from '@/presentation/protocols'
import { CreateCustomerController } from '../../infra/http/controllers/create-customer-controller'
import { makeCreateCustomerUseCase } from '../use-cases/make-create-customer-use-case'

export function makeCreateCustomerController(): Controller {
  const usecase = makeCreateCustomerUseCase()
  const controller = new CreateCustomerController(usecase)
  return controller
}
