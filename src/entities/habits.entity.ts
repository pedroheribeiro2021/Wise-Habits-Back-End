import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm"
import { User } from "./users.entity"
import { HabitStatus } from "./habitsStatus.entity"
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

  // @Column({ default: 0, nullable: true })
  // status: number

  @Column("simple-array", { nullable: true })
  weekDays: string[]

  // @Column("jsonb", { default: [], nullable: true }) // Alterado para suportar JSONB
  // weekDays: { [day: string]: { status: number } }[]

  @ManyToOne(() => User, (user) => user.habits, {
    onDelete: "CASCADE",
  })
  user: User

  @OneToMany(() => HabitStatus, (habitStatus) => habitStatus.habit)
  statuses: HabitStatus[]
}
