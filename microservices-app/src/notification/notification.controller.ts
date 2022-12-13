import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(public notificationService: NotificationService) { }


  @EventPattern('data_updated')
  async handleMessagePrinted(data: string) {
    return this.notificationService.printMessage(data);
  }
}
