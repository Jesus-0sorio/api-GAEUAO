import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { UpdateMonitoringDto } from './dto/update-monitoring.dto';
import { Monitoring } from './entities/monitoring.entity';

@Injectable()
export class MonitoringService {
  constructor(
    @InjectRepository(Monitoring)
    private monitoringRepository: Repository<Monitoring>,
  ) {}
  create(createMonitoringDto: CreateMonitoringDto) {
    console.log(createMonitoringDto);
    const newMonitoring = this.monitoringRepository.create(createMonitoringDto);
    return this.monitoringRepository.save(newMonitoring);
  }

  findAll() {
    return this.monitoringRepository.find();
  }

  findOne(id: number) {
    return this.monitoringRepository.findOne({ where: { id } });
  }

  findOneByMonitorId(id: number) {
    return this.monitoringRepository.findOne({ where: { monitor_id: id } });
  }

  findOneByProfessorId(id: number) {
    return this.monitoringRepository.findOne({ where: { professor_id: id } });
  }

  update(id: number, updateMonitoringDto: UpdateMonitoringDto) {
    return this.monitoringRepository.update(id, updateMonitoringDto);
  }

  remove(id: number) {
    return this.monitoringRepository.delete(id);
  }
}
