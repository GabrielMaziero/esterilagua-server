import { Request, Response } from "express";
import { Controller } from "../protocols/controller";
import { SendEmailUseCase } from "./sendEmailUseCase";

export class SendEmailController implements Controller {

  constructor(private sendEmailUseCase: SendEmailUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { message, subject, to } = request.body

    try {
      const res = await this.sendEmailUseCase.execute({ message, subject, to })
      return response.status(200).json(res)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message || 'unexpected error' })
      }
      return response.status(500)
    }
  }
}