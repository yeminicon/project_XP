import { Global, Module } from '@nestjs/common';
import { ApiConfigService } from '../services/api-config.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [ApiConfigService, ConfigService],

  exports: [ApiConfigService, ConfigService],
})
export class SharedModule {}
