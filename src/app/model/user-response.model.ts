import { User } from "../model/user.model";

export interface UserResponse {
    code: number;
    message: string;
    data: User[];
}
