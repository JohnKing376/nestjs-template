import { Module } from "@nestjs/common";
import { DbModule } from "./db/db.module";
import { RedisModule } from "./redis/redis.module";
import { BullMQModule } from "./bullmq/bullmq.module";

@Module({
  imports: [DbModule, RedisModule, BullMQModule],
})
export class InfrastructureModule {}
