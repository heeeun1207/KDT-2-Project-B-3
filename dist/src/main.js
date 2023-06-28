"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express = require("express");
const path_1 = require("path");
const app_module_1 = require("./app.module");
console.log(__dirname);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '..', 'client', 'dist'));
    app.use(express.static((0, path_1.join)(__dirname, '..', '..', 'client', 'dist')));
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map