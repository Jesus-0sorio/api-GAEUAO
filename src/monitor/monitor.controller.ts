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

  // @Post()
  // create(@Body() createMonitorDto: CreateMonitorDto) {
  //   return this.monitorService.create(createMonitorDto);
  // }

  // @Get()
  // findAll() {
  //   return this.monitorService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.monitorService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMonitorDto: UpdateMonitorDto) {
  //   return this.monitorService.update(+id, updateMonitorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.monitorService.remove(+id);
  // }
}
