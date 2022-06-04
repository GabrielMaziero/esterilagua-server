import { Request, Response, Router } from "express";
import { sendEmailController } from "./useCases";

const router = Router()

router.get('/', (req: Request, res: Response) => res.status(200).json('Hello World'))
router.post('/', (req: Request, res: Response) => sendEmailController.handle(req, res))

export default router;