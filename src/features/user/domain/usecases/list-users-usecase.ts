import { IUser } from "../contracts/user";
import { UserRepository } from "./../../infra/database/repositories/user-repository";

export class ListUserUseCase {
    async run(): Promise<IUser[]> {
        const repository = new UserRepository();
        return await repository.list();
    }
}
