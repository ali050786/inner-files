import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginUser = {}
    
  constructor( private service: HelperService ) { }

  ngOnInit() {
    
  }
   
  login(loginForm, loginUser){
    if(!loginForm.invalid){
      this.service.postData('/Users/login', loginUser ).subscribe( data =>{
        console.log(data)
      } , err =>{

        console.log(err)
      })
    }
  }


  
}




 