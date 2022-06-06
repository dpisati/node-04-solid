import { Request, Response } from 'express';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;

        if (!user_id) {
            return response.status(400).send({ error: 'Usuário não criado' });
        }

        try {
            const user = this.turnUserAdminUseCase.execute({ user_id });
            return response.status(201).json(user);
        } catch (err) {
            return response.status(404).send({ error: 'Usuário não criado' });
        }
    }
}

export { TurnUserAdminController };
