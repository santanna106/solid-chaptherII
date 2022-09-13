import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const allUsers = this.turnUserAdminUseCase.execute();

    return response.json(allUsers);
  }
}

export { TurnUserAdminController };
