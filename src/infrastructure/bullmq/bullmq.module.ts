import { BullModule } from "@nestjs/bullmq";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { BullMQService } from "./bullmq.service";
import bullmqConfig from "./bullmq.config";

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule.forFeature(bullmqConfig)],
      inject: [bullmqConfig.KEY],
      useFactory: (bullConf: { REDIS_URL: string }) => ({
        connection: {
          url: bullConf.REDIS_URL,
        },
      }),
    }),
  ],
  exports: [BullMQService],
  providers: [BullMQService],
})
export class BullMQModule {}
