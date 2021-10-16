import { v4 as uuid } from 'uuid'
import { CreateCityDto } from '../../dtos/create-city.dto'
import { City } from '../../infra/typeorm/entities/city'
import { CityRepository } from '../city-repository'

export class FakeCityRepository implements CityRepository {
  private cities: Array<City> = []

  async save(city: City): Promise<City> {
    this.cities.push(city)
    return city
  }

  async create(cityData: CreateCityDto): Promise<City> {
    const city = new City()
    Object.assign(city, { ...cityData, id: uuid() })
    this.save(city)
    return city
  }
}
