import { convertToWelcomeText } from "./Templates/welcome"

export function  validateTemplate(templateType:string,templateData:any):string {
    if(templateType=="welcome") 
        return convertToWelcomeText(templateData.username);
    return "template not defined"
}