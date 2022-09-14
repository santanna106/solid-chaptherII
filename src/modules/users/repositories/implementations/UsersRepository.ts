import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();

    Object.assign(newUser, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    console.log('Found USER',user);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);
    console.log('user: ',user);
    if(user){
      return user;
    }  else {
      return undefined;
    }
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find((user) => user.email === receivedUser.email);
    user.admin = true;

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
