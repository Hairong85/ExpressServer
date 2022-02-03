import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AcupunctureTreatment } from "./AcupunctureTreatment";

@Entity("acupuncture", { schema: "gNxd4xu6Vc" })
export class Acupuncture {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "point", length: 50 })
  point: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @OneToMany(
    () => AcupunctureTreatment,
    (acupunctureTreatment) => acupunctureTreatment.acupuncture
  )
  acupunctureTreatments: AcupunctureTreatment[];
}
