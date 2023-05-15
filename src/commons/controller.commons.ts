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

export abstract class BaseController<T> {
  abstract getService(): BaseService<T>;

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return await this.getService().findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return await this.getService().findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T) {
    return await this.getService().create(entity);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(@Param('id') id: string, @Body() updateDto: any) {
    return await this.getService().update(+id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.getService().delete(+id);
  }
}
