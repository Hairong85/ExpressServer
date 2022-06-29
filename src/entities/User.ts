import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./Role";

@Entity("user", { schema: "gNxd4xu6Vc" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "emailAddress", length: 100 })
  emailAddress: string;

  @Column("varchar", { name: "userName", nullable: true, length: 100 })
  userName: string | null;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: "userRole",
    joinColumns: [{ name: "userId", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "roleId", referencedColumnName: "id" }],
    schema: "gNxd4xu6Vc",
  })
  roles: Role[];
}
