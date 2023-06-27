import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { UpdateIntegrationDto } from './dto/update-integration.dto';
import { CreateAssignorDto } from './dto/create-assignor.dto';
import { CreatePaybleDto } from './dto/create-payble.dto';

@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Post('payable')
  createPayble(@Body() createPaybleDto: CreatePaybleDto) {
    return this.integrationsService.create(createPaybleDto);
  }

  @Post('assignor')
  createAssignor(@Body() createAssignorDto: CreateAssignorDto) {
    return this.integrationsService.create(createAssignorDto);
  }

  @Get()
  findAll() {
    return this.integrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.integrationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIntegrationDto: UpdateIntegrationDto,
  ) {
    return this.integrationsService.update(+id, updateIntegrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.integrationsService.remove(+id);
  }
}
