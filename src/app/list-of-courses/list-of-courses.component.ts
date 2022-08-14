import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { course } from '../Courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css'],
})
export class ListOfCoursesComponent implements OnInit, OnDestroy {
  Courses: course[] = [];
  sub: Subscription = new Subscription();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {

    this.sub = this.coursesService.courseChanged.subscribe(
      (Courses: course[]) => {
        this.Courses = Courses;
      }
    );
    this.Courses = this.coursesService.getRecipes();
    console.log(this.Courses)
  }

  OnNewCourse() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  print() {
    this.coursesService.print();
    console.log(this.Courses);
  }
}
