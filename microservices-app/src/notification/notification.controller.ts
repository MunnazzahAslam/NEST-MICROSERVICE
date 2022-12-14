import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationDto } from './dto/notification.dto';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(public notificationService: NotificationService) { }


  @EventPattern('data_updated')
  async handleMessagePrinted(data: NotificationDto) {
    return this.notificationService.printMessage(data);
  }
}
