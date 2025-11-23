import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre } from '../model/genre.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-genre',
  imports: [FormsModule],

  templateUrl: './update-genre.html',
  styles: ``
})
export class UpdateGenre implements OnInit {
  @Input()
genre! : Genre;
@Output()  
genreUpdated = new EventEmitter<Genre>(); 
@Input() 
ajout!:boolean;
  constructor(){}
  ngOnInit(): void {
console.log("ngOnInit du composant UpdateGenre ",this.genre);
}
saveGenre(){
  this.genreUpdated.emit(this.genre); 

}

}
