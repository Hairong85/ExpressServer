import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DiseaseHistory } from "./DiseaseHistory";
import { Visit } from "./Visit";

@Entity("patient", { schema: "gNxd4xu6Vc" })
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "surname", length: 255 })
  surname: string;

  @Column("varchar", { name: "firstname", length: 255 })
  firstname: string;

  @Column("varchar", { name: "phone", length: 10 })
  phone: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "emergencyContact", nullable: true, length: 255 })
  emergencyContact: string | null;

  @Column("varchar", { name: "occupation", nullable: true, length: 255 })
  occupation: string | null;

  @Column("enum", {
    name: "healthFund",
    nullable: true,
    enum: ["HCF", "Medibank", "Bupa"],
  })
  healthFund: "HCF" | "Medibank" | "Bupa" | null;

  @Column("varchar", { name: "allergies", nullable: true, length: 255 })
  allergies: string | null;

  @Column("tinyint", { name: "hasPacemakeImplanted", width: 1 })
  hasPacemakeImplanted: boolean;

  @Column("tinyint", { name: "hasAbnormalBleeding", width: 1 })
  hasAbnormalBleeding: boolean;

  @OneToMany(() => DiseaseHistory, (diseaseHistory) => diseaseHistory.paitent,{cascade:["insert","update","remove"]})
  diseaseHistories: DiseaseHistory[];

  @OneToMany(() => Visit, (visit) => visit.patient)
  visits: Visit[];
}


