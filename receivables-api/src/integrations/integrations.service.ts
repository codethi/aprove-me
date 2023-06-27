import { Injectable } from '@nestjs/common';
import { CreatePaybleDto } from './dto/create-payble.dto';
import { CreateAssignorDto } from './dto/create-assignor.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class IntegrationsService {
  constructor(private prisma: PrismaService) {}

  createAssignor(createAssignorDto: CreateAssignorDto) {
    return this.prisma.assignor.create({ data: createAssignorDto });
  }
  createPayble(createPaybleDto: CreatePaybleDto) {
    return this.prisma.payble.create({ data: createPaybleDto });
  }
  findOneAssignor(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findOnePayble(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
