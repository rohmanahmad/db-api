import { Module } from '@nestjs/common';
import { SqliteController } from './sqlite.controller';
import { SqliteService } from './sqlite.service';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'db-api.sqlite3'
    })
  ],
  controllers: [SqliteController],
  providers: [SqliteService],
})
export class SqliteModule {}
