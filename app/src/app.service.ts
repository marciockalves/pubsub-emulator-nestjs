import { Injectable } from '@nestjs/common';
import { PubSubAdapter } from './pubusb.adapter';
import { IPubsubDto } from './pubusbu.dto';

@Injectable()
export class AppService {

  constructor(private readonly pubsubAdapter: PubSubAdapter){}


    async exec(request: IPubsubDto): Promise<void>{

      console.log('request', request);

        await this.pubsubAdapter.createTopic(request.topicName);

        await this.pubsubAdapter.createSubscription(request.topicName, request.subscriptionName);

    }
 
}
