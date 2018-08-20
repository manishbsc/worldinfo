import { Component,OnInit } from '@angular/core';
import{ActivatedRoute,Router} from "@angular/router";
import{Location} from '@angular/common';
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  public viewCurrency:any=[];
  public viewLanguage:any=[];
  public selected;
  searchValue: string;
  public buton(value):any{
    console.log("clicked")
    console.log(value);
    setTimeout(()=>{
      this.router.navigate(['/country',value]);
    },1000)

  }
  constructor(private _route:ActivatedRoute,private router:Router,private countryService:HttpserviceService,private location:Location) {
    console.log("appcomponent constrcutor");
   }
  ngOnInit() {
    
    this.viewCurrency=this.countryService.filterCurrency().subscribe(
      data =>{
        console.log("logging data");
        this.viewCurrency=data;
        console.log(this.viewCurrency);
        console.log(this.viewCurrency[0].currencies[0].name);
        console.log(this.selected);

      },
      error=>{
        console.log("some error has occured");
        console.log(error.errorMessage);
        if(error.status==404)
        alert("Enter full name of country correctly")
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)

      }
    )

    this.viewLanguage=this.countryService.filterLanguage().subscribe(
      data =>{
        console.log("logging data");
        this.viewLanguage=data;
        console.log(this.viewLanguage);
        console.log(this.viewLanguage[0]);
        console.log(this.viewLanguage[0].languages[0].name);
      },
      error=>{
        console.log("some error has occured");
        console.log(error.errorMessage);
        if(error.status==404)
        alert("Enter full name of country correctly")
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      
      }
    ) 
  }
}
