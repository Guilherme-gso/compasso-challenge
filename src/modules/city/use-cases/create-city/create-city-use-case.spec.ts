import { CityAlreadyExistsError } from '@/presentation/errors/city-already-exists-error'
import { FakeCityRepository } from '../../repositories/implementations/fake-city-repository'
import { CreateCityUseCase } from './create-city-use-case'

let fakeCityRepository: FakeCityRepository
let createCityUseCase: CreateCityUseCase

describe('create-city-use-case', () => {
  beforeEach(() => {
    fakeCityRepository = new FakeCityRepository()
    createCityUseCase = new CreateCityUseCase(fakeCityRepository)
  })

  it('should create a new city', async () => {
    const city = await createCityUseCase.perform({
      name: 'Hortolândia',
      uf: 'SP'
    })

    expect(city).toHaveProperty('id')
  })

  it('should not create duplicates cities', async () => {
    await createCityUseCase.perform({
      name: 'Hortolândia',
      uf: 'SP'
    })

    await expect(
      createCityUseCase.perform({
        name: 'Hortolândia',
        uf: 'SP'
      })
    ).rejects.toBeInstanceOf(CityAlreadyExistsError)
  })
})
