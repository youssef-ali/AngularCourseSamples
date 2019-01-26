
import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `
                <h1>{{title}}</h1>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
                <div (click)="onDivClicked()">
                    <button (click)="onSave($event)" class="btn btn-primary" [class.isActive]="isActive"> Save </button>
                </div>
                <button  [style.backgroundColor]= "isActive? 'blue' : 'red'"> Save </button>
                <input (keyup.enter) = "onKeyUp()"/>
                <br/>
                <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()"/>
                <div class = "glyphicon glyphicon-star" (click)="clickFavorite()"></div>
            `
})

export class CoursesComponent
{
    title = "List Of Courses"
    courses = ["course1", "course2", "course3"];
    isActive = false;
    email = "me@Example.com"
    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }
    onDivClicked(){
        console.log("Div was clicked");
    }
    onKeyUp(){
        //console.log($event.target.value);
        console.log(this.email);
    }
    clickFavorite(){
        
    }
}