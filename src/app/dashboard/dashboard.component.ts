import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  //templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
 template:`<div>
 <button name="btn1" (click)="showname()"> Click Here</button>
 </div>`

  
})
export class DashboardComponent implements OnInit {
  
public name='geetha';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 showname(){
   this.router.navigate(['/username',this.name]);
 }
    
}
