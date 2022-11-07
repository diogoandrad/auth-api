export class LoginDTO {

    email: string;
    password: string;

    constructor(props: LoginDTO) {
        Object.assign(this, props);
    }

}