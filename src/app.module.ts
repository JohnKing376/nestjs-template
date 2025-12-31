import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { envValidate } from "@packages/internal/env-validator";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import appConfig from "@config/app.config";
import databaseConfig from "@config/database.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validate: envValidate,
    }),
    InfrastructureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
