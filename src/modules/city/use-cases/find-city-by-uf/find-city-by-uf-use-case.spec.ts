import { CityRepository } from '../../repositories/city-repository'
import { FakeCityRepository } from '../../repositories/implementations/fake-city-repository'
import { FindCityByUfUseCase } from './find-city-by-uf-use-case'

let fakeCityRepository: CityRepository
let findCityByUfUseCase: FindCityByUfUseCase

describe('find-city-by-uf-use-case', () => {
  beforeEach(() => {
    fakeCityRepository = new FakeCityRepository()
    findCityByUfUseCase = new FindCityByUfUseCase(fakeCityRepository)
  })

  it('should find a city by uf', async () => {
    const createdCity = await fakeCityRepository.create({
      name: 'Rio de Janeiro',
      uf: 'RJ'
    })

    const cities = await findCityByUfUseCase.perform(createdCity.uf)
    expect(cities).toEqual([createdCity])
  })
})
