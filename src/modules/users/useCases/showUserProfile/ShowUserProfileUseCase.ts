import { response } from 'express';
import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export interface IRequest {
    user_id: string;
}

class ShowUserProfileUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User {
        const user = this.usersRepository.findById(user_id);

        if (!user) {
            throw new Error('Usuário não encontrado - useCase');
        }

        return user;
    }
}

export { ShowUserProfileUseCase };
