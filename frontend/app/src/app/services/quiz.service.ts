import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Quiz} from "../models/quiz";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({ providedIn: 'root'})
export class QuizService {

  private readonly GET_URL : string = "/quiz";
  constructor(
    protected http: HttpClient
  ) {
  }

  get_quiz(quiz_id : number) : Observable<Quiz> {
    return this.http.get<Quiz>(
      `http://${environment.api_addr}/${this.GET_URL}/${quiz_id}`
    );
  }
}
