//class ke bahar se koi value get krna chahte ho to getter
//class ke andar koi value set krna chahte ho to setter


class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
         this._email=value;
    }

    get password(){ 
        return `${this._password}rounak`
    }

    set password(value){
        this._password=value   /*RangeError: Maximum call stack size exceeded  -- agar hum this.password=password krte
                                at set password (c:\javascript\10_classes_and_OOPs\getter_setter.js:16:22)
                                         at set password (c:\javascript\10_classes_and_OOPs\getter_setter.js:16:22)*/
    }
}


const chai=new User("rounak@ai","123");

console.log(chai.password);