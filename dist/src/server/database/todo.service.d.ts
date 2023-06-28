import { Model } from 'mongoose';
import { User } from './todo.model';
export declare class TodoService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(firstname: string, lastname: string): Promise<User>;
    getUsers(): Promise<User[]>;
}
