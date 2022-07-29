import { baseService } from "./baseService";


export class UserService extends baseService {
    contructor(){
        super()
    }
    registerUser = (user) => {
        return this.post(`api/register`, user)
    }
}

export const userService = new UserService()