import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('cities')
export class City {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  uf!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
