import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  correlationId: string;

  @Column()
  accountId: string;

  @Column({
    type: 'decimal',
  })
  amount: number;

  @Column()
  status: string;
}
