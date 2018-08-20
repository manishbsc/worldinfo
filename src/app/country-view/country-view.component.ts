import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from "@angular/router";
import{Location} from '@angular/common';
import { HttpserviceService } from '../httpservice.service';


@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css'],
  providers:[Location]
})
export class CountryViewComponent implements OnInit {
  public countryview:any=[];
  public s1="";
  public trans=[];
  public loading = false;

  constructor(private _route:ActivatedRoute,private router:Router,private countryService:HttpserviceService,private location:Location) {
    console.log("coutry alll constrcutor");
    this.loading = true;
   }
 
  ngOnInit() {
    console.log("ngonoit country all view");
    //getting blog id from route after clicking view in home.
    let countryview=this._route.snapshot.paramMap.get('countryName');
    console.log(countryview);
    this.countryview=this.countryService.countryvie(countryview).subscribe(
      data =>{
        console.log("logging data");
        this.countryview=data;
        console.log(this.countryview);
        console.log(this.countryview[0].name)
        this.s1=this.countryview[0].flag;
        console.log(this.countryview[0].translations);
        console.log(this.countryview[0].borders);
        console.log(this.countryview[0].languages);
        for(let x in this.countryview[0].translations)
        {
          this.trans.push(this.countryview[0].translations[x]);
        }
        console.log(this.trans);
        this.loading = false;
      },
      error=>{
        console.log("some error has occured");
        console.log(error.errorMessage);
        if(error.status==404)
        alert("Enter full name of country correctly")
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
        this.loading = false;
      }
    )
    console.log(this.countryview);
    }
    goBackToPreviousPage(): any {

      this.location.back();
    
    }
  

}
