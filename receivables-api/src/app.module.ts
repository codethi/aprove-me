import { Module } from '@nestjs/common';
import { PayableModule } from './payable/payable.module';
import { IntegrationsModule } from './integrations/integrations.module';

@Module({
  imports: [PayableModule, IntegrationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
