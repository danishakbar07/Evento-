import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TutorialService } from 'src/app/services/details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
hide:boolean=true
@ViewChild('loginform') form:NgForm | undefined

  constructor(private check: TutorialService,private route:Router) { }

  ngOnInit(): void {
  }
onSubmit(){

  this.check.checkUser(this.form?.value).subscribe((value)=>{
    console.log(value);
    
    
   if(value.success){

    this.route.navigateByUrl('feed')

   }else{
    this.route.navigateByUrl('home')
   }

   
   
   
    
    
    
  })
  

}
}
