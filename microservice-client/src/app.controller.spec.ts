import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'NOTIFICATION_SERVICE', transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'user-messages',
              queueOptions: {
                durable: false
              },
            },
          },
        ]),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Your data has been updated!"', () => {
      expect(appController.getNotified()).toBe('Your data has been updated!');
    });
  });
});
