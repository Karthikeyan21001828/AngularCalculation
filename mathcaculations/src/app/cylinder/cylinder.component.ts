import { Component } from "@angular/core";

@Component({
    selector:'Cylinder-Area',
    templateUrl:'./cylinder.component.html'
})
export class cylinderComponent{
    radius:number;
    height:number;
    area:number;
    constructor(){
        this.radius=10;
        this.height=20;
        this.area= this.radius * this.height;
    }
    onCalculate(){
        this.area =(22/7)* this.radius*this.radius * this.height
    }
}