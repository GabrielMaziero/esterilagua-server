import { EmailBody } from "../protocols/emailBody";
import { NodemailerProvider } from "../../providers/nodemailer-provider";

export class SendEmailUseCase {
  constructor(private readonly nodemailerProvider: NodemailerProvider) { }
  async execute(emailBody: EmailBody): Promise<string> {
    for (const [key, value] of Object.entries(emailBody)) {
      if (!value) {
        throw new Error(`Campo ${key} vazio`)
      }
    }
    const res = await this.nodemailerProvider.send(emailBody)
    if (res.rejected.length !== 0) {
      throw new Error('Error ao enviar email.')
    }
    return 'Email enviado com sucesso!'
  }
}