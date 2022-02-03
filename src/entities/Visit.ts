import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Diagnosis } from "./Diagnosis";
import { Patient } from "./Patient";
import { AcupunctureTreatment } from "./AcupunctureTreatment";
import { HerbalTreatment } from "./HerbalTreatment";

@Index("diagnosisId", ["diagnosisId"], {})
@Index("patientId", ["patientId"], {})
@Entity("visit", { schema: "gNxd4xu6Vc" })
export class Visit {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "patientId" })
  patientId: number;

  @Column("datetime", { name: "issueDate" })
  issueDate: Date;

  @Column("text", { name: "paitentDescription", nullable: true })
  paitentDescription: string | null;

  @Column("int", { name: "diagnosisId" })
  diagnosisId: number;

  @ManyToOne(() => Diagnosis, (diagnosis) => diagnosis.visits, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "diagnosisId", referencedColumnName: "id" }])
  diagnosis: Diagnosis;

  @ManyToOne(() => Patient, (patient) => patient.visits, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "patientId", referencedColumnName: "id" }])
  patient: Patient;

  @OneToMany(
    () => AcupunctureTreatment,
    (acupunctureTreatment) => acupunctureTreatment.visit
  )
  acupunctureTreatments: AcupunctureTreatment[];

  @OneToMany(() => HerbalTreatment, (herbalTreatment) => herbalTreatment.visit)
  herbalTreatments: HerbalTreatment[];
}
