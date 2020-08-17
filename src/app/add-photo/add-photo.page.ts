import { Component, OnInit } from '@angular/core';
import * as EXIF from 'exif-js';
import { storage, database, auth } from 'firebase';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.page.html',
  styleUrls: ['./add-photo.page.scss'],
})
export class AddPhotoPage implements OnInit {

  constructor(public nav:NavController) { }
  title=''
  username=''
  userid=''
  userpicture=''
  ngOnInit() {

    // database().ref('users/'+auth().currentUser.uid).once('value',data=>{
    //   this.username=data.val().name;
    //   this.userid=auth().currentUser.uid;
    //   this.userpicture=data.val().picture;
    // })
  }
  imagectype;
  imagec;
  base64img;
  fileChange(event) {

    if (event.target.files && event.target.files[0] && event.target.files[0].size < (10485768)) {
      this.imagectype = event.target.files[0].type;
        var can = document.createElement("canvas");
        var ctx = can.getContext('2d');
        var thisImage = new Image;
        var maxW = 500;
        var maxH = 500;
        thisImage.onload = () => {
          var iw = thisImage.width;
          var ih = thisImage.height;
          var scale = Math.min((maxW / iw), (maxH / ih));
          var iwScaled = iw * scale;
          var ihScaled = ih * scale;
          can.width = iwScaled;
          can.height = ihScaled;
          ctx.save();
          var width = can.width; var styleWidth = can.style.width;
          var height = can.height; var styleHeight = can.style.height;
        
         

          ctx.drawImage(thisImage, 0, 0, iwScaled, ihScaled);
          ctx.restore();
          console.log(ctx)

          this.imagec = can.toDataURL();


          let imgggg = this.imagec.replace(';base64,', "thisisathingtoreplace;")

          let imgarr = imgggg.split("thisisathingtoreplace;")
          this.base64img = imgarr[1]
          event.target.value = ''


        }
        thisImage.src = URL.createObjectURL(event.target.files[0]);
      
    } else {
      alert("Your Current Image Too Large, " + event.target.files[0].size / (10241024) + "MB! (Please choose file lesser than 8MB)")
    }
  }


  uploadToDB(){
    let date=new Date();
    storage().ref('posts/' + date.getTime() + '.' + this.imagectype.replace('image/', '')).putString(this.imagec, 'data_url').then((a) => {
      a.ref.getDownloadURL().then(aa => {
        console.log(aa)
      })
    })
  }
  
  upload() {
    if(this.imagec && this.title && this.username && this.userid && this.userpicture){
      let date = new Date()
      storage().ref('posts/' + date.getTime() + '.' + this.imagectype.replace('image/', '')).putString(this.imagec, 'data_url').then((a) => {
        a.ref.getDownloadURL().then(aa => {
          let obj={
            username:this.username,
            userid:this.userid,
            picture:aa,
            userpicture:this.userpicture,
            date:database.ServerValue.TIMESTAMP,
            title:this.title
          }

          database().ref('posts').push(obj).then((a)=>{
            alert('Posted')
            this.nav.pop();
          })
          console.log(aa)
        })
  
      })

    
    }else{
      alert('Info Not complete')
    }
    
  }
  back(){
    this.nav.pop()
  }
}
