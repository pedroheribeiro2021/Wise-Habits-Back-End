import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./users"
// import { WeekDays } from "./weekDays"

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

  @Column({ default: 0, nullable: true })
  status: number

  // @Column("text", { array: true })
  // weekDays: string[]

  @Column("simple-array", { default: [], nullable: true })
  weekDays: string[]

  @ManyToOne(() => User, (user) => user.habits)
  user: User

  // @OneToMany(() => WeekDays, (weekDay) => weekDay.habits, { cascade: true })
  // weekDays: WeekDays[]
}
