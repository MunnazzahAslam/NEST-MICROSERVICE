import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

describe('NotificationController', () => {
  let notificationController: NotificationController;
  const mockService = {
    printMessage: jest.fn(),
  }
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [NotificationService],
    }).compile();

    notificationController = app.get<NotificationController>(NotificationController);
    notificationController.notificationService = mockService as any;
  });

  describe('root', () => {
    it('should return "Data Updated!"', async () => {
      const message = 'Data Updated!';
      mockService.printMessage.mockResolvedValue(message);
      const response = await notificationController.handleMessagePrinted(message);
  
      expect(response).toEqual(message);
    });
  });
});
