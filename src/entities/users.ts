import { Exclude } from "class-transformer"
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm"
import { hashSync } from "bcrypt"
import { Habits } from "./habits"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 100 })
  name: string

  @Column({ length: 100, unique: true })
  email: string

  @Column({ length: 100 })
  @Exclude()
  password: string

  @OneToMany(() => Habits, (habit) => habit.user, { cascade: true })
  habits: Habits[]

  @CreateDateColumn()
  created_at: Date

//   @UpdateDateColumn()
//   updated_at: Date

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}
