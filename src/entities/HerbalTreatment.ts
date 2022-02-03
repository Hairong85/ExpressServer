import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Herbal } from "./Herbal";
import { Visit } from "./Visit";

@Index("visitId", ["visitId"], {})
@Entity("HerbalTreatment", { schema: "gNxd4xu6Vc" })
export class HerbalTreatment {
  @Column("int", { primary: true, name: "herbalId" })
  herbalId: number;

  @Column("int", { primary: true, name: "visitId" })
  visitId: number;

  @Column("int", { name: "daysOfTake" })
  daysOfTake: number;

  @ManyToOne(() => Herbal, (herbal) => herbal.herbalTreatments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "herbalId", referencedColumnName: "id" }])
  herbal: Herbal;

  @ManyToOne(() => Visit, (visit) => visit.herbalTreatments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "visitId", referencedColumnName: "id" }])
  visit: Visit;
}
