import { Test, TestingModule } from '@nestjs/testing';
import { SqliteController } from './sqlite.controller';
import { SqliteService } from './sqlite.service';

describe('SqliteController', () => {
  let appController: SqliteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SqliteController],
      providers: [SqliteService],
    }).compile();

    appController = app.get<SqliteController>(SqliteController);
  });

  describe('root', () => {
    it('should return "PONG!"', () => {
      expect(appController.version()).toBe('PONG');
    });
  });
});
