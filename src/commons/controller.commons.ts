import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseService } from './service.commons';
import { Entity } from 'typeorm';

export abstract class BaseController<T> {
  abstract getService(): BaseService<T>;
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T): Promise<T> {
    return await this.getService().save(entity);
  }
  @Get()
  async findAll(): Promise<T> {
    return await this.getService().findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: Promise<T>) {
    return await this.getService().findOne(id);
  }

  @Post(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: any) {
    return this.getService().delete(id);
  }
  @Patch(':id')
  async update(@Param('id') id: Promise<T>, @Body() updateDto: any) {
    return await this.getService().update(+id, updateDto);
  }
}
