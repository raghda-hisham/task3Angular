import { Component, Input, OnInit, Output} from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {faHeart as faNotFav ,faEye as faNotWatched} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() id:number=0;

    public sort="";
    listOfImages:any=[];
    data:any=[];
    movies:any=[
      {id:1,name:"top_rated"},
      {id:2 , name:"upcoming"},
      {id:3 , name:"popular"}
    ];
    moviesCategory:string="top_rated";
    modifedtext:string="";

  constructor(public _service:MovieServiceService) {
  }
  ngOnInit(): void {


  //   this._service.find(this.moviesCategory).subscribe((res)=>{
  //     this.data=res.results;
  // })
  }

  changeFn(e:any){
    this.movies=e.target.value;
    console.log(e.target.value)
  }


}
