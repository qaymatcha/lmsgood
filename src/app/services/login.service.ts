import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn:'root'
})
export class LoginService {
  constructor(private http: HttpClient) {

  }

  login(identificationString:string, imageString:string){
   return this.http.post(`${environment.apiUrl}login`,{identificationString,image:imageString})
  }
}
