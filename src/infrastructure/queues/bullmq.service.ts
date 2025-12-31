import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { JobsOptions, Queue } from "bullmq";
import { QueueName } from "./enums/queues.enum";
import { QueuePayloadMap } from "./types/queue.types";

@Injectable()
export class BullMQService {
  #queueMap: Record<QueueName, Queue>;

  constructor(
    @InjectQueue(QueueName.EmailQ) private readonly emailQ: Queue,
    @InjectQueue(QueueName.PaymentQ) private readonly paymentQ: Queue,
  ) {
    this.#queueMap = {
      [QueueName.EmailQ]: this.emailQ,
      [QueueName.PaymentQ]: this.paymentQ,
    };
  }

  async enqueueJob<T extends QueueName>(
    queueName: T,
    data: QueuePayloadMap[T],
    options?: JobsOptions,
  ) {
    const queue = this.#queueMap[queueName];

    if (!queue) {
      throw new Error("QueueName Not Found");
    }

    return queue.add(queueName, data, options);
  }

  // async addJob(queueL Queue, jobName: string){
  //   await this.enqueueJob(QueueName.EmailQ, {
  //     senderEmail: 'me',
  //     recipientEmail: 'me@gamil.com',
  //     senderName: 'John',
  //     body: 'testing',
  //     message: 'hmm',
  //     recipientName: 'kk'
  //   }, {

  //   })
  // }
}
