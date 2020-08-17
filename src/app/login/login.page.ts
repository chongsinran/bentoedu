import { Component, OnInit } from '@angular/core';
import { database, auth } from 'firebase';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  //-------General variable-----
  user={
    email:'',
    password:''
  }

  constructor(public navCtrl:NavController) { }

  ngOnInit() {

    auth().onAuthStateChanged(user=>{
      console.log('run how many time')
      if(user){
        this.navCtrl.navigateRoot('home')
      }
    })

  }


  Login(){
    auth().signInWithEmailAndPassword(this.user.email,this.user.password).then(a=>{
      alert("Succesfullly Login!")   
      
    }).catch(e=>{
      alert(e)
    })
  }

  Register(){
    this.navCtrl.navigateForward('registration')
  }


}
