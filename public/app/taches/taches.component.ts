import { Component, OnInit } from '@angular/core';
import { Tache } from '../model/Tache.model';
import { TachesService } from '../services/taches.service';

@Component({
  moduleId: module.id,
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})

export class TachesComponent implements OnInit {

	taches: Tache[];

  constructor(private tachesService: TachesService) { }

  ngOnInit() {
  	this.taches = [];

	/***  GET  ***/
  	this.tachesService.getAllTaches().subscribe(taches => {
  		this.taches = taches;
  	});
  }


 /****   CREATE   *****/
  addTache(event, tacheContenu){
    var result;
    var newTache = {
      texte: tacheContenu.value,
    };

    result = this.tachesService.saveTache(newTache);
    result.subscribe(newTache => {
      this.taches.push(newTache);
      tacheContenu.value = "";    
    });
  }

/*** DELETE  ***/
  deleteTache(tache){
    var taches = this.taches;
    this.tachesService.deleteTache(tache._id)
      .subscribe(data => {
        if(data.n == 1){
          for(var i =0; i < taches.length; i++){
            if(taches[i]._id == tache._id){
              taches.splice(i, 1);
            }
          };
        }
      });
  }


/****  Active le mode edit   ****/
  editMode(tache, state){
    if(state){
      tache.editForm = state;
    }else{
      delete tache.editForm;
    }
  }

/*** PUT ***/
  updateTacheTexte(event, tache){
    if(event.which === 13){
      tache.texte = event.target.value;
        var _tache = {
          _id : tache._id,
          texte: tache.texte
        };

        this.tachesService.updateTache(_tache)
        .subscribe(data => {
          this.editMode(tache, false);
        });
      } 
  }



}
