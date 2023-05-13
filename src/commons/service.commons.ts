import { Repository } from 'typeorm';

export abstract class BaseService<T> {
  abstract getRepository(): Repository<T>;

  save(entity: T): Promise<T> {
    try {
      return this.getRepository().save(entity);
    } catch (error) {
      console.log(error);
    }
  }
}
