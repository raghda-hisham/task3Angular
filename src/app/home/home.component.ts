import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public sort="";
    searchName:string="";
    listOfImages:any=[];
    data:any=[];

  constructor(public _service:MovieServiceService) {
      this._service.find().subscribe((res)=>{
        this.data=res.results;
        // console.log(this.data);

    })}
  ngOnInit(): void {


  }

}
