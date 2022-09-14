import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id  = request.headers["user_id"] as string;

    console.log('HEADER_user_id')

    try{
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      if(allUsers){
        return response.json(allUsers);
      }
    } catch (error){
      return response.status(404).json({error:"Error forbidden"});
    }
    

   
  }
}

export { ListAllUsersController };
