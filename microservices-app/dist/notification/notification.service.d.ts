import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationService {
    private prisma;
    constructor(prisma: PrismaService);
    printMessage(data: NotificationDto): Promise<import(".prisma/client").Notification>;
}
