import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy) { }

  @Get()
  getNotified() {
    this.client.emit<any>('data_updated', JSON.stringify({data: 'Data updated!'}));
  }
}
