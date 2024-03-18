import { Controller, Post , Body} from '@nestjs/common';
import { AppService } from './app.service';
import { IPubsubDto } from './pubusbu.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('emulator')
  async createEmuator(@Body() request: IPubsubDto): Promise<string> {
     this.appService.exec(request);

     return 'deun certo';
  }
}
