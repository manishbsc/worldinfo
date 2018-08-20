import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router, ActivationStart,NavigationEnd} from "@angular/router";
import{Location} from '@angular/common';
import { HttpserviceService } from '../httpservice.service';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers:[Location]
})
export class CountryComponent implements OnInit {
  public countryall:any=[];
  p: number = 1;
  public isFilterDisplayCurr=false;
  public isFilterDisplayLan=false;
  public loading=false;

  constructor(private _route:ActivatedRoute,private router:Router,private countryService:HttpserviceService,private location:Location) { 
    console.log("coutry alll constrcutor");
    this.loading=true;
  }
  ngOnInit() {
//start to reload the page
this.router.routeReuseStrategy.shouldReuseRoute = function(){
    return false;
};

this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
    }
});
//end to reload the page

    console.log("ngonoit country all view");
    //getting blog id from route after clicking view in home.
    let Continent=this._route.snapshot.paramMap.get('count');
    console.log(Continent);
    if(Continent.length==3){this.isFilterDisplayCurr=true;}
    if(Continent.length==2){this.isFilterDisplayLan=true;}
    this.countryall=this.countryService.countryAllView(Continent).subscribe(
      data =>{
        console.log("logging data");
      
        this.countryall=data;
        console.log(this.countryall);
        this.loading=false;
      },
      error=>{
        console.log("some error has occured");
        console.log(error.errorMessage);
        this.loading=false;
      }
    )
    console.log(this.countryall);
    }
    goBackToPreviousPage(): any {

      this.location.back();
    
    } 
  }

