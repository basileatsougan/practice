import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private repo: Repository<Post>

    ) {}

    findAll() {
    return this.repo.find();
  }

    create(title: string) {
        const post = this.repo.create({ title });
    return this.repo.save(post);
  }

}
