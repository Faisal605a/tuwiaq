import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ListOfCoursesComponent } from './list-of-courses/list-of-courses.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfCoursesComponent
  },
  // {
  //   path: 'course',
  //   component: CourseItemComponent
  // },
  {
    path: ':id/detiles',
    component: CourseDetailsComponent
  },
  {
    path: 'new',
    component: EditCourseComponent
  },
  {
    path: ':id',
    component: EditCourseComponent
  },

  {
    path: "**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
