import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("role", { schema: "gNxd4xu6Vc" })
export class Role {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "roleName", nullable: true, length: 100 })
  roleName: string | null;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
