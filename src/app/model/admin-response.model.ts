import { Admin } from "./admin.model";

export interface AdminResponse {
    code: number;
    message: string;
    data: Admin[];
}
