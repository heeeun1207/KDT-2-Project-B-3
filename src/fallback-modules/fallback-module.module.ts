import { Module } from '@nestjs/common';
import { FallbakController } from './fallback-module.controller';
import { FallbackModuleService } from './fallback-module.service';
@Module({
  controllers:[FallbackModuleService],
  providers:[FallbakController]
})
export class FallbackModuleModule {}
