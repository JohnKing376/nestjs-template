import { Injectable } from "@nestjs/common";
import {
  RedisService as NestRedisService,
  type RedisClientType,
} from "@nestjs-labs/nestjs-redis";

@Injectable()
export class RedisService {
  #instance: RedisClientType;
  constructor(private readonly redisService: NestRedisService) {
    this.#instance =
      this.redisService.getClient() as unknown as RedisClientType;

    if (!this.#instance) {
      throw Error("Redis instance is null");
    }
  }

  get instance(): RedisClientType {
    return this.#instance;
  }

  async cacheKey(key: string, value: string): Promise<string> {
    await this.#instance.set(key, value);

    return `Key ${key} set successfully`;
  }

  async getCacheKey(key: string): Promise<string | null> {
    return await this.#instance.get(key);
  }

  async deleteCacheKey(keys: string[]) {
    const deleted = await this.#instance.del(keys);

    return deleted > 0
      ? `Keys ${keys.join(", ")} deleted successfully`
      : `Keys ${keys.join(", ")} not found`;
  }
}
