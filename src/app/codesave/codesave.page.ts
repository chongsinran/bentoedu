import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';

@Component({
  selector: 'app-codesave',
  templateUrl: './codesave.page.html',
  styleUrls: ['./codesave.page.scss'],
})
export class CodesavePage implements OnInit {

  constructor() { }
  light=true;
  codeTs=""
  codeHtml=""
  codeCss=""
  ngOnInit() {
    database().ref('code/ts').on("value",data=>{
      this.codeTs=data.val();
    })

    database().ref('code/html').on("value",data=>{
      this.codeHtml=data.val();
    })

    database().ref('code/css').on("value",data=>{
      this.codeCss=data.val();
    })
    
  }

  save(){
    
      database().ref('code/'+this.lesson).update({ts:this.codeTs,html:this.codeHtml,css:this.codeCss}).then(()=>{
        alert("done")
      })
  
    
      
    
  
  }
  lesson="lesson1"
  log(){
    console.log(this.lesson)
  }
}
