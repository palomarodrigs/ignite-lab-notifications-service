import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['topical-pony-13249-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dG9waWNhbC1wb255LTEzMjQ5JHgip-9C1Mz7uqgL5cY1z3_x0dzOAD7WTJ3o-Mc',
          password:
            'uIZil1fw60owv07iCCR54FYq0f-7g1DTQ6BprT9aYQUm-O8L5aA_6XdZEHArgSiQRM-XHA==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
