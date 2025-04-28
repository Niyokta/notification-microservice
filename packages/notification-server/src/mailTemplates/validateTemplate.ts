import { convertToNewLoginText, convertToWelcomeText } from "./Templates/welcome"

export function  validateTemplate(templateType:string,templateData:any):string {
    if(templateType=="welcome") 
        return convertToWelcomeText(templateData.username);

    else if(templateType==="New Login"){
        return convertToNewLoginText();
    }
    return "template not defined"
}


