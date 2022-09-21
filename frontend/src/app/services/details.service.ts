import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUser, test, user} from '../Models/tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
private apiUrl='http://localhost:3000'
  constructor(private http:HttpClient) {

   }
   create(data:user):Observable<user>{
    return this.http.post(this.apiUrl,data)
   }
   getTutorial():Observable<user[]>{
    return this.http.get<user[]>(this.apiUrl)
   }
   checkUser(data:loginUser):Observable<loginUser>{
    return this.http.post<loginUser>(`${this.apiUrl}/login`,data)
   }
   getUser():Observable<test[]>{
    return this.http.get<test[]>(`${this.apiUrl}/feed`)
   }
   
}
