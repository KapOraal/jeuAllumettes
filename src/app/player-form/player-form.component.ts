import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Player} from '../player';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  playerForm: FormGroup;
  submitted: boolean = false;
  
  constructor(private _service: GameService) { }
 
  ngOnInit() {
    this.playerForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  get name() {
    return this.playerForm.get("name");
  }

  submitPlayer () {
    // Call service Game to add player
    let playerAdded: Player = {
      nbVictory: 0,
      name: this.playerForm.get("name").value
    };

    this._service.addPlayer(playerAdded);
    this.submitted = true;
  }
}
