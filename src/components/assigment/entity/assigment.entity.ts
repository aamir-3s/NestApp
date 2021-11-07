import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { IAssigment } from '../interfaces/assigment.interface';
  
  @Entity({ name: 'assigment' })
  export class Assigment implements IAssigment {
      
      @PrimaryGeneratedColumn()
      id: number;

      @Column()  
      userId: number;

      @Column()
      title: string;

      @Column({ nullable: true, default: null })
      body: string;

  }