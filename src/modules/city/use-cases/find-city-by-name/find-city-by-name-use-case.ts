import { NotFoundCityError } from '@/presentation/errors/not-found-city-error'
import { UseCase } from '@/presentation/protocols/use-case'
import { City } from '../../infra/typeorm/entities/city'
import { CityRepository } from '../../repositories/city-repository'

export class FindCityByNameUseCase implements UseCase {
  constructor(private readonly cityRepository: CityRepository) {}

  async perform(cityName: string): Promise<City> {
    const city = await this.cityRepository.findByName(cityName)

    if (!city) {
      throw new NotFoundCityError()
    }

    return city
  }
}
