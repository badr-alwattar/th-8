import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Search } from './search.entity';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('searchWithKeyword')
  async searchWithKeyword(
    @Query('search') searchQuery: string,
  ): Promise<Search> {
    const search = await this.searchService.createSearch(searchQuery);
    const searchResults = await this.searchService.searchInItunes(search);
    await this.searchService.storeSearchResults(searchResults, search);
    return this.searchService.getSearchWithResults(search.id);
  }

  @Get(':id')
  async getSearchById(@Param('id') id: number): Promise<any> {
    return this.searchService.getSearchWithResults(id);
  }

  @Get('')
  async getSearchHistory(): Promise<Search[]> {
    return this.searchService.getAllSearches();
  }
}
