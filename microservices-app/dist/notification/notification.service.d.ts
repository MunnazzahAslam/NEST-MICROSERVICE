import { PrismaService } from 'src/prisma/prisma.service';
export declare class NotificationService {
    private prisma;
    constructor(prisma: PrismaService);
    printMessage(label: string): Promise<import(".prisma/client").Notification>;
}
