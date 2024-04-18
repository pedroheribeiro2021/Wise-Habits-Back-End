import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./users"

@Entity("habits")
export class Habits {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 100 })
  name: string

  @Column({ length: 100 })
  description: string

  @Column()
  priority: number

  @Column()
  status: boolean

  @Column({ length: 7, nullable: true, default: "SMTWTFS" })
  weekDays: string

  @ManyToOne(() => User, (user) => user.habits)
  user: User
}
