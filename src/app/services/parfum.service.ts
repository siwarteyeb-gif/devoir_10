
import { Parfum } from '../model/parfum.model';
import { Genre } from '../model/genre.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class ParfumService {
  parfums : Parfum[];
  parfum=new Parfum();
  genres : Genre[];
  genre=new Genre();
  parfumRechercher?:Parfum[];

  constructor(){
   this.genres = [ {idGen : 1, nomGen : "Boisé épicé"},
   {idGen : 2, nomGen : "Floral aromatique"},
  {idGen : 3, nomGen : "Oriental gourmand"},
 {idGen : 4, nomGen : "Aromatique"}, 
]; 

   // console.log("creation du service produit!");
    this.parfums = [
      {idParfum:1,marqueParfum:"Hermès",nomParfum:"Terre d’Hermès",prixParfum:350,contenanceParfum:"50 ml",email: "hermes@parfum.com",genre:{idGen : 1, nomGen : "Boisé épicé"}},
      {idParfum:2, marqueParfum: "Yves Saint Laurent",nomParfum: "Libre",prixParfum: 370,contenanceParfum: "50 ml",email:"libre@ysl.com",genre:{idGen : 2, nomGen : "Floral aromatique"}},
      {idParfum:3,marqueParfum: "Yves Saint Laurent",nomParfum: "Black Opium",prixParfum: 400,contenanceParfum: "50 ml", email:"blackopium@ysl.com",genre:{idGen : 3, nomGen : "Oriental gourmand"}}

    ]; 
  }
  listeParfum():Parfum[]{
    return this.parfums;
  }
  ajouterParfum(par:Parfum){
    this.parfums.push(par);
  }
  supprimerParfum(parf:Parfum){
    const index=this.parfums.indexOf(parf,0);
    if(index>-1){
      this.parfums.splice(index,1);
    }
  }
  consulterParfum(id:number):Parfum{
    return this.parfums.find(p => p.idParfum == id)!;
  }
  updateParfum( parf: Parfum){
      const index = this.parfums.indexOf(parf, 0);
      if (index > -1) {
      this.parfums.splice(index, 1);
      this.parfums.splice(index,0,parf);
   } }
   listeGenres():Genre[] {
return this.genres;
}
consulterGenre(id:number): Genre{
return this.genres.find(cat => cat.idGen == id)!;
}
rechercherParGenre(idGen: number):Parfum[] {
 this.parfumRechercher=[];
  this.parfums.forEach((cur,index)=>{
     if(idGen==cur.genre.idGen){
      console.log("cur"+cur);
       this.parfumRechercher?.push(cur);
    }
  });
  return this.parfumRechercher;
 }
 ajouterGenre(gen: Genre) {
  const index = this.genres.findIndex(gen => gen.idGen === gen.idGen);

  // كان لقيناه (index != -1)
  if (index !== -1) {
    this.genres[index] = gen;   // ⚡ هنا التبديل الصحيح
  }
}
}
