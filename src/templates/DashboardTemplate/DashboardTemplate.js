import { Route } from "react-router-dom";
import { history } from "../../App";
import { TOKEN } from "../../util/setting/config";


export const DashboardTemplate = (props) => {
    const {Component, ...restProps} = props;
    if(localStorage.getItem(TOKEN)){
        return <Route {...restProps} render={(propsRoute)=> {
            return <>
                
                <Component {...propsRoute} />
            </>
        }} />
    }else {
        history.push('/login')
    }
    
}