import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { database, auth } from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) protected content: IonContent;
  messages
  AllMessages = []
  user={
    username:'',
    picture:'',
    userid:''
  }
  constructor(public nav:NavController) { }
  
  ngOnInit() {
    auth().onAuthStateChanged(()=>{
      this.user.userid=auth().currentUser.uid
      setTimeout(() => {
        this.content.scrollToBottom(500)
      }, 500)
  
      database().ref('users/'+auth().currentUser.uid).once('value',user=>{
        this.user.username=user.val().name;
        this.user.picture=user.val().picture;
      })
      database().ref('chat').on('child_added',message=>{
        console.log(message)
       this.AllMessages.push(message.val())
       setTimeout(() => {
        this.content.scrollToBottom(500)
      }, 200)
      })
  
    })
    
  }


  sendMessage(){
    if(this.messages&&this.messages.trim()){
      console.log('sen')
      let obj={
        message:this.messages,
        username:this.user.username,
        picture:this.user.picture,
        date:database.ServerValue.TIMESTAMP,
        userid:auth().currentUser.uid
      }
      database().ref('chat').push(obj)
      this.messages=''
    }else{
      this.messages=''
    }
  }

  back(){
    this.nav.pop()
  }
}
