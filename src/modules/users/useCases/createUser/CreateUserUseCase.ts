import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const useralreadyExistis = this.usersRepository.findByEmail(email);
    let user = undefined;
    if (useralreadyExistis) {
      throw new Error("Mensagem do erro");
    } 
      
    user = this.usersRepository.create({ email, name });
    return user;
    

   
  }
}

export { CreateUserUseCase };
