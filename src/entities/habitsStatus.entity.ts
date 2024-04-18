import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Habits } from "./habits.entity"

@Entity()
export class HabitStatus {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "jsonb" })
  statuses: { [key: string]: number }

  @ManyToOne(() => Habits, (habit) => habit.statuses, {
    onDelete: "CASCADE",
  })
  habit: Habits
}
