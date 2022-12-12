import { Request, Response } from "express";
import { Controller } from "../protocols/controller";
import { VerifyRecaptchaUseCase } from "./verifyRecaptchaUseCase";

export class VerifyRecaptchaController implements Controller {

  constructor(private verifyRecaptchaUseCase: VerifyRecaptchaUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query

    try {
      const res = await this.verifyRecaptchaUseCase.execute(String(token))
      return response.status(200).json(res.data)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message || 'unexpected error' })
      }
      return response.status(500)
    }
  }
}