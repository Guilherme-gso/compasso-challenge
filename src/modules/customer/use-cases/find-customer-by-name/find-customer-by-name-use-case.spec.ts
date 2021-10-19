import { CustomerRepository } from '../../repositories/customer-repository'
import { FakeCustomerRepository } from '../../repositories/implementations/fake-customer-repository'
import { FindCustomerByNameUseCase } from './find-customer-by-name-use-case'

let fakeCustomerRepository: CustomerRepository
let findCustomerByNameUseCase: FindCustomerByNameUseCase

describe('find-customer-by-name-use-case', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository()
    findCustomerByNameUseCase = new FindCustomerByNameUseCase(
      fakeCustomerRepository
    )
  })

  it('should find an customer by name', async () => {
    const createdCustomer = await fakeCustomerRepository.create({
      fullName: 'Guilherme Oliveira',
      sex: 'M',
      age: 18,
      birthDate: '26/08/2003',
      cityOfResidence: 'Hortolândia'
    })

    const customers = await findCustomerByNameUseCase.perform(
      createdCustomer.fullName
    )

    expect(customers).toEqual([createdCustomer])
  })
})
