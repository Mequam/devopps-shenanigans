import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuizListComponent} from './components/quiz-list/quiz-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,QuizListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
