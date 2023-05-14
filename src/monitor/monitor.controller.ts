import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';
import { Monitor } from './entities/monitor.entity';
import { MonitorService } from './monitor.service';

@ApiTags('monitor')
@ApiBearerAuth()
@Controller('monitor')
export class MonitorController extends BaseController<Monitor> {
  constructor(private readonly monitorService: MonitorService) {
    super();
  }
  getService(): BaseService<Monitor> {
    return this.monitorService;
  }
}
