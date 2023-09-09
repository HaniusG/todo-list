const createError = (errorMsgs) => {
    return{
        message: errorMsgs || "Error...",
        statusCode: 401
    }
}

const validateInput = (text) => {
    if(text.trim().length > 0){
        return true;
    }
    return false

}

export {
    validateInput,
    createError
}