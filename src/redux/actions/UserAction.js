import { userService } from "../../services/UserService"
import { STATUS } from "../../util/setting/config"
import { GET_USER_LIST, LOGIN_USER } from "../constants/UserLoginConstant"
import {history} from '../../App'

export const loginUserAction = (user) => {
    return async dispacth => {
        try {
            const result = await userService.loginUser(user)
            if (result.status === STATUS.SUCCESS) {
                await dispacth({
                    type: LOGIN_USER,
                    loginUser: result.data,
                })
                history.push('/dashboard')
            }
        } catch (error) {
            console.log({error})
        }
    }
}
export const getUserListAction = (page) => {
    return async dispacth => {
        try {
            const result = await userService.getUserList(page)
            if(result.status === STATUS.SUCCESS){
                dispacth({
                    type:GET_USER_LIST,
                    userList: result.data
                })
            }
        } catch (error) {
            console.log({error})
        }
    }
}
export const createNewUserAction = (user) => {
    return async dispacth => {
        try {
            const result = await userService.createUser(user)
            if(result.status === STATUS.SUCCESS){
                dispacth(getUserListAction(1))
            }
        } catch (error) {
            console.log({error})
        }
    }
}