import { Component, Input, OnInit } from '@angular/core';
import { course } from '../Courses';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {


  @Input() currentCourse : course = {} as course  ;
  @Input() courseId : number=0 ;
  constructor() { }

  ngOnInit(): void {
  }

}
