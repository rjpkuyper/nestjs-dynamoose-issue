import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AppService } from './app.service';
import { DynamoDBConfigService } from './DynamoDBConfigService';

@Module({
  imports: [
    ConfigModule,
    DynamooseModule.forRootAsync({
      useClass: DynamoDBConfigService,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
