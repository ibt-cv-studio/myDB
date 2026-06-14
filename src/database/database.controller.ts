import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('databases')
export class DatabaseController {
  constructor(private databaseService: DatabaseService) {}

  @Post()
  create(@Body() body: { userId: string; name: string; engine: string }) {
    return this.databaseService.createDatabase(body.userId, body.name, body.engine);
  }

  @Get(':userId')
  getAll(@Param('userId') userId: string) {
    return this.databaseService.getUserDatabases(userId);
  }
}
