import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return the welcome message', () => {
      expect(appController.getRoot()).toEqual({
        message: 'Welcome to the Voting App API!',
      });
    });
  });

  describe('play', () => {
    it('should return API working message', () => {
      expect(appController.getPlay()).toEqual({
        message: 'API is working!',
      });
    });
  });
});
