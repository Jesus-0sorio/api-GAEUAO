import { Repository } from 'typeorm';

export abstract class BaseService<T> {
  update(arg0: number, updateDto: any) {
    throw new Error('Method not implemented.');
  }
  delete(id: any) {
    throw new Error('Method not implemented.');
  }
  findOne(id: Promise<T>) {
    throw new Error('Method not implemented.');
  }
  findAll(): T | PromiseLike<T> {
    throw new Error('Method not implemented.');
  }
  abstract getRepository(): Repository<T>;

  save(entity: T): Promise<T> {
    try {
      return this.getRepository().save(entity);
    } catch (error) {
      console.log(error);
    }
  }
}
