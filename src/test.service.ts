import { Injectable } from '@nestjs/common';
import * as path from "path";
@Injectable()
export class TestService {
  getHello(): string {
    return path.join(__dirname, '..', '..', 'client', 'public', 'index.html');
  }
}
