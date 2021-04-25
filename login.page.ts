import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initLogin, Login } from './model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials: Login = {...initLogin };
  id_send: ""; 

  constructor(private http: HttpClient ,private routes:Router ) {}     
  
  fetchData() {
  const apiUrl = 'http://127.0.0.1/loginLivreur.php?phone='+this.credentials.phone+'&pass='+this.credentials.pass;

    this.http.get(apiUrl).subscribe(
      res => {

        if(res['statut']) {
        this.routes.navigateByUrl('tab/tabs/tab2/'+res['id']);
        localStorage.setItem('id_login', res['phone']);
        } else {

           alert("error auth")

        }
       },
      err => {
        console.log(err);
      }
    );
  }
}