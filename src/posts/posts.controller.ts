import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {
    constructor(private readonly postsServices: PostsService) {}

    @Get()
    getAll() {
        return this.postsServices.findAll();
    }

    @Post()
    create(@Body() body: { title: string }) {
        return this.postsServices.create(body.title);
    }

}
