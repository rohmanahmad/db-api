import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SqliteModule } from './modules/sqlite/sqlite.module';

@Module({
  imports: [ConfigModule.forRoot(), SqliteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
