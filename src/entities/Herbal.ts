import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HerbalTreatment } from "./HerbalTreatment";

@Entity("herbal", { schema: "gNxd4xu6Vc" })
export class Herbal {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "herbalname", length: 255 })
  herbalname: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @OneToMany(() => HerbalTreatment, (herbalTreatment) => herbalTreatment.herbal)
  herbalTreatments: HerbalTreatment[];
}
