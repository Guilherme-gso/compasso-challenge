import { UseCase } from '@/presentation/protocols/use-case'
import { CreateCustomerDto } from '../../dtos/create-customer.dto'
import { Customer } from '../../infra/typeorm/entities/customer'
import { CustomerRepository } from '../../repositories/customer-repository'

export class CreateCustomerUseCase implements UseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async perform(customerData: CreateCustomerDto): Promise<Customer> {
    const customer = await this.customerRepository.create(customerData)
    return customer
  }
}
