import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateMapModuleController } from './create-map-module/create-map-module.controller';
import { CreateMapModuleService } from './create-map-module/create-map-module.service';
import { LoginModuleController } from './login-module/login-module.controller';

import { LoginModuleService } from './login-module/login-module.service';


@Module({
  imports: [],
  controllers: [AppController, LoginModuleController, CreateMapModuleController, ],
  providers: [AppService, CreateMapModuleService, LoginModuleService, ],
})
export class AppModule {}
