import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { Genre } from '../model/genre.model';
import { UpdateGenre } from '../update-genre/update-genre';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-genres',
  imports: [CommonModule, UpdateGenre],
  templateUrl: './liste-genres.html',
  styles: ``
})
export class ListeGenres implements OnInit {

  genres!: Genre[];
  updatedGen: Genre = { idGen: 0, nomGen: "" }; 
  ajout: boolean = true;

  constructor(private parfumService: ParfumService) {}

  ngOnInit(): void {
    this.genres = this.parfumService.listeGenres();
    console.log(this.genres);
  }

  chargerGenres() {
    this.genres = this.parfumService.listeGenres();
    console.log(this.genres);
  }

  // -----------------------
  //  ID AUTO-INCREMENT
  // -----------------------
  getNewId(): number {
    if (this.genres.length === 0) return 1;
    const maxId = Math.max(...this.genres.map(g => g.idGen));
    return maxId + 1;
  }

  // -----------------------
  //  UPDATE BUTTON
  // -----------------------
  updateGen(gen: Genre) {
    this.updatedGen = { ...gen };  // *** important ***
    this.ajout = false;
  }

  // -----------------------
  //  SAVE (ADD OR UPDATE)
  // -----------------------
  genreUpdated(gen: Genre) {
    if (this.ajout) {
      gen.idGen = this.getNewId();
      this.parfumService.ajouterGenre(gen);
    } else {
      this.parfumService.ajouterGenre(gen);
    }

    this.chargerGenres();
    this.ajout = true;

    // IMPORTANT → reset object
    this.updatedGen = { idGen: 0, nomGen: "" };
  }
}
