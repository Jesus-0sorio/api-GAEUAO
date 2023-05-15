import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { UpdateMonitoringDto } from './dto/update-monitoring.dto';
import { MonitoringService } from './monitoring.service';

@ApiTags('monitoring')
@ApiBearerAuth()
@Controller('monitoring')
export class MonitoringController {
  constructor(private readonly monitoringService: MonitoringService) {}

  @Post()
  create(@Body() createMonitoringDto: CreateMonitoringDto) {
    return this.monitoringService.create(createMonitoringDto);
  }

  @Get()
  async findAll() {
    return await this.monitoringService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.monitoringService.findOne(+id);
  }

  @Get('upcoming/:id')
  async findAllUpcoming(@Param('id') id: string) {
    return await this.monitoringService.findAllUpcoming(+id);
  }

  @Get('subject/:id')
  async findAllBySubjectName(@Param('id') id: string) {
    return await this.monitoringService.findAllBySubject(+id);
  }

  @Get('monitor/:id')
  async findOneByMonitorCode(@Param('id') id: string) {
    return await this.monitoringService.findOneByMonitorId(+id);
  }

  @Get('professor/:id')
  async findOneByProfessorCode(@Param('id') id: string) {
    return await this.monitoringService.findOneByProfessorId(+id);
  }

  @Get('student/:id')
  async findOneByStudentCode(@Param('id') id: string) {
    return await this.monitoringService.findOneByStudentId(+id);
  }

  @Get('schedule/:schedule')
  async findAllBySchedule(@Param('schedule') schedule: string) {
    return await this.monitoringService.findAllBySchedule(schedule);
  }

  @Get('history/:id')
  async findAllHistory(@Param('id') id: string) {
    return await this.monitoringService.findAllHistory(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMonitoringDto: UpdateMonitoringDto,
  ) {
    return this.monitoringService.update(+id, updateMonitoringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monitoringService.remove(+id);
  }
}
