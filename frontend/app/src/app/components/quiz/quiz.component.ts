import { Component, Input, input } from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {Quiz} from '../../models/quiz';
import {NgFor, NgIf} from '@angular/common';
import {FormControl, NgModel, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [NgIf,NgFor,ReactiveFormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  constructor(private quiz_service : QuizService) {}

  @Input() quiz : Quiz | null = null;
  @Input() quiz_id : number | null = null;
  vote_display : string = "";
  vote_selection : FormControl = new FormControl();

  ngOnInit(): void {
    console.log("hello from the quiz component");
    if (!this.quiz && this.quiz_id) {
        this.quiz_service.get_quiz(this.quiz_id).subscribe(value=>{
          this.quiz = value;
        })

        console.log("waiting for query to go through!");
      }

    this.vote_selection.valueChanges.subscribe(value=>{
      this.vote_display = this.vote_selection.value;
    })
  }

  onVoteBtn() : void {
    this.quiz_service.vote_quiz(2, this.vote_selection.value).subscribe(data=>{

    });
  }
}
