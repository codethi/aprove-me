import { Module } from '@nestjs/common';
import { IntegrationsModule } from './integrations/integrations.module';

@Module({
  imports: [IntegrationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
