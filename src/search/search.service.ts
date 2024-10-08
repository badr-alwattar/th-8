import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Search } from './search.entity';
import { SearchResult } from './search-result.entity';
import axios from 'axios';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Search)
    private readonly searchRepository: Repository<Search>,
    @InjectRepository(SearchResult)
    private readonly searchResultRepository: Repository<SearchResult>,
  ) {}

  async createSearch(searchQuery: string): Promise<any> {
    const search = new Search();
    search.search_query = searchQuery;
    search.timestamp = new Date();

    const savedSearch = await this.searchRepository.save(search);

    return savedSearch;
  }

  async searchInItunes(search: Search): Promise<any> {
    const formattedQuery = search.search_query.replace(/\s+/g, '+');

    const apiUrl = `https://itunes.apple.com/search?term=${formattedQuery}`;
    const apiResponse = await axios.get(apiUrl);

    return apiResponse;
  }

  async storeSearchResults(searchResults, search: Search): Promise<any> {
    const results = searchResults.data.results;
    for (const result of results) {
      const searchResult = new SearchResult();
      searchResult.wrapperType = result.wrapperType;
      searchResult.kind = result.kind;
      searchResult.artistName = result.artistName;
      searchResult.collectionName = result.collectionName;
      searchResult.trackName = result.trackName;
      searchResult.search = search;

      await this.searchResultRepository.save(searchResult);
    }
  }

  async getAllSearches(): Promise<Search[]> {
    return await this.searchRepository.find({
      select: ['id', 'search_query', 'timestamp'],
    });
  }

  async getSearchWithResults(id: number): Promise<any> {
    const search = await this.searchRepository.findOne({
      where: { id },
      relations: ['results'],
    });

    if (!search) {
      throw new NotFoundException('Search not found');
    }

    return search;
  }
}
