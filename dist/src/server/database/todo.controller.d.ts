import { TodoService } from './todo.service';
import { User } from './todo.model';
import { CreateUserDto } from './dto/create-todo.dto';
export declare class TodoController {
    private readonly TodoService;
    constructor(TodoService: TodoService);
    getUsers(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
