import { NotFoundCustomerError } from '@/presentation/errors/not-found-customer-error'
import { UseCase } from '@/presentation/protocols/use-case'
import { Customer } from '../../infra/typeorm/entities/customer'
import { CustomerRepository } from '../../repositories/customer-repository'

export class FindCustomerByIdUseCase implements UseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async perform(customerId: string): Promise<Customer> {
    const customer = await this.customerRepository.findById(customerId)

    if (!customer) {
      throw new NotFoundCustomerError()
    }

    return customer
  }
}
