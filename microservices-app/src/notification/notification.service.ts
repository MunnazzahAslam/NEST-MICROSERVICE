import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) { }

  async printMessage(data: NotificationDto) {
    const notification = await this.prisma.notification.create({
      data: {
        label: data.label
      }
    })
    return notification;
  }

}
