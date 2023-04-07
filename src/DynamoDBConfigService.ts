import { ConfigService } from '@nestjs/config';
import { DynamooseOptionsFactory } from 'nestjs-dynamoose';

export class DynamoDBConfigService implements DynamooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createDynamooseOptions() {
    return {
      ...(this.configService.get('dynamo.local') ? {} : {}),
    };
  }
}
