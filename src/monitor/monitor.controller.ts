import { Controller } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { CreateMonitorDto } from './dto/create-monitor.dto';
import { UpdateMonitorDto } from './dto/update-monitor.dto';
import { BaseController } from 'src/commons/controller.commons';
import { Monitor } from './entities/monitor.entity';
import { BaseService } from 'src/commons/service.commons';

@Controller('monitor')
export class MonitorController extends BaseController<Monitor> {
  constructor(private readonly monitorService: MonitorService) {
    super();
  }
  getService(): BaseService<Monitor> {
    return this.monitorService;
  }
}
