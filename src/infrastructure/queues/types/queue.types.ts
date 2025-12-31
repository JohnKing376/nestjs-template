import z from "zod";
import { QueueName } from "../enums/queues.enum";

export const SendEmailInput = z.object({
  senderName: z.string(),
  senderEmail: z.email(),
  recipientName: z.string(),
  recipientEmail: z.email(),
  body: z.string(),
  message: z.string(),
  attachments: z.array(z.string()).optional(),
});

enum paymentStatus {
  PAID = "paid",
}

export const Payment = z.object({
  type: z.enum(paymentStatus),
});

export type SendEmailInputType = z.infer<typeof SendEmailInput>;
export type PaymentInputType = z.Infer<typeof Payment>;

export type QueuePayloadMap = {
  [QueueName.EmailQ]: SendEmailInputType;
  [QueueName.PaymentQ]: PaymentInputType;
};
