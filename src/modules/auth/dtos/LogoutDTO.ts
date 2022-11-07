export class LogoutDTO {

    email: string;
    password: string;

    constructor(props: LogoutDTO) {
        Object.assign(this, props);
    }

}