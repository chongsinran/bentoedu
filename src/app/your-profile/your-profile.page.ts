import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { database } from 'firebase';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.page.html',
  styleUrls: ['./your-profile.page.scss'],
})
export class YourProfilePage implements OnInit {

  constructor(public nav: NavController,public route: ActivatedRoute) { }
  user={
    name:'',
    picture:'',
  }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'))
    let userid=this.route.snapshot.paramMap.get('id')
    database().ref('users/'+userid).once('value',data=>{
      this.user.name=data.val().name
      this.user.picture=data.val().picture
    })
  }

  back(){
    this.nav.pop()
  }
}
