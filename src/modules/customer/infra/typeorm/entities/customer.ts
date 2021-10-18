import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('customers')
export class Customer {
  @PrimaryColumn()
  id!: string

  @Column()
  fullName!: string

  @Column()
  sex!: string

  @Column()
  birthDate!: string

  @Column()
  age!: number

  @Column()
  cityOfResidence!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
