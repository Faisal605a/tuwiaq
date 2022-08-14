import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { course } from '../Courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  courseF: FormGroup = {} as FormGroup;
  id: number = 0;
  editMode = false;

  constructor(
    private couresService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
  console.log(this.courseF);

    if (this.editMode) {
      this.couresService.updateRecipe(this.id, this.courseF.value);
    } else {
      this.couresService.addRecipe(this.courseF.value);
    }
    this.onFinsh();
  }

  onFinsh() {
    this.router.navigate(['../'], { relativeTo: this.route });
    //this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let Course = {
      name: '',
      date: '',
      time: '',
      place: '',
      instructor: '',
      whatsapp: '',
      telegram: '',
      gitHub: '',
      image: '',
      description: '',
    };
    if (this.editMode) {
      Course = this.couresService.getRecipe(this.id);
      this.courseF = new FormGroup({
        name: new FormControl(Course.name, Validators.required),
        date: new FormControl(Course.date, Validators.required),
        time: new FormControl(Course.time, Validators.required),
        place: new FormControl(Course.place, Validators.required),
        instructor: new FormControl(Course.instructor, Validators.required),
        whatsapp: new FormControl(Course.whatsapp, Validators.required),
        telegram: new FormControl(Course.telegram, Validators.required),
        gitHub: new FormControl(Course.gitHub, Validators.required),
        image: new FormControl(Course.image, Validators.required),
        description: new FormControl(Course.description, Validators.required),
      });

      return;
      }

    else {
      this.courseF = new FormGroup({
        name: new FormControl(Course.name, Validators.required),
        date: new FormControl(Course.date, Validators.required),
        time: new FormControl(Course.time, Validators.required),
        place: new FormControl(Course.place, Validators.required),
        instructor: new FormControl(Course.instructor, Validators.required),
        whatsapp: new FormControl(Course.whatsapp, Validators.required),
        telegram: new FormControl(Course.telegram, Validators.required),
        gitHub: new FormControl(Course.gitHub, Validators.required),
        image: new FormControl(Course.image, Validators.required),
        description: new FormControl(Course.description, Validators.required),
      });
    }
  }
}
