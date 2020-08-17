import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { auth, storage, database } from 'firebase';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import * as EXIF from 'exif-js'
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  user={
    name:'',
    picture:''
  }

  constructor(public router:Router,public nav: NavController) { }
  
  ngOnInit() {
    
    database().ref('users/'+auth().currentUser.uid).once('value',data=>{
      this.user.name=data.val().name
      this.user.picture=data.val().picture
    })
  }
  back(){
    this.nav.pop()
  }
  signOut(){
    auth().signOut().then(()=>{
      this.router.navigate(['login'], {replaceUrl: true})
    });
  }


  imagectype;
  imagec;
  base64img;
  fileChange(event) {

    if (event.target.files && event.target.files[0] && event.target.files[0].size < (10485768)) {
      this.imagectype = event.target.files[0].type;
      EXIF.getData(event.target.files[0], () => {
        console.log(event.target.files[0].exifdata.Orientation);
        var orientation = EXIF.getTag(this, "Orientation");
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
          console.log(orientation)
          if (event.target.files[0].exifdata.Orientation) {
            console.log(event.target.files[0].exifdata.Orientation)
            if (event.target.files[0].exifdata.Orientation > 4) {
              can.width = height; can.style.width = styleHeight;
              can.height = width; can.style.height = styleWidth;
            }
            switch (event.target.files[0].exifdata.Orientation) {
              case 2: ctx.translate(width, 0); ctx.scale(-1, 1); break;
              case 3: ctx.translate(width, height); ctx.rotate(Math.PI); break;
              case 4: ctx.translate(0, height); ctx.scale(1, -1); break;
              case 5: ctx.rotate(0.5 * Math.PI); ctx.scale(1, -1); break;
              case 6: ctx.rotate(0.5 * Math.PI); ctx.translate(0, -height); break;
              case 7: ctx.rotate(0.5 * Math.PI); ctx.translate(width, -height); ctx.scale(-1, 1); break;
              case 8: ctx.rotate(-0.5 * Math.PI); ctx.translate(-width, 0); break;
            }
          }

          ctx.drawImage(thisImage, 0, 0, iwScaled, ihScaled);
          ctx.restore();

          this.imagec = can.toDataURL();


          let imgggg = this.imagec.replace(';base64,', "thisisathingtoreplace;")

          let imgarr = imgggg.split("thisisathingtoreplace;")
          this.base64img = imgarr[1]
          event.target.value = ''
          


          //console.log(this.imagec)
          this.upload()
        }
        thisImage.src = URL.createObjectURL(event.target.files[0]);
      });
    } else {
      alert("Your Current Image Too Large, " + event.target.files[0].size / (10241024) + "MB! (Please choose file lesser than 8MB)")
    }
  }

  upload() {
   
      let date = new Date()
      storage().ref('users/' + auth().currentUser.uid + '.' + this.imagectype.replace('image/', '')).putString(this.imagec, 'data_url').then((a) => {
        a.ref.getDownloadURL().then(aa => {
         

          database().ref('users/'+auth().currentUser.uid+'/picture').set(aa).then((a)=>{
            alert('Posted')
            this.nav.pop();
          })
          console.log(aa)
        })
  
      })

    
   
    
  }
}
