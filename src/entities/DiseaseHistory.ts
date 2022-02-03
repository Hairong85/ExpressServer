import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Patient } from "./Patient";
import { Disease } from "./Disease";

@Index("diseaseId", ["diseaseId"], {})
@Entity("diseaseHistory", { schema: "gNxd4xu6Vc" })
export class DiseaseHistory {
  @Column("int", { primary: true, name: "paitentId" })
  paitentId: number;

  @Column("int", { primary: true, name: "diseaseId" })
  diseaseId: number;

  @Column("text", { name: "paitentDescription", nullable: true })
  paitentDescription: string | null;

  @ManyToOne(() => Patient, (patient) => patient.diseaseHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "paitentId", referencedColumnName: "id" }])
  paitent: Patient;

  @ManyToOne(() => Disease, (disease) => disease.diseaseHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "diseaseId", referencedColumnName: "id" }])
  disease: Disease;
}
