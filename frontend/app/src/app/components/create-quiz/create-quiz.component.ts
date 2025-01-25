import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {QuizCreateDto} from '../../models/quiz-create.dto';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent {
  txtQuizName : FormControl = new FormControl('');
  txtQuizDescription : FormControl = new FormControl('');
  txtQuizOption : [FormControl]  | null = null;

  constructor (private quiz_service : QuizService) {}


  /*
   * removes a given option from a quiz option
   * */
  removeQuizOption(option_id : number) {
    if (this.txtQuizOption && this.txtQuizOption[option_id])
    {
      console.log("removing the option");
      this.txtQuizOption.splice(option_id,1);
    }
  }

  /*
   * creates a new option in the quiz
  * */
  createNewOption() {
    if (!this.txtQuizOption) {
      this.txtQuizOption = [new FormControl('')];
      return;
    }
    this.txtQuizOption.push(new FormControl(''));
  }

  /*
   * send the quiz off to the server to be created
   * */
  createQuiz() {
    if (!this.txtQuizOption) return

    let q = new QuizCreateDto(this.txtQuizDescription.value,
                              this.txtQuizName.value,
                              this.txtQuizOption.map(value=>value.value) as [string]);
    this.quiz_service.create_quiz(q).subscribe();
  }
}
