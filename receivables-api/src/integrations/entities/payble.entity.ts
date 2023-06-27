import { UUID } from 'crypto';

export class Payble {
  id: UUID;
  value: number;
  emissionDate: Date;
  assignor: string;
}
