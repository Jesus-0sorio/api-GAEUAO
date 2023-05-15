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
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.monitoring_status = :status', {
          status: 'Disponible',
        })
        .orderBy('monitoring.monitor_date', 'ASC')
        .getMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      const monitoring = await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.professor_id', 'professor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.id = :id', { id: id })
        .getOne();
      if (monitoring) {
        return monitoring;
      }
      throw new HttpException('Monitoring not found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAllUpcoming(id: number) {
    try {
      const result = await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.professor_id', 'professor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.monitoring_status = :status', { status: 'Proxima' })
        .where('monitoring.student_id = :id', { id: id })
        .orderBy('monitoring.monitor_date', 'ASC')
        .getMany();
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAllBySubject(id: number) {
    try {
      const monitoring = await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.professor_id', 'professor')
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.subject_id = :id', { id: id })
        .andWhere('monitoring.monitoring_status = :status', {
          status: 'Disponible',
        })
        .getMany();
      if (monitoring) {
        return monitoring;
      }
      throw new HttpException('Monitoring not found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByMonitorId(id: number) {
    try {
      const monitoring = await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.monitor_id = :id', { id: id })
        .getOne();
      if (monitoring) {
        return monitoring;
      }
      throw new HttpException('Monitoring not found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByProfessorId(id: number) {
    try {
      const monitoring = this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.professor_id', 'professor')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.professor_id = :id', { id: id })
        .getOne();

      if (monitoring) {
        return monitoring;
      }
      throw new HttpException('Monitoring not found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByStudentId(id: number) {
    try {
      const monitoring = await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.student_id = :id', { id: id })
        .getOne();
      if (monitoring) {
        return monitoring;
      }
      throw new HttpException('Monitoring not found', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAllBySchedule(schedule: string) {
    try {
      const monitoring = await this.monitoringRepository
        .createQueryBuilder('monitoring')
        .leftJoinAndSelect('monitoring.monitor_id', 'monitor')
        .leftJoinAndSelect('monitoring.subject_id', 'subject')
        .leftJoinAndSelect('monitoring.student_id', 'student')
        .where('monitoring.monitoring_status = :status', {
          status: 'Disponible',
        })
        .where('monitoring.monitor_date = :schedule', { schedule: schedule })
        .getMany();
      if (monitoring) {
        return monitoring;
      }
      throw new HttpException('Monitoring not found', HttpStatus.NOT_FOUND);
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
