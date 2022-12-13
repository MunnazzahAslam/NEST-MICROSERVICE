import { NotificationService } from './notification.service';
export declare class NotificationController {
    notificationService: NotificationService;
    constructor(notificationService: NotificationService);
    handleMessagePrinted(data: string): Promise<import(".prisma/client").Notification>;
}
