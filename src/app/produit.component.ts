import { Component, Input } from "@angular/core";
import { from, of, interval } from "rxjs";
import { filter } from "rxjs/operators";
import { HttpServiceService } from "./http-service.service";
import { Article } from "./article";
import { Store, Select } from "@ngxs/store";
import { AddArticle } from "./article.action";
import { ArticleState } from "./article.state";
import { Observable } from "rxjs";

@Component({
  selector: "produit",
  template: `
    <input
      #nomArticle
      class="input"
      type="text"
      id="nom"
      name="nom"
      placeholder="Nom du jeu"
    />
    <label for="nom">Nom du jeu</label>

    <button class="btn btn-primary" (click)="searchArticle(nomArticle.value)">
      Rechercher
    </button>

    <div class="folder">
      <div class="carreJeu" *ngFor="let art of Articles">
        <img src="{{ art.img }}" />
        <h4>{{ art.nom }}</h4>
        <p>{{ art.prix }}</p>
        <button class="btn btn-primary" (click)="addArticle(art)">
          Ajouter au panier
        </button>

        <a routerLink="{{ art.id }}" class="btn btn-primary">Détails</a>
      </div>
    </div>
  `,

  styles: [
    `
      body {
        font-family: Lato;
      }
      produit {
        display: flex;
      }
      button {
        width: 100%;
        height: 45px;
        margin-left: 25px !important;
        margin-right: 25px !important;
        margin-top: 30px;
      }
      .input {
        margin-left: 25px !important;
        margin-right: 25px !important;
      }
      label {
        margin-left: 25px;
        width: 100%;
      }
      .carreJeu {
        flex-grow: 1;
        width: 30%;
        margin: auto;
        text-align: center;
        padding: 10px;
        border: 1px solid black;
        margin: 10px;
        margin-top: 25px;
      }
      img {
        width: inherit;
      }
      .carreJeu > button {
        width: 50%;
      }
      .folder {
        display: flex;
      }
    `
  ]
})
export class ProduitComponent {
  @Input() name: string;

  Articles: Article[];
  allArticles: Article[];

  constructor(
    public HttpServiceService: HttpServiceService,
    private store: Store
  ) {}

  getData(): void {
    this.HttpServiceService.getData().subscribe(
      Articles => (this.Articles = Articles)
    );
  }

  getDataInit(): void {
    this.HttpServiceService.getData().subscribe(
      Articles => (this.allArticles = Articles)
    );
    this.HttpServiceService.getData().subscribe(
      Articles => (this.Articles = Articles)
    );
  }

  searchArticle(searchTerm: string) {
    if (searchTerm) {
      let allArticles = from(this.allArticles);
      this.Articles = [];
      let searchResult = allArticles
        .pipe(filter(a => a.nom.includes(searchTerm)))
        .subscribe(Articles => this.Articles.push(Articles));
    } else {
      this.getData();
    }
  }

  ngOnInit() {
    this.getDataInit();
  }

  addArticle(a: Article) {
    this.store.dispatch(new AddArticle(a)).subscribe();
  }
}
