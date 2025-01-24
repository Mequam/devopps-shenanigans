import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Quiz } from "../models/quiz";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { QuizFingerprint } from "../models/quiz_fingerprint";

@Injectable({ providedIn: 'root'})
export class QuizService {

  private readonly GET_URL : string = "quiz";
  private readonly POST_URL : string = "vote";

  constructor(
    protected http: HttpClient
  ) {
  }

  get_quiz(quiz_id : number) : Observable<Quiz> {
    return this.http.get<Quiz>(
      `http://${environment.api_addr}/${this.GET_URL}/${quiz_id}`
    );
  }

  list_quizes() : Observable<[QuizFingerprint]> {
    return this.http.get<[Quiz]>(
      `http://${environment.api_addr}/${this.GET_URL}/all`
    );
  }

  vote_quiz(quiz_id : number, option : string) {
    return this.http.post(
          `http://${environment.api_addr}/${this.POST_URL}`,
          {
            quiz_id: String(quiz_id),
            option:option
          }
    )
  }
}
