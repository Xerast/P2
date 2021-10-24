import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { NewPostButtonComponent } from './components/new-post-button/new-post-button.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { CommentComponent } from './components/comment/comment.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import { HttpModule } from '@angular/http';
// import { MyserviceService } from './myservice.service';
// import { NewCmpComponent } from './new-cmp/new-cmp.component';
// import { ChangeTextDirective } from './change-text.directive';
// import { SqrtPipe } from './app.sqrt';

const routes: Routes = [
  {path: 'new-post-button', component: NewPostButtonComponent},
  {path: '', redirectTo: 'new-post-button', pathMatch: 'full'},
  {path: 'post-form', component: PostFormComponent},
  {path: 'post-form', redirectTo: 'post-form', pathMatch: 'full'},
  {path: 'post', component: PostComponent},
  {path: 'post', redirectTo: 'post', pathMatch: 'full'},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'register', redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    // SqrtPipe,
    AppComponent,
    PostComponent,
    NewPostButtonComponent,
    PostFormComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    CommentComponent,
    RegistrationFormComponent,
    RestaurantsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
