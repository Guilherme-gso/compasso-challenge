import { UseCase } from '@/presentation/protocols/use-case'
import { Customer } from '../../infra/typeorm/entities/customer'
import { CustomerRepository } from '../../repositories/customer-repository'

export class FindCustomerByNameUseCase implements UseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async perform(customerName: string): Promise<Customer> {
    const customer = await this.customerRepository.findByName(customerName)

    if (!customer) {
      // throws new Error
      throw new Error()
    }

    return customer
  }
}
