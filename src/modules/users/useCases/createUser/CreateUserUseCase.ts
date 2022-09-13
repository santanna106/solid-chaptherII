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

    if (useralreadyExistis) {
      throw new Error("User already exists!");
    }

    this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
