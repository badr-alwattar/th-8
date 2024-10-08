import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Search } from './search.entity';

@Entity()
export class SearchResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  wrapperType: string;

  @Column({ nullable: true })
  kind: string;

  @Column({ nullable: true })
  artistName: string;

  @Column({ nullable: true })
  collectionName: string;

  @Column({ nullable: true })
  trackName: string;

  @ManyToOne(() => Search, (search) => search.results, { onDelete: 'CASCADE' })
  search: Search;
}
