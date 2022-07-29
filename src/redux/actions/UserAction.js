import { userService } from "../../services/UserService"


export const registerUserAction = (user) => {
    return async dispacth => {
        try {
            const result = await userService.registerUser(user)
            if (result.data.statusCode === 200) {
                dispacth({
                    type: 'GET_TICKET_ROOM',
                })
            }
        } catch (error) {
            alert('lay thong tin phong ve khong thanh cong')
        }
    }
}