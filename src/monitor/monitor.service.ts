import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/commons/service.commons';
import { Monitor } from './entities/monitor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MonitorService extends BaseService<Monitor> {
  constructor(
    @InjectRepository(Monitor)
    private monitorRepository: Repository<Monitor>,
  ) {
    super();
  }
  getRepository(): Repository<Monitor> {
    return this.monitorRepository;
  }

  // create(createMonitorDto: CreateMonitorDto) {
  //   return 'This action adds a new monitor';
  // }

  // findAll() {
  //   return `This action returns all monitor`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} monitor`;
  // }

  // update(id: number, updateMonitorDto: UpdateMonitorDto) {
  //   return `This action updates a #${id} monitor`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} monitor`;
  // }
}
