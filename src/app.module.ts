import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './controllers/bootcamp.controller';
import { UsersController } from './controllers/users.controller';
import { CoursesController } from './controllers/courses.controller';
import { ReviewController } from './controllers/review.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController, UsersController, CoursesController, ReviewController],
  providers: [AppService],
})
export class AppModule {}
