import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { course } from '../Courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  @Input() currentCourse : course = {
    name: '',
    image:
      '',
    instructor: '',
    place: '',
    date: '',
    time: '',
    telegram: '',
    gitHub: '',
    whatsapp: '',
    description: '',
  }  ;
  id : number =0;


  constructor(
    private courseService : CoursesService,
    private route : ActivatedRoute,
    private router : Router) { }


  ngOnInit(): void {
    this.route.params
     .subscribe(
       (params : Params)=> {
         this.id = +params['id'];
         this.currentCourse = this.courseService.getRecipe(this.id);
       }
     )
  }
  recipeNameing( name : string){

  }

  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route})


  }

  onDelete(){
    this.courseService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
