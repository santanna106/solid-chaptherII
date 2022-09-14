import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    
    const { user_id  } = request.headers;
    console.log('HEADER_user_id: ',user_id)
    
    const id:string = user_id as string;
   
    try{
      const allUsers = this.listAllUsersUseCase.execute({ user_id:id });
      if(allUsers){
        return response.json(allUsers);
      }
    } catch (error){
      return response.status(400).json({error:"Error forbidden"});
    }
    

   
  }
}

export { ListAllUsersController };
