import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Decision {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;
}
