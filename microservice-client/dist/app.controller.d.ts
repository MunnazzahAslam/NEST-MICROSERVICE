import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private readonly client;
    constructor(client: ClientProxy);
    getNotified(): void;
}
