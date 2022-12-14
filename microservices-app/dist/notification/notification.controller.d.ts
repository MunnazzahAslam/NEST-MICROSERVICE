import { NotificationDto } from './dto/notification.dto';
import { NotificationService } from './notification.service';
export declare class NotificationController {
    notificationService: NotificationService;
    constructor(notificationService: NotificationService);
    handleMessagePrinted(data: NotificationDto): Promise<import(".prisma/client").Notification>;
}
