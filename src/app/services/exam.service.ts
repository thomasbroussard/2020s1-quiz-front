import { Injectable } from '@angular/core';
import { Answer } from '../datamodel/answer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  url :string ="http://localhost:8080/quiz-rest/rest/exam/answer";

  constructor(private httpClient: HttpClient) { }

  save(answer : Answer){
    this.httpClient.post(this.url, answer).subscribe((data) =>
    console.log(data)
  );
  }


}
