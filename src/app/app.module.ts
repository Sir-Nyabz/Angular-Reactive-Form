import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    CourseListComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
