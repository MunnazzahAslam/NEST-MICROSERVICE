import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';

@Controller()
export class AppController {
  constructor(@Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy) { }

  @Get()
  getNotified() {
    this.client.emit<any>('data_updated', new Message('Data updated!'));
    return 'Data updated!';
  }
}
