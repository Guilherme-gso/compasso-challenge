import { NotFoundCityError } from '@/presentation/errors/not-found-city-error'
import { UseCase } from '@/presentation/protocols/use-case'
import { City } from '../../infra/typeorm/entities/city'
import { CityRepository } from '../../repositories/city-repository'

export class FindCityByUfUseCase implements UseCase {
  constructor(private readonly cityRepository: CityRepository) {}

  async perform(uf: string): Promise<City[]> {
    const city = await this.cityRepository.findByUf(uf.toUpperCase())
    if (!city) throw new NotFoundCityError()
    return city
  }
}
