import { Request, Response } from 'express';

import { IRequest, ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;

        try {
            const user = this.showUserProfileUseCase.execute({
                user_id,
            } as IRequest);
            return response.status(200).json(user);
        } catch (err) {
            return response
                .status(404)
                .send({ error: 'Usuário não encontrado - controller' });
        }
    }
}

export { ShowUserProfileController };
