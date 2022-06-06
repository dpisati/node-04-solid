import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

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
        const user = new User();
        const now = new Date();

        Object.assign(user, { name, email, created_at: now, updated_at: now });

        this.users.push(user);

        return user;
    }

    findById(id: string): User | undefined {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return;
        }
        return user;
    }

    findByEmail(email: string): User | undefined {
        const user = this.users.find((user) => user.email === email);

        if (!user) {
            return;
        }
        return user;
    }

    turnAdmin(receivedUser: User): User {
        const user = this.users.find((user) => user.id === receivedUser.id);

        if (!user) {
            return;
        }

        user.admin = true;
        user.updated_at = new Date();

        return user;
    }

    list(): User[] {
        return this.users;
    }
}

export { UsersRepository };
