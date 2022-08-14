import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { course } from './Courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courseChanged = new Subject<course[]>();

  ngOnInit(): void {}

  private courses: course[] = [
    {
      name: 'Angular',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png',
      instructor: 'Fahad',
      place: 'Tuwuiq',
      date: '2022-12-8',
      time: '2-6 pm',
      telegram: 'Angular',
      gitHub: 'https://github.com/f22hd/anglular-2022',
      whatsapp: '055555555',
      description: 'Angular basics and fundamental',
    },
    {
      name: 'Tailwind',
      image:
        'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png',
      instructor: 'Mohammed',
      place: 'Tuwuiq',
      date: '2022-12-8',
      time: '2-6 pm',
      telegram: 'Tailwind',
      gitHub: 'https://github.com/f22hd/anglular-2022',
      whatsapp: '055555555',
      description: 'Tailwind overview of the framework',
    },
    {
      name: 'Java',
      image:
        'https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png',
      instructor: 'Faisal',
      place: 'Tuwuiq',
      date: '2022-12-8',
      time: '2-6 pm',
      telegram: 'Java',
      gitHub: 'https://github.com/f22hd/anglular-2022',
      whatsapp: '055555555',
      description: 'Java fundamentals with calculator project ',
    },
    {
      name: 'Python',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
      instructor: 'Faisal',
      place: 'Tuwuiq',
      date: '2022-12-8',
      time: '2-6 pm',
      telegram: 'Python',
      gitHub: 'https://github.com/f22hd/anglular-2022',
      whatsapp: '055555555',
      description: 'Python basics with circle drawing project',
    },
  ];

  constructor() {}
  print() {
    console.log(this.courses);
  }

  getRecipes() {
    return this.courses.slice();
  }
  getRecipe(index: number) {
    return this.courses[index];
  }

  setRecipes(recipe: course[]) {
    this.courses = recipe;
    this.courseChanged.next(this.courses.slice());
  }

  // addIngerdientToShoppingList(ingerdient: Ingredient[]){
  //  this.shoppingListService.addIngredients(ingerdient);
  // }
  addRecipe(course: course) {
    this.courses.push(course);
    this.courseChanged.next(this.courses.slice());
  }
  updateRecipe(index: number, course: course) {
    this.courses[index] = course;
    this.courseChanged.next(this.courses.slice());
    console.log(this.courses);
  }
  deleteRecipe(index: number) {
    this.courses.splice(index, 1);
    this.courseChanged.next(this.courses.slice());
  }
}
