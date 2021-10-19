import { InvalidCustomerSexError } from '@/presentation/errors/invalid-customer-sex-error'
import { MissingParamError } from '@/presentation/errors/missing-param-error'
import { UseCase } from '@/presentation/protocols/use-case'
import { CreateCustomerDto } from '../../dtos/create-customer.dto'
import { Customer } from '../../infra/typeorm/entities/customer'
import { CustomerRepository } from '../../repositories/customer-repository'

export class CreateCustomerUseCase implements UseCase {
  validCustomerSex = ['M', 'F', 'U']

  constructor(private readonly customerRepository: CustomerRepository) {}

  async perform(customerData: CreateCustomerDto): Promise<Customer> {
    if (!customerData.fullName) throw new MissingParamError('fullName')
    if (!customerData.age) throw new MissingParamError('age')
    if (!customerData.sex) throw new MissingParamError('sex')
    if (!customerData.birthDate) throw new MissingParamError('birthDate')
    if (!customerData.cityOfResidence)
      throw new MissingParamError('cityOfResidence')
    if (customerData.sex.length !== 1) throw new InvalidCustomerSexError()
    if (!this.validCustomerSex.includes(customerData.sex.toUpperCase()))
      throw new InvalidCustomerSexError()

    const customer = await this.customerRepository.create(customerData)
    return customer
  }
}
