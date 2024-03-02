import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './dto/create-user-event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(payload: CreateUserEvent){
    console.log('handle user created: COMMUNICATIONS: ', payload)
  }
}
