import { Controller, Get, Post } from '@nestjs/common';
import { SqliteService } from './sqlite.service';

@Controller('api/sqlite')
export class SqliteController {
  constructor(private readonly appService: SqliteService) {}

  @Get('/version')
  version(): string {
    return '0.0.1';
  }

  @Post('/query/select')
  querySelect(): string {
    return '{}';
  }
}
