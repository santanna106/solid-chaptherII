import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    if (!email || email === "") {
      return response.status(400).json({ error: "Invalid Email!" });
    }

    if (!name || name === "") {
      return response.status(400).json({ error: "Invalid Name!" });
    }
   
    try{
      const user = this.createUserUseCase.execute({ name, email });
      if (user) {
        return response.status(201).json(user);
      }
    } catch(error){
      return response.status(400).json({ error: "User already in use" });
    }
  

  
   
  }
}

export { CreateUserController };
