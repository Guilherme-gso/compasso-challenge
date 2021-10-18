import { UseCase } from '@/presentation/protocols/use-case'
import { CityRepository } from '../../repositories/city-repository'
import { FakeCityRepository } from '../../repositories/implementations/fake-city-repository'
import { FindFakeCityByUfUseCase } from './find-city-by-uf-use-case'

let fakeCityRepository: CityRepository
let findCityByUfUseCase: UseCase

describe('find-city-by-uf-use-case', () => {
  beforeEach(() => {
    fakeCityRepository = new FakeCityRepository()
    findCityByUfUseCase = new FindFakeCityByUfUseCase(fakeCityRepository)
  })

  it('should find a city by uf', async () => {
    const createdCity = await fakeCityRepository.create({
      name: 'Rio de Janeiro',
      uf: 'RJ'
    })

    const city = await findCityByUfUseCase.perform(createdCity.uf)
    expect(city).toHaveProperty('id')
  })
})
