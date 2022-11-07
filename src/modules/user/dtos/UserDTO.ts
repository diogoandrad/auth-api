import { Profile } from "../../../database/entities/Profile";

export class UserDTO {

    id: string;
    name: string;
    email: string;
    password: string;
    profile: Profile;
    status: boolean;
    createdAt: Date;

    constructor(props: Omit<UserDTO, 'id' | 'status' | 'createdAt'>) {
        Object.assign(this, props);
    }

}