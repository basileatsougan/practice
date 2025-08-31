import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBasile(): string {
    return 'Basile est le meilleur';
  }
}
