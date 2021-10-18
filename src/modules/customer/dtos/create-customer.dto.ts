/**
 * M - Masculino
 * F - Feminino
 * U - Indefinido
 */

type CustomerSex = 'F' | 'M' | 'U'

export interface CreateCustomerDto {
  fullName: string
  sex: CustomerSex
  birthDate: string
  age: number
  cityOfResidence: string
}
