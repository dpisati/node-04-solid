import { Request, Response } from 'express';

import { IRequest, ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.headers;

        if (!user_id) {
            return response.status(400).send({ error: 'Usuário não criado' });
        }

        try {
            const users = this.listAllUsersUseCase.execute({
                user_id,
            } as IRequest);
            return response.status(200).json(users);
        } catch (err) {
            return response.status(400).send({ error: 'Usuário não criado' });
        }
    }
}

export { ListAllUsersController };
