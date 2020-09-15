import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import AppError from "@errors/AppError";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;

  @Column()
  age: number;
}

export default User
