import { User } from "../interfaces/UserInterfaces";

export const validateUser = (userToValidate: User): string[] => {
    const errorArray = [] as string[];
    if(typeof userToValidate.user !== "string" || userToValidate.user.length <= 0){
        errorArray.push("Error: The user must be valid");
    }
    if(typeof userToValidate.email !== "string" || userToValidate.email.length <= 0){
        errorArray.push("Error: The email must be valid");
    }
    if(typeof userToValidate.passwd !== "string" || userToValidate.passwd.length <= 0){
        errorArray.push("Error: The password must be valid");
    }
    if(typeof userToValidate.token !== "string"|| userToValidate.token.length <= 0){
        errorArray.push("Error: The token must be valid");
    }
    return errorArray;
}