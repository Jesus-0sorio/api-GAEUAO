import { Controller } from '@nestjs/common';

import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Subject } from './entities/subject.entity';
import { SubjectService } from './subject.service';

@ApiTags('subject')
@ApiBearerAuth()
@Controller('subject')
export class SubjectController extends BaseController<Subject> {
  constructor(private readonly subjectService: SubjectService) {
    super();
  }
  getService(): BaseService<Subject> {
    return this.subjectService;
  }
}
