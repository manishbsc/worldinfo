import { Injectable } from '@angular/core';
import { Observable,throwError} from "rxjs";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(public _http:HttpClient) { }


  public baseUrl='';

  errorHandler(error:HttpErrorResponse){
    console.log("handle error");
    console.log(error.message);
    return Observable.throw(error.message);
  }

  public countryAllView(countrydata):any{
    if(countrydata=="Asia"){
    let myresponse=this._http.get(`https://restcountries.eu/rest/v2/region/asia?fields=name;capital;currencies;region;nativeName;flag`);
    return myresponse;
    }

    else if(countrydata=="Africa"){
      let myresponse=this._http.get(`https://restcountries.eu/rest/v2/region/africa?fields=name;capital;currencies;region;nativeName;flag`);
      return myresponse;
      }
      
      else if(countrydata=="Europe"){
        let myresponse=this._http.get(`https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies;region;nativeName;flag`);
        return myresponse;
        }

        else if(countrydata=="America"){
          let myresponse=this._http.get(`https://restcountries.eu/rest/v2/region/america?fields=name;capital;currencies;region;nativeName;flag`);
          return myresponse;
          }

          else if(countrydata=="Oceania"){
            let myresponse=this._http.get(`https://restcountries.eu/rest/v2/region/oceania?fields=name;capital;currencies;region;nativeName;flag`);
            return myresponse;
            }
            else{
              if(countrydata.length==3){
                console.log("inside currency");
              let myresponse=this._http.get(`https://restcountries.eu/rest/v2/currency/${countrydata}`);
            return myresponse;
              }
              else{
                console.log("inside language");
                let myresponse=this._http.get(`https://restcountries.eu/rest/v2/lang/${countrydata}`);
            return myresponse;
              }
            }
  
   
  }
  public countryvie(countrydata):any{
    console.log("inside countryview");  

    console.log(`https://restcountries.eu/rest/v2/name/${countrydata}?fullText=true`);
    let myresponse=this._http.get(`https://restcountries.eu/rest/v2/name/${countrydata}?fullText=true`);
    return myresponse;
  }
  public filterCurrency():any{
    console.log("inside filter"); 
    let myresponse=this._http.get(`https://restcountries.eu/rest/v2?fields=currencies`);
    return myresponse;
    }
    public filterLanguage():any{
      console.log("inside language");
      let myresponse=this._http.get(`https://restcountries.eu/rest/v2?fields=languages`);
      return myresponse;
      }
}
