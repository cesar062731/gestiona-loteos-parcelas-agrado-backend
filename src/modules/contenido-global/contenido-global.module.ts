import { Module } from '@nestjs/common';
import { BackOfficeModule } from '../back-office/back-office.module';
import { IntegrationsModule } from '../integrations/integrations.module';
import { MarketplaceProveedoresModule } from '../marketplace-proveedores/marketplace-proveedores.module';

@Module({
  imports: [MarketplaceProveedoresModule, IntegrationsModule, BackOfficeModule],
})
export class ContenidoGlobalModule {}
