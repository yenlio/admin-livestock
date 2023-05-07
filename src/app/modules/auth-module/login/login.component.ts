import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth.service';
import { AuthModuleModule } from '../auth-module.module';
// import Auth
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName!: string;
  password!: string;
  formData!: FormGroup;

  constructor(private authService:AuthService,  private router : Router) { }

  ngOnInit() {
     this.formData = new FormGroup({
        userName: new FormControl("admin"),
        password: new FormControl("admin"),
     });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);


 }


}
