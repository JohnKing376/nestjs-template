import { Module } from "@nestjs/common";
import { RedisService } from "./redis.service";
import { RedisModule as NestRedisModule } from "@nestjs-labs/nestjs-redis";
import { ConfigModule } from "@nestjs/config";
import redisConfig from "./redis.config";

@Module({
  imports: [
    NestRedisModule.forRootAsync({
      imports: [ConfigModule.forFeature(redisConfig)],
      inject: [redisConfig.KEY],
      useFactory: (redisConf: { REDIS_URL: string }) => ({
        url: redisConf.REDIS_URL,
      }),
    }),
  ],
  exports: [RedisService],
  providers: [RedisService],
})
export class RedisModule {}
