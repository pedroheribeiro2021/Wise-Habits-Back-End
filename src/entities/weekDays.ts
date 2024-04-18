import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habits } from "./habits";

@Entity("weekDays")
export class WeekDays {
    @PrimaryGeneratedColumn("uuid")
    id: string
  
    @Column({ length: 100 })
    days: string

    @ManyToOne(() => Habits, (habits) => habits.weekDays)
    habits: Habits
}
