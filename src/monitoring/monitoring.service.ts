import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
  async create(createMonitoringDto: CreateMonitoringDto) {
    try {
      const newMonitoring = await this.monitoringRepository.create(
        createMonitoringDto,
      );
      return await this.monitoringRepository.save(newMonitoring);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.professor_id', 'professor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .getMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      return await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.professor_id', 'professor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.id = :id', { id: id })
        .getOne();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByMonitorId(id: number) {
    try {
      return await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.monitor_id = :id', { id: id })
        .getOne();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  findOneByProfessorId(id: number) {
    try {
      return this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.professor_id', 'professor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.professor_id = :id', { id: id });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateMonitoringDto: UpdateMonitoringDto) {
    try {
      if (
        (await this.monitoringRepository.findOne({ where: { id } })) == null
      ) {
        throw new HttpException(
          'The monitoring with the given id was not found',
          HttpStatus.NOT_FOUND,
        );
      }
      return this.monitoringRepository.update(id, updateMonitoringDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      if (
        (await this.monitoringRepository.findOne({ where: { id } })) == null
      ) {
        throw new HttpException(
          'The monitoring with the given id was not found',
          HttpStatus.NOT_FOUND,
        );
      }
      return this.monitoringRepository.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
