import { Injectable } from '@nestjs/common';
import { CreatePaybleDto } from './dto/create-payble.dto';
import { CreateAssignorDto } from './dto/create-assignor.dto';

@Injectable()
export class IntegrationsService {
  createAssignor(createAssignorDto: CreateAssignorDto) {
    throw new Error('Method not implemented.');
  }
  createPayble(createPaybleDto: CreatePaybleDto) {
    throw new Error('Method not implemented.');
  }
  findOneAssignor(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findOnePayble(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
