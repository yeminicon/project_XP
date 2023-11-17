import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import type { dbConfigs } from 'src/types';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}
  get TypeormConfig(): TypeOrmModuleOptions {
    const dbParams = this.configService.get<dbConfigs>('database');

    const { username, password, database, host, port }: dbConfigs = dbParams;

    return {
      type: 'postgres',
      migrations: [],
      entities: [User],
      migrationsRun: true,
      username,
      password,
      database,
      host,
      port,
    };
  }
}
