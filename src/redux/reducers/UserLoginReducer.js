import { TOKEN } from "../../util/setting/config"
import { GET_USER_LIST, LOGIN_USER } from "../constants/UserLoginConstant"

const initialState = {
    userList: [
        {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
        }
    ],
    pagination: {}

}

export const UserLoginReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_USER:
            localStorage.setItem(TOKEN, action.loginUser.token)
            return { ...state }
        case GET_USER_LIST: {
            const {data, ...rest} = action.userList
            state.userList = data
            state.pagination = rest
            return {...state}
        }
        default:
            return state
    }
}
