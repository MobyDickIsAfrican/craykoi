// authentication helper functions
import {TokenError} from './Authvalidation.js';

function tokenHeader(){
    try {
        let token  = localStorage.getItem("token")
        if(!token){
            throw new TokenError("no token")
        };
        return {"Authorization": `Token ${token}`}
    } catch (error) {
        if(error instanceof TokenError){
            throw error
        };
    }
};

export {tokenHeader}