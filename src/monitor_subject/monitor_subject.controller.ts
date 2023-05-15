import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMonitorSubjectDto } from './dto/create-monitor_subject.dto';
import { UpdateMonitorSubjectDto } from './dto/update-monitor_subject.dto';
import { MonitorSubjectService } from './monitor_subject.service';

@Controller('monitor-subject')
export class MonitorSubjectController {
  constructor(private readonly monitorSubjectService: MonitorSubjectService) {}

  // @Post()
  // create(@Body() createMonitorSubjectDto: CreateMonitorSubjectDto) {
  //   return this.monitorSubjectService.create(createMonitorSubjectDto);
  // }

  // @Get()
  // findAll() {
  //   return this.monitorSubjectService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.monitorSubjectService.findOne(+id);
  // }

  @Get(':id')
  findAllByProfessorId(@Param('id') id: string) {
    return this.monitorSubjectService.findAllBySubjectId(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMonitorSubjectDto: UpdateMonitorSubjectDto,
  // ) {
  //   return this.monitorSubjectService.update(+id, updateMonitorSubjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.monitorSubjectService.remove(+id);
  // }
}
