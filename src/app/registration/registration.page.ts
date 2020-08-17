import { Component, OnInit } from '@angular/core';
import { auth, database } from 'firebase';
import { iif } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user={
    email:'',
    password:'',
    password2:'',
    name:'Anonymous',
    picture:'https://img.favpng.com/15/8/8/user-profile-2018-in-sight-user-conference-expo-business-default-png-favpng-5EdhQJprgN1HKZdx50LCN4zXg.jpg',
    gender:'Male',
    phone: '',
    code:false,
    eat:true,
    sleep:true,
    dob:(new Date()).toISOString()
  }
  constructor() { }

  ngOnInit() {
  }

  detectRepeat(){
  
    if(this.user.password==this.user.password2){
      return true
    }else{
      return false
    }
   
  }

  Register(){
    let verify=this.detectRepeat()
    if(verify){
      auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((a)=>{
        alert('Registered')
        database().ref('users/'+auth().currentUser.uid).update(this.user)
      }).catch((e)=>{
        alert(e)
      })
    }else{
      alert('Password not aligned')
    }
    
  }
}
