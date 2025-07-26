import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 30})
    username: string;

    @Column({unique: true, length: 100})
    email: string;

    @Column({length: 255})
    password: string;
}