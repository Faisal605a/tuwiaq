import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfCoursesComponent } from './list-of-courses/list-of-courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfCoursesComponent,
    NotFoundComponent,
    CourseItemComponent,
    EditCourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
