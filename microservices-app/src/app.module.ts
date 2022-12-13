import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NotificationModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
