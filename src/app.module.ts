import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb+srv://root:j2dkUDSX2NYQqMQI@cluster0.fsugp.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}