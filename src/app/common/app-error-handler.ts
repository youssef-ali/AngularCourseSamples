import { ErrorHandler } from '@angular/core';



export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        // handling unexpected errors
        alert("Unexpected error");
        console.log(error);  
        
    }
}