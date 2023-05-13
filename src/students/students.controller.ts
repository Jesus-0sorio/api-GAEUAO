import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './students.service';
import { BaseController } from 'src/commons/controller.commons';
import { Student } from './entities/student.entity';
import { BaseService } from 'src/commons/service.commons';

@Controller('students')
export class StudentsController extends BaseController<Student> {
  constructor(private readonly studentsService: StudentsService) {
    super();
  }
  getService(): BaseService<Student> {
    return this.studentsService;
  }

  // @Post()
  // create(@Body() createStudentDto: CreateStudentDto) {
  //   return this.studentsService.create(createStudentDto);
  // }

  // @Get()
  // async findAll() {
  //   return await this.studentsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.studentsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
  //   return this.studentsService.update(+id, updateStudentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.studentsService.remove(+id);
  // }
}
