export class ProfileDTO {

    id: string;
    name: string;
    status: boolean;
    createdAt: Date;

    constructor(props: Omit<ProfileDTO, 'id' | 'status' | 'createdAt'>) {
        Object.assign(this, props);
    }

}