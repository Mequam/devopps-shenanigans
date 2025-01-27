import { Component, Input } from '@angular/core';
import {QuizComponent} from '../quiz/quiz.component';
import { QuizFingerprint } from '../../models/quiz_fingerprint';
import {QuizService} from '../../services/quiz.service';
import {NgFor, NgIf} from '@angular/common';

/*
 * this component takes a list of quiz fingerprints and displays them
 * on the ui as links to be clicked on and navigated to
 * */

@Component({
  selector: 'app-quiz-list',
  imports: [QuizComponent,NgFor,NgIf],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css'
})
export class QuizListComponent {
  constructor (private quiz_service : QuizService) {}

  @Input() quiz_fingerprints : [QuizFingerprint] | null = null;
  public max_string_length : number = 45

  getLimitedName(name : string) : string {
    if (!name) return "unamed quiz";
    if (name.length > this.max_string_length) {
      return name.slice(0,this.max_string_length) + "...";
    }
    return name;
  }

  ngOnInit(): void {
    if (!this.quiz_fingerprints)
      this.quiz_service.list_quizes().subscribe(value=>{
        this.quiz_fingerprints = value;
        this.quiz_fingerprints.forEach(v=>{
        })
      });
  }
}
