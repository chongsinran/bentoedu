import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-class-home',
  templateUrl: './class-home.page.html',
  styleUrls: ['./class-home.page.scss'],
})
export class ClassHomePage implements OnInit {

  constructor(public navCtrl: NavController, public http: HttpClient) { }
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAxYzQ3YjRmZjM3Y2E4NjljYTBkZTlhZDNiMDQ4MDVlZmZjNzFmZDkzMWM4YTg0OTgyOGY3ZTFjMzkwMWYyZTg0NWU0MGU5ODlmNWJiNWViIn0.eyJhdWQiOiIxIiwianRpIjoiMDFjNDdiNGZmMzdjYTg2OWNhMGRlOWFkM2IwNDgwNWVmZmM3MWZkOTMxYzhhODQ5ODI4ZjdlMWMzOTAxZjJlODQ1ZTQwZTk4OWY1YmI1ZWIiLCJpYXQiOjE1OTQyNzE3NTYsIm5iZiI6MTU5NDI3MTc1NiwiZXhwIjoxNjI1ODA3NzU2LCJzdWIiOiIxNjE4NSIsInNjb3BlcyI6W119.XRuWGgKUx4phS2RkUwrwz5QGJJt6sfwOO3wdwkWRIDPJmdLKiA2YWyawLuGhZNpUbWsnYirSQ7uXkgERNWXSiYm1zGOkftQB4OZtVLrcmU5uWo5YmSx8zaBGus0W9OW0xN2KrH7pMHHvj5fk3aYwZ-tKePv4x_-ZphkLnry1aNL3SuNuJqzvGD-toUj9P4W6IGD8iC6f8uqsfdYOQvfhUh8SHJ6quQ0ZnDkT7GKY674Pfu0uEoGCXLSk8EgKEC7gvuSqBrI9-0yFrJR3HMkI29CpYA9qRDYDncbp0_g7ure_kYeRgdw5amx9I0kMSSsLC9KzgLKxT0bbFLPjaVPVi5ps5mRRe8cuP-oqxla0TiepxN3zY4SFpQw6k21eRETZmiJNf9-dqQiEqsGtKdBMtZg7WfKQPIMXT4BQhA9VecQnGei0Ilew4o8d6GDe7tA3aWRM_tNOUX8cq_r3Lvcj8TM_zOlscmsQBTsN5n5f1xH993NH-KmfFqD0xaqX7LneRs0WdQwbTmQYvkTfit9DW32u3ca7NwKZdUlwaEXjsTecLTAkyS6U8Tk_1YqyZyah-tXqc6ZcfSHSRlzig6AbWD_Chi1aesT8mA2PUfZtzYFJFx7tdl6-T25GXoKudfCL4f1Hi97-T4uFVVEPmQRHj5ZYiVIGQOSwmQfPBoZaLK4"
  ngOnInit() {

    // let body= {
    //   'email': 'vimigo+fnb@vimigoapp.com',
    //   'password': 'Vfnb2020',
    //   'client_id': '1',
    //   'client_secret': 'zHnvPCu0JEsGepxcnhNtu5fqBN9lxNPGDYJLQMGs',
    //   'grant_type': 'password'
    // }
    // const headers = new HttpHeaders({
    //   'Authorization-Key': 'vimigoFnB',
    //   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFiMGM1ZmJkMDFmYjExZjljNWRiZmIyNzVlNzc3Yzg0MzAxY2E5NjM2ZWYxZjMwZjk4ZmY4OTI0YzAyMDZkNGViMTBiOTM4NjhlMTAyYWY4In0.eyJhdWQiOiIxIiwianRpIjoiMWIwYzVmYmQwMWZiMTFmOWM1ZGJmYjI3NWU3NzdjODQzMDFjYTk2MzZlZjFmMzBmOThmZjg5MjRjMDIwNmQ0ZWIxMGI5Mzg2OGUxMDJhZjgiLCJpYXQiOjE1OTQyMTEwODcsIm5iZiI6MTU5NDIxMTA4NywiZXhwIjoxNjI1NzQ3MDg3LCJzdWIiOiIxNjE4NSIsInNjb3BlcyI6W119.adtFqWnLM1M1gVd05pmHIvilPpnzy1MyGjhiVt3hRpETPltHfXGmUY6k2RY0kPYCc3SWDfrAzYnzFw6kE9ZbSvBiF6gvY4n5nrvhZkHVMLMWDxR9tuAyJv0v22Cnp2MDV3VxGBzYqWKOQytIGyZWw0un2wGqGUyhfiqMmY2MZg0yvDoUqPFp6RUFYzwhka0ljBGD-pEUC8rRFp55sodagAZA4t17hlclWBPFk9jIfvc2off-l4xbcGsw12JHeMdvQG8-ssKB9xFs7_bpd2xa5FC5A-qvtGSBUb06VH7cAYqoAgXqHEAt-nEH8bgkat2RFSA7fz1Yp8wvOHHnhnIO9EAUFQk_BjEVT1VfHDwD3q3X4UnxlwfBuTGmKssf_EuHkTN4mw7OQiQZaE-Bne9kVYIsjNqsuQ5AM0DoX1qyK0KApLP0hpeCIqlZxIU7RmvShN1bVERJ8fZGAMnFa8k5twijdRQXPirM_XBvOUCqYor7kEmeK9nDTmg5yY3pBqEJlPxfLFGXdslbfazCJhIt3kB4iWvclxLR1ZPXtUIkJukPSVO6YrsHQFjK4IgjY2Jrdh2Q_aa5Z3X8RLI7gtPkjw4p6yfXLFucBfdvs6xYU8Vy9eLII7-3h0UoIhqkBbfMZfKcCS-P41J0IvfttYtvMVMi0sPr5xmHqu7dG1TOVNI'
    // });
    // this.http.post('https://cors-anywhere.herokuapp.com/https://stg-ap-southeast.vimigoapp.com/api/v2/leaderboard/advance?module=goal&monthYear=2020-06&department=0',body, { headers: headers }).subscribe(a => {
    // console.log(a) 
    // console.table(a['response'].result)
    // }, e => {
    //   console.log(e)
    // })
  }


  stringSeperator

  jumpToApp() {
    this.navCtrl.navigateRoot('login')
  }

  lesson(x) {
    this.navCtrl.navigateForward('codebento/' + x)
  }
}
