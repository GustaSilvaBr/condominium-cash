export class DomUtils{

    public static getResponseObjectFromForm(form: HTMLFormElement){
        const formElements = form.elements;

        const responseObject:any = {};

        for(let i = 0; i < formElements.length; i++){
            const element = formElements[i] as HTMLInputElement;

            const elementName = element.name;
            const elementValue = element.value;

            responseObject[elementName] = elementValue;
        }

        return responseObject;
    }

}

