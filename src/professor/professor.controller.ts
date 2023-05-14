import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';
import { Professor } from './entities/professor.entity';
import { ProfessorService } from './professor.service';

@ApiTags('professor')
@ApiBearerAuth()
@Controller('professor')
export class ProfessorController extends BaseController<Professor> {
  constructor(private readonly professorService: ProfessorService) {
    super();
  }
  getService(): BaseService<Professor> {
    return this.professorService;
  }
}
