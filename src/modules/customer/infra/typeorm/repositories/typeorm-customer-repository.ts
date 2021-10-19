import { v4 as uuid } from 'uuid'
import { Like } from 'typeorm'
import { PgConnection } from '@/infra/typeorm/helpers'
import { CreateCustomerDto } from '@/modules/customer/dtos/create-customer.dto'
import { UpdateCustomerDto } from '@/modules/customer/dtos/update-customer.dto'
import { CustomerRepository } from '@/modules/customer/repositories/customer-repository'
import { Customer } from '../entities/customer'

export class TypeORMCustomerRepository implements CustomerRepository {
  constructor(
    private readonly repository = PgConnection.getInstance().getRepository(
      Customer
    )
  ) {}

  async save(customer: Customer): Promise<Customer> {
    await this.repository.save(customer)
    return customer
  }

  async create(customerData: CreateCustomerDto): Promise<Customer> {
    const customer = this.repository.create({
      ...customerData,
      id: uuid(),
      sex: customerData.sex.toUpperCase()
    })
    return this.save(customer)
  }

  async findByName(customerName: string): Promise<Customer[]> {
    const query = {
      where: {
        fullName: Like(`%${customerName}%`)
      }
    }

    return this.repository.find(query)
  }

  async findById(customerId: string): Promise<Customer | undefined> {
    return this.repository.findOne({ id: customerId })
  }

  async removeById(customerId: string): Promise<void> {
    await this.repository.delete({ id: customerId })
  }

  async updateCustomerName(
    updateCustomerDto: UpdateCustomerDto
  ): Promise<void> {
    await this.repository.update(
      { id: updateCustomerDto.customerId },
      {
        fullName: updateCustomerDto.newCustomerName
      }
    )
  }
}
