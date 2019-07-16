import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/shared.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  sigupuser: any = {
      name : "",
  }

  message : any;

  constructor( private service: HelperService) { }

  ngOnInit() {
  }
  signup(form, sigupuser){
      if(!form.invalid){
        this.service.postData('users',sigupuser).subscribe(data=>{
          this.message = data
          console.log(this.message);
          form.reset()
        }, err => {
          this.message = err
          console.log(this.message); 

        })
      }
  }
  

}
