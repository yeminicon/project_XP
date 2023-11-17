import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/config/configuration';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        configService.TypeormConfig,
      inject: [ApiConfigService],
    }),
    AuthModule,
    ProductModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
