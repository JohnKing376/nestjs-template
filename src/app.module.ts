import "dotenv/config";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { PrismaModule } from "@infrastructure/db/prisma/prisma.module";
import { envValidate } from "@packages/internal/env-validator";
import appConfig from "@config/app.config";
import databaseConfig from "@config/database.config";



const ENV = (process.env.NODE_ENV || "dev").toLowerCase();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validate: envValidate,
      envFilePath: !ENV ? `.env` : `.env.${ENV}`,
    }),
    UsersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
