import { Component, Input } from "@angular/core";
import { from, of, interval } from "rxjs";
import { filter } from "rxjs/operators";
import { HttpServiceService } from "./http-service.service";
import { Article } from "./article";
import { Store, Select } from "@ngxs/store";
import { RemoveArticle } from "./article.action";
import { ArticleState } from "./article.state";
import { Observable } from "rxjs";
import { AddArticle } from "./article.action";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "detail",
  template: `
    <h4>Votre Panier</h4>
    <ul class="collection with-header">
      <li class="collection-item avatar">
        <img src="{{ art.img }}" alt="" class="circle" />
        <span class="title">{{ art.nom }}</span>
        <p>
          {{ art.prix }}
        </p>
      </li>
      <li>Ceci est la vue détaillée</li>
      <li>
        <button class="btn btn-primary" (click)="addArticle(art)">
          Ajouter au panier
        </button>
      </li>
    </ul>
  `,

  styles: [
    `
      body {
        font-family: Lato;
      }
      h4 {
        text-align: center;
      }
      ul {
        width: 50%;
        text-align: center;
        margin: auto;
      }
    `
  ]
})
export class DetailComponent {
  allArt: Article[];
  art: Article;

  constructor(
    public HttpServiceService: HttpServiceService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  getData(): void {
    this.HttpServiceService.getData().subscribe(Articles =>
      Articles.forEach((myObject, index) => {
        if (myObject.id == this.route.snapshot.params.id) {
          this.art = myObject;
        }
      })
    );
  }

  addArticle(a: Article) {
    if (this.art.nom != "") {
      this.store.dispatch(new AddArticle(a)).subscribe();
    }
  }

  ngOnInit() {
    this.getData();
  }
}
