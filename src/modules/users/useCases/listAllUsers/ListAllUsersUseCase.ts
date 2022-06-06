import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        if (!user_id) {
            return;
        }

        const user = this.usersRepository.findById(user_id);
        const users = this.usersRepository.list();
        if (!user || !user.admin) {
            throw new Error('Mensagem do erro');
        }

        return users;
    }
}

export { ListAllUsersUseCase };
