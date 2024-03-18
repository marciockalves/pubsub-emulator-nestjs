import { Injectable } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';

@Injectable()
export class PubSubAdapter {
  private pubSub: PubSub;

  constructor() {
    this.pubSub = new PubSub({
        apiEndpoint:'localhost:8085',
        projectId:'abc',        
        emulatorMode: true
    });
  }

  async createTopic(topicName: string): Promise<void> {
    try {
      await this.pubSub.createTopic(topicName);
      console.log(`Tópico ${topicName} criado com sucesso.`);
    } catch (error) {
      console.error(`Erro ao criar o tópico ${topicName}:`, error);
      throw error;
    }
  }

  async createSubscription(topicName: string, subscriptionName: string): Promise<void> {
    try {
      const topic = this.pubSub.topic(topicName);
      await topic.createSubscription(subscriptionName);
      console.log(`Assinatura ${subscriptionName} criada para o tópico ${topicName}.`);
    } catch (error) {
      console.error(`Erro ao criar a assinatura ${subscriptionName} para o tópico ${topicName}:`, error);
      throw error;
    }
  }
}