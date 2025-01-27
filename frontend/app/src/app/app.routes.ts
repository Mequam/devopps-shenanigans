import { Routes } from '@angular/router';
import {QuizComponent} from './components/quiz/quiz.component';
import {CreateQuizComponent} from './components/create-quiz/create-quiz.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: 'get/:quiz_id',
    component: QuizComponent
  },
  { path: 'new',
    component: CreateQuizComponent
  },
  {
    path:"landing",
    component: LandingPageComponent
  },
  {
   path:'',
   redirectTo:"landing",
   pathMatch:"full"
  }
];
