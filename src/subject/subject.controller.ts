import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';

import { Subject } from './entities/subject.entity';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController extends BaseController<Subject> {
  constructor(private readonly subjectService: SubjectService) {
    super();
  }
  getService(): BaseService<Subject> {
    return this.subjectService;
  }

  // @Post()
  // create(@Body() createSubjectDto: CreateSubjectDto) {
  //   return this.subjectService.create(createSubjectDto);
  // }

  // @Get()
  // findAll() {
  //   return this.subjectService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.subjectService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
  //   return this.subjectService.update(+id, updateSubjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.subjectService.remove(+id);
  // }
}
