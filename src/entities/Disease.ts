import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DiseaseHistory } from "./DiseaseHistory";

@Entity("disease", { schema: "gNxd4xu6Vc" })
export class Disease {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "diseaseName", length: 255 })
  diseaseName: string;

  @OneToMany(() => DiseaseHistory, (diseaseHistory) => diseaseHistory.disease)
  diseaseHistories: DiseaseHistory[];
}
