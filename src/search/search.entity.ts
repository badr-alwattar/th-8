import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { SearchResult } from './search-result.entity';

@Entity()
export class Search {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  search_query: string;

  @CreateDateColumn()
  timestamp: Date;

  @OneToMany(() => SearchResult, (searchResult) => searchResult.search)
  results: SearchResult[];
}
