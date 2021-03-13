// extended Errors for validating token functions

class TokenError extends Error{
    constructor(message){
        super(message);
        this.name = "TokenError"
    }
};

export {TokenError}