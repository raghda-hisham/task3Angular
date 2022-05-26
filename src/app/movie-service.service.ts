import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { find, observable, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
    sort:string='top_rated';
    id2:any={};
  constructor(public _Http:HttpClient , public _activated:ActivatedRoute) { }
  find():Observable<any>
  {
    return this._Http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b38d1324d79127ba86f8309e541bffd4`)
  }
  getOne(id:any){
    return this._Http.get(`https://api.themoviedb.org/3/movie/${{id}}?api_key=b38d1324d79127ba86f8309e541bffd4`)
  }

}
