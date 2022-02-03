import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Visit } from "./Visit";

@Entity("diagnosis", { schema: "gNxd4xu6Vc" })
export class Diagnosis {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("enum", { name: "tongue", enum: ["red", "white", "light red"] })
  tongue: "red" | "white" | "light red";

  @Column("enum", { name: "pulse", enum: ["x", "y", "z"] })
  pulse: "x" | "y" | "z";

  @Column("enum", { name: "urine", enum: ["x", "y", "z"] })
  urine: "x" | "y" | "z";

  @Column("enum", { name: "stool", enum: ["x", "y", "z"] })
  stool: "x" | "y" | "z";

  @Column("enum", { name: "sleep", enum: ["x", "y", "z"] })
  sleep: "x" | "y" | "z";

  @Column("enum", { name: "menstruation", enum: ["x", "y", "z"] })
  menstruation: "x" | "y" | "z";

  @Column("enum", { name: "gynecology", enum: ["x", "y", "z"] })
  gynecology: "x" | "y" | "z";

  @Column("text", { name: "conclution" })
  conclution: string;

  @OneToMany(() => Visit, (visit) => visit.diagnosis)
  visits: Visit[];
}
