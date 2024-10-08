import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Search } from './search/search.entity';
import { SearchService } from './search/search.service';
import { SearchController } from './search/search.controller';
import { SearchModule } from './search/search.module';
import { SearchResult } from './search/search-result.entity';

@Module({
  imports: [
  //   ConfigModule.forRoot({
  //     isGlobal: true, // this makes the configuration available globally
  //   }),
  //   TypeOrmModule.forRootAsync({
  //     imports: [ConfigModule],
  //     inject: [ConfigService],
  //     useFactory: (configService: ConfigService) => ({
  //       type: 'postgres',
  //       host: configService.get('RDS_HOSTNAME'),
  //       port: parseInt(configService.get('RDS_PORT'), 10),
  //       database: configService.get('RDS_DB_NAME'),
  //       username: configService.get('RDS_USERNAME'),
  //       password: configService.get('RDS_PASSWORD'),
  //       entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //       synchronize: true,
  //       // dropSchema: true,
  //     }),
  //   }),
  //   TypeOrmModule.forFeature([Search, SearchResult]),
  //   SearchModule,
  ],
  // controllers: [AppController, SearchController],
  // providers: [AppService, SearchService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
