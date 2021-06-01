export class RegisterInfo {
    //name: string;
    username: string;
    //email: string;
   // roles: string[];
    password: string;

    // constructor(name: string, username: string, email: string, password: string) {
    //     this.name = name;
    //     this.username = username;
    //     this.email = email;
    //     this.password = password;
    //     this.roles= ['user'];
    // }

    constructor(username: string,password: string) {
      
        this.username = username;
        this.password = password;
        
    }
}
