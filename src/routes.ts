import { Request, Response, Router } from "express";
import { verifyRecaptchaController } from "./useCases";

const router = Router()

router.get('/', (req: Request, res: Response) => res.status(200).json('Hello World'))
router.post('/recaptcha', (req: Request, res: Response) => verifyRecaptchaController.handle(req, res))

export default router;