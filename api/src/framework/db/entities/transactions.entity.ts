import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  processId: string;

  @Column()
  accountId: string;

  @Column()
  status: string;
}
