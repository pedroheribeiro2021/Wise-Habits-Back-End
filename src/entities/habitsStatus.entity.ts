import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Habits } from "./habits.entity"

@Entity()
export class HabitStatus {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  statusValue: number // 10, 5, 0

  @Column()
  date: string

  @ManyToOne(() => Habits, (habit) => habit.statuses)
  habit: Habits
}
