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
import { CreateAssignorDto } from './dto/create-assignor.dto';
import { CreatePaybleDto } from './dto/create-payble.dto';

@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Post('payable')
  createPayble(@Body() createPaybleDto: CreatePaybleDto) {
    return this.integrationsService.createPayble(createPaybleDto);
  }

  @Post('assignor')
  createAssignor(@Body() createAssignorDto: CreateAssignorDto) {
    return this.integrationsService.createAssignor(createAssignorDto);
  }

  @Get('payable/:id')
  findOnePayble(@Param('id') id: string) {
    return this.integrationsService.findOnePayble(+id);
  }

  @Get('assignor/:id')
  findOneAssignor(@Param('id') id: string) {
    return this.integrationsService.findOneAssignor(+id);
  }

  /* @Get()
  findAll() {
    return this.integrationsService.findAll();
  } */

  /* @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIntegrationDto: UpdateIntegrationDto,
  ) {
    return this.integrationsService.update(+id, updateIntegrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.integrationsService.remove(+id);
  } */
}
