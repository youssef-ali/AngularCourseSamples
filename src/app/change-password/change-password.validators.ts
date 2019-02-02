import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

export class changePasswordValidators{
    
    static validOldPassword(control: AbstractControl){
        return new Promise((resolve,reject)=> {
                if(control.value !== "123")
                    resolve({invalidOldPassword: true}) ;
                else
                    resolve(null);
        })
    }
    
    static shouldBeMatch(control: AbstractControl){
        let newPass = control.get("newPassword");
        let confirmPass = control.get("confirmPassword");
        if(newPass.value !== confirmPass.value)
            return{passwordsNotMatch:true};
        else
            return null;
    }
    
}