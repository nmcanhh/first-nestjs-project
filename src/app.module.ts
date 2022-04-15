import { Module } from '@nestjs/common';
import { PostsModule } from './domain/posts/posts.module';
import { UsersModule } from './domain/users/users.module';

@Module({
  imports: [UsersModule, PostsModule],
})
export class AppModule {}
