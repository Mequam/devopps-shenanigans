/*
 * this class represents that data that we need when
 * creating a new quiz
 * */
export class QuizCreateDto {
  constructor(
              public description : string,
              public name : string,
              public options : [string]
             ){}
}
