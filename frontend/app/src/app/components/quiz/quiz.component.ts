import { Component } from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {Quiz} from '../../models/quiz';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  constructor(private quiz_service : QuizService) {}

  quiz_name : string = "";

  ngOnInit(): void {
    this.quiz_service.get_quiz(2).subscribe(data=>{
      this.quiz_name = data.name;
    });
  }

}
