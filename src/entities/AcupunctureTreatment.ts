import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Acupuncture } from "./Acupuncture";
import { Visit } from "./Visit";

@Index("visitId", ["visitId"], {})
@Entity("acupunctureTreatment", { schema: "gNxd4xu6Vc" })
export class AcupunctureTreatment {
  @Column("int", { primary: true, name: "acupunctureId" })
  acupunctureId: number;

  @Column("int", { primary: true, name: "visitId" })
  visitId: number;

  @Column("int", { name: "durationInMinute" })
  durationInMinute: number;

  @ManyToOne(
    () => Acupuncture,
    (acupuncture) => acupuncture.acupunctureTreatments,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "acupunctureId", referencedColumnName: "id" }])
  acupuncture: Acupuncture;

  @ManyToOne(() => Visit, (visit) => visit.acupunctureTreatments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "visitId", referencedColumnName: "id" }])
  visit: Visit;
}
