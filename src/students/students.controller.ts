import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';
import { Student } from './entities/student.entity';
import { StudentsService } from './students.service';

@ApiTags('students')
@ApiBearerAuth()
@Controller('students')
export class StudentsController extends BaseController<Student> {
  constructor(private readonly studentsService: StudentsService) {
    super();
  }
  getService(): BaseService<Student> {
    return this.studentsService;
  }
}
