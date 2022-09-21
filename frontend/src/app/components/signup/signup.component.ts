import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/details.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide:boolean=true
  
@ViewChild('signupform') form:NgForm | undefined

  constructor(private userService:TutorialService, private route:Router) { }

 
  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.create(this.form?.value).subscribe((value)=>{
      this.route.navigateByUrl('login')
      
      
    })
    
  }
  Roles: any = ['Business', 'User'];
 

}
