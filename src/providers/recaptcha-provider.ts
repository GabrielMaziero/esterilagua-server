import { AxiosInstance, AxiosResponse } from "axios";
import { IResponseRecaptcha } from "../useCases/protocols/recapcha";

export class RecaptchaProvider {
  constructor(
    private readonly axios: AxiosInstance,
  ) { }

  async verify(token: string): Promise<AxiosResponse<IResponseRecaptcha>> {
    try {
      return this.axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`)
    } catch (error) {
      throw Error
    }
  }
}