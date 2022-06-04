import { NodemailerProvider } from "../providers/nodemailer-provider";
import { SendEmailController } from "./sendEmail/sendEmailController";
import { SendEmailUseCase } from "./sendEmail/sendEmailUseCase";
import * as nodemailer from "nodemailer";
import 'dotenv/config';

const nodemailerProvider = new NodemailerProvider(process.env.USER_EMAIL, process.env.PASS, process.env.HOST, process.env.PORT_EMAIL, nodemailer)
const sendEmailUseCase = new SendEmailUseCase(nodemailerProvider);
const sendEmailController = new SendEmailController(sendEmailUseCase)

export { sendEmailUseCase, sendEmailController }