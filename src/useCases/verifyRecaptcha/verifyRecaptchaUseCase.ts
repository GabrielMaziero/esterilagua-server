import { AxiosResponse } from "axios";
import { RecaptchaProvider } from "../../providers/recaptcha-provider";
import { IResponseRecaptcha } from "../protocols/recapcha";

export class VerifyRecaptchaUseCase {
  constructor(private readonly recaptchaProvider: RecaptchaProvider) { }
  async execute(token: string): Promise<AxiosResponse<IResponseRecaptcha>> {
    try {
      if (!token) {
        throw new Error('invalid param')
      }
      const res = await this.recaptchaProvider.verify(token);
      return res
    } catch (error) {
      throw error
    }
  }
}