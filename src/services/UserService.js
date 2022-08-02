import { baseService } from "./baseService";


export class UserService extends baseService {
    

    
    loginUser = (user) => {
        return this.post(`api/login`, user)
    }
    getUserList = (page=1) => {
        return this.get(`api/users?page=${page}`)
    }
    createUser = (user) => {
        return this.post(`api/users`,user)
    }
}

export const userService = new UserService()