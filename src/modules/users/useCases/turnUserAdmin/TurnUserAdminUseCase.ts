import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
   

  repositoryIndex = this.usersRepository.findById(repository => repository.id === user_id);

  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  } else {

    return response.json(repositories[repositoryIndex]);
  }
}

export { TurnUserAdminUseCase };
