import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) { }

  async printMessage(label: string) {
    const notification = await this.prisma.notification.create({
      data: {
        label: label,
        content: label
      }
    })
    return notification;
  }

}
