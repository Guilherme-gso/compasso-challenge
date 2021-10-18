import { CustomerRepository } from '../../repositories/customer-repository'
import { FakeCustomerRepository } from '../../repositories/implementations/fake-customer-repository'
import { CreateCustomerUseCase } from './create-customer-use-case'

let fakeCustomerRepository: CustomerRepository
let createCustomerUseCase: CreateCustomerUseCase

describe('create-customer-use-case', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository()
    createCustomerUseCase = new CreateCustomerUseCase(fakeCustomerRepository)
  })

  it('should create a new customer', async () => {
    const customer = await createCustomerUseCase.perform({
      fullName: 'Guilherme Oliveira',
      sex: 'M',
      age: 18,
      birthDate: '26/08/2003',
      cityOfResidence: 'Hortolândia'
    })

    expect(customer).toHaveProperty('id')
  })
})
