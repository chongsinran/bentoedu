import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'add-photo',
    loadChildren: () => import('./add-photo/add-photo.module').then( m => m.AddPhotoPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'your-profile/:id',
    loadChildren: () => import('./your-profile/your-profile.module').then( m => m.YourProfilePageModule)
  },
  {
    path: 'codebento/:lesson',
    loadChildren: () => import('./codebento/codebento.module').then( m => m.CodebentoPageModule)
  },
  {
    path: 'codesave',
    loadChildren: () => import('./codesave/codesave.module').then( m => m.CodesavePageModule)
  },
  {
    path: 'class-home',
    loadChildren: () => import('./class-home/class-home.module').then( m => m.ClassHomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
