import { Injectable } from '@nestjs/common';

@Injectable()
export class SqliteService {
  ping(): string {
    return 'PONG';
  }
}
