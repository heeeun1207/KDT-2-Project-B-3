import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FallbackControllerController } from './fallback-controller/fallback-controller.controller';
import { FallbackModuleController } from './fallback-modules/fallback-module.controller';
import { FallbackModuleModule } from './fallback-modules/fallback-module.module';
import { FallbackModuleService } from './fallback-modules/fallback-module.service';
import { FallbackControllerTsController } from './fallback.controller.ts/fallback.controller.ts.controller';


@Module({
  imports: [FallbackModuleModule],
  controllers: [ AppController, FallbackControllerController, FallbackControllerTsController, FallbackModuleController],
  providers: [AppService, FallbackModuleService],
})
export class AppModule {}
