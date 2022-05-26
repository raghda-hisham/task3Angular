import { Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Select } from './optionsMovies'
import { observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public sort="";
    faFav:boolean=false;
    listOfImages:any=[];
    data:any=[];
    movies:string='';
    select:Select[] |any;
    selectedVal:any;
    modifedtext:any="top_rated";
    favMovies:Array<any>=[];
    favMovie:Array<any>=[];

  constructor(public _service:MovieServiceService) {
  }
  ngOnInit(): void {

  this.select=[
    {id:1,name:"top_rated"},
    {id:2 , name:"upcoming"},
    {id:3 , name:"popular"}
  ]
   this.getData();

  }

  getData(){
    // this.onSelectedValue;
    this._service.find(this.modifedtext).subscribe((res)=>{
      this.data=res.results;
    })
  }
  onSelectedValue(val:any){
    this.modifedtext= val;
    this.getData();
  }
  onFavClick(obj:object,id:number):void{
    this.data.filter((item:any)=>{
      if(item.id === id){

        this.faFav = !this.faFav;
         this.favMovie.push(JSON.stringify(obj));
         localStorage.setItem('fav',  JSON.stringify(this.favMovies));
      }
    })
  }


}

