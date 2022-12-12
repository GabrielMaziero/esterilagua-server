import axios from "axios";
import 'dotenv/config';
import { RecaptchaProvider } from "../providers/recaptcha-provider";
import { VerifyRecaptchaController } from "../useCases/verifyRecaptcha/verifyRecaptchaController";
import { VerifyRecaptchaUseCase } from "../useCases/verifyRecaptcha/verifyRecaptchaUseCase";

const recaptchaProvider = new RecaptchaProvider(axios);
const verifyRecaptchaUseCase = new VerifyRecaptchaUseCase(recaptchaProvider);
const verifyRecaptchaController = new VerifyRecaptchaController(verifyRecaptchaUseCase);

export { verifyRecaptchaUseCase, verifyRecaptchaController };
