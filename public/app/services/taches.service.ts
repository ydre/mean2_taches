import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TachesService {

  constructor(private http: Http) { }

/** GET ALL ***/
  getAllTaches(){
  	return this.http.get('/api/taches')
  		.map(res => res.json());
  }

/** CREATE ***/
  saveTache(tache){
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post("/api/taches", JSON.stringify(tache), {headers: headers})
  		.map(res => res.json());;
  }

/*** DELETE ***/
  deleteTache(id){
  	return this.http.delete('/api/taches/'+id)
  		.map(res => res.json());
  }

/*** PUT ***/
  updateTache(tache){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put("/api/taches/"+tache._id, JSON.stringify(tache), {headers: headers})
      .map(res => res.json());;
  }

}
