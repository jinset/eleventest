export class ContactModel {
    public contactID : string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public streetAddress1 :string;
    public streetAddress2: string;
    public city: string;
    public state:string;
    public zipCode: string;
    
    constructor(contactID : string, firstName: string, lastName: string, phoneNumber: string, streetAddress1 :string,streetAddress2: string,
        city: string, state:string , zipCode: string){
        this.contactID = contactID,
        this.firstName = firstName,
        this.lastName = lastName,
        this.phoneNumber = phoneNumber,
        this.streetAddress1 = streetAddress1,
        this.streetAddress2 = streetAddress2,
        this.city = city,
        this.state = state,
        this.zipCode = zipCode;
    }
}
