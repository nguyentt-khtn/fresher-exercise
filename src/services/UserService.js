import { baseService } from "./baseService";


export class UserService extends baseService {
    

    
    loginUser = (user) => {
        return this.post(`api/login`, user)
    }
    getUserList = () => {
        return this.get(`api/users?page=2`)
    }
}

export const userService = new UserService()