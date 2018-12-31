import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { SignupFormComponent } from './sign-up-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NewCourseComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
