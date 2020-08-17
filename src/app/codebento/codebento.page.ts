import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-codebento',
  templateUrl: './codebento.page.html',
  styleUrls: ['./codebento.page.scss'],
})
export class CodebentoPage implements OnInit {

  constructor( public route:ActivatedRoute) { }
  codeTs=""
  codeHtml=""
  codeCss=""
  downloadlink=""
  ngOnInit() {
    let lesson=this.route.snapshot.paramMap.get('lesson')
    // database().ref('posts/').once('value',data=>{
    //   console.table(data.val())
    // })
    database().ref('/code/'+lesson+'/ts').on("value",data=>{
      this.codeTs=data.val();
    })

    database().ref('/code/'+lesson+'/html').on("value",data=>{
      this.codeHtml=data.val();
    })

    database().ref('/code/'+lesson+'/css').on("value",data=>{
      this.codeCss=data.val();
    })
    

    database().ref('/code/'+lesson+'/downloadlink').on("value",data=>{
      this.downloadlink=data.val();
    })
  }

}
