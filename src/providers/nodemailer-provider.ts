import type Nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailBody } from "../useCases/protocols/emailBody";

export class NodemailerProvider {
  constructor(
    private readonly user: string | undefined,
    private readonly pass: string | undefined,
    private readonly host: string | undefined,
    private readonly portEmail: string | undefined,
    private readonly nodemailer: typeof Nodemailer,
  ) { }

  async send(emailBody: EmailBody): Promise<SMTPTransport.SentMessageInfo> {
    let mailOptions: Mail.Options = {
      from: this.user,
      to: emailBody.to,
      subject: emailBody.subject,
      text: emailBody.message
    }

    const transporter = this.nodemailer.createTransport({
      host: this.host,
      port: Number(this.portEmail),
      secure: false,
      auth: {
        user: this.user,
        pass: this.pass
      },
      tls: { rejectUnauthorized: false }
    })
    try {
      const res = await transporter.sendMail(mailOptions)
      return res
    } catch (error) {
      throw Error
    }
  }
}