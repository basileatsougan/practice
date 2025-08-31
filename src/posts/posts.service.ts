import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    private posts: string[] = [];

  findAll() {
    return this.posts;
  }

  create(title: string) {
    this.posts.push(title);
    return { success: true, title };
  }

}
