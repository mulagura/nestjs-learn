import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [UsersModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
