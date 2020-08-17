import { Component, ViewChild } from '@angular/core';
import { database, auth, firestore, functions } from 'firebase';
import { NavController, IonContent } from '@ionic/angular';
import { NgxEpicVideoPlayerComponent } from 'ngx-epic-video-player';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('evp') evp: NgxEpicVideoPlayerComponent;
  allPost = [];
  Ficon = 'home'
  myPicture = ''
  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit(){

    this.http.get('https://bentogram-g06-21.firebaseio.com/userstest?access_token=IUG6DPzrOezo5ONjP8BEZuDKP0XswIV9ba2yKXGy').subscribe(a=>{
      console.log(a)
    })
    database().ref('userstest').on('value',data=>{
      console.log(data.numChildren())
    })
    var citiesRef = firestore().collection("userstest");

    citiesRef.where('keywords', "array-contains-any",["eye","lai"]).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
       
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
            console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  //   let str='chong sin ran is a guy'
  // let splitlist=[];
  //   //console.log(str.split(' '))
  //   let strarr=str.split(' ')
  //   let word=''

  //   let ok=[]
  //   for(let z=0;z<strarr.length;z++){
  //     for(let x=z;x<strarr.length;x++){
  //       word=''
  //       for(let y=z; y <=x ; y++){
  //         if(word){
  //           word=strarr[strarr.length-1-y]+' ' +word
  //         }else{
  //           word=strarr[strarr.length-1-y]
  //         }
            
          
          
        
  //       }
  //       console.log(word)
  //       ok.push(word)
  //     }
     
  //   }

  //   console.log(ok)

  }
  // ngOnInit() {
  //   database().ref('users/' + auth().currentUser.uid + '/picture').on('value', data => {
  //     this.myPicture = data.val()
  //   })
  //   database().ref('posts').on('value', posts => {
  //     console.log(posts.val())
  //     this.allPost = []
  //     posts.forEach(post => {
  //       let tempObj = post.val();
  //       tempObj.key = post.key;
  //       this.allPost.unshift(tempObj)

  //     })
  //   })


  // }


  goChat() {
    this.nav.navigateForward('chat')
  }

  goProfile(userid) {
    this.nav.navigateForward('your-profile/' + userid)
  }

  myProfile() {
    this.nav.navigateForward('my-profile')
  }


  addPost() {
    this.nav.navigateForward('add-photo')
  }

}
