import { Controller } from '@/presentation/protocols'
import { UpdateCustomerNameController } from '../../infra/http/controllers/update-customer-name-controller'
import { makeUpdateCustomerNameUseCase } from '../use-cases/make-update-customer-name-use-case'

export function makeUpdateCustomerNameController(): Controller {
  const usecase = makeUpdateCustomerNameUseCase()
  const controller = new UpdateCustomerNameController(usecase)
  return controller
}
