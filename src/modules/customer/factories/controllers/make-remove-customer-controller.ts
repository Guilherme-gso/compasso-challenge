import { Controller } from '@/presentation/protocols'
import { RemoveCustomerController } from '../../infra/http/controllers/remove-customer-controller'
import { makeRemoveCustomerUseCase } from '../use-cases/make-remove-customer-use-case'

export function makeRemoveCustomerController(): Controller {
  const usecase = makeRemoveCustomerUseCase()
  const controller = new RemoveCustomerController(usecase)
  return controller
}
