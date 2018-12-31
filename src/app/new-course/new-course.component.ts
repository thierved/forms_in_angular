import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent {

  courses = [];

  categories = [
    { id: 1, name: 'Developement'},
    { id: 2, name: 'Art'},
    { id: 3, name: 'Languages'}
  ];

  submit(course) {
    this.courses.push(course);
    console.log(this.courses);
  }
}
