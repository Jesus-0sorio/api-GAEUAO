import { HttpException, HttpStatus } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';

export abstract class BaseService<T> {
  abstract getRepository(): Repository<T>;

  create(entity: T) {
    try {
      return this.getRepository().save(entity);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: any): Promise<T> {
    try {
      return await this.getRepository().findOne({
        where: { id: id },
      } as FindOptionsWhere<any>);
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }
  async findAll() {
    try {
      const result = this.getRepository().find();
      const data = await result;
      for (const item of data) {
        delete item['password'];
      }
      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateDto: any) {
    try {
      if (
        await this.getRepository().findOne({
          where: { id: id },
        } as FindOptionsWhere<any>)
      ) {
        return this.getRepository().update(id, updateDto);
      }
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async delete(id: number) {
    try {
      if (
        await this.getRepository().findOne({
          where: { id: id },
        } as FindOptionsWhere<any>)
      ) {
        return this.getRepository().delete(id);
      }
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
