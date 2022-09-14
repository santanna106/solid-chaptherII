import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    console.log('user_id:',user_id);

    try{
      const user = this.showUserProfileUseCase.execute({ user_id });

      if(user){
        return response.status(201).json(user);
      } 
    } catch(error){
      return response.status(404).json({error:"User not found!"});
    }
    
  }
}

export { ShowUserProfileController };
