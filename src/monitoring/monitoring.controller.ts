import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { UpdateMonitoringDto } from './dto/update-monitoring.dto';
import { MonitoringService } from './monitoring.service';

@Controller('monitoring')
export class MonitoringController {
  constructor(private readonly monitoringService: MonitoringService) {}

  @Post()
  async create(@Body() createMonitoringDto: CreateMonitoringDto) {
    return await this.monitoringService.create(createMonitoringDto);
  }

  @Get()
  async findAll() {
    return await this.monitoringService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.monitoringService.findOne(+id);
  }

  @Get('monitor/:id')
  async findOneByMonitorCode(@Param('id') id: string) {
    return await this.monitoringService.findOneByMonitorId(+id);
  }

  @Get('professor/:id')
  async findOneByProfessorCode(@Param('id') id: string) {
    return await this.monitoringService.findOneByProfessorId(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMonitoringDto: UpdateMonitoringDto,
  ) {
    return await this.monitoringService.update(+id, updateMonitoringDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.monitoringService.remove(+id);
  }
}
