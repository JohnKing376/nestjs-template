import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  imports: [],
  exports: [],
})
export class UsersModule {}
