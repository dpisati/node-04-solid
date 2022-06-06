import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name }: IRequest): User {
        if (!email || !name) {
            throw new Error('Mensagem do erro');
        }

        const isUserAlreadyRegistered = this.usersRepository.findByEmail(email);

        if (isUserAlreadyRegistered) {
            throw new Error('Mensagem do erro');
        }

        return this.usersRepository.create({ name, email });
    }
}

export { CreateUserUseCase };
