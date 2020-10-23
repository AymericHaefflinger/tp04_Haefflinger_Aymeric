import { Component, Input } from "@angular/core";
import { from, of, interval } from "rxjs";
import { filter } from "rxjs/operators";
import { HttpServiceService } from "./http-service.service";
import { Article } from "./article";
import { Store, Select } from "@ngxs/store";
import { RemoveArticle } from "./article.action";
import { ArticleState } from "./article.state";
import { Observable } from "rxjs";

@Component({
  selector: "panier",
  template: `
    <h4>Votre Panier</h4>
    <ul
      class="collection with-header"
      *ngFor="let item of (articlePanier$ | async)"
    >
      <li class="collection-item avatar">
        <img src="{{ item.img }}" alt="" class="circle" />
        <span class="title">{{ item.nom }}</span>
        <p>
          {{ item.prix }}
        </p>
        <a
          class="btn btn-primary secondary-content"
          (click)="removeArticle(item)"
          ><i class="material-icons">Enlever du panier</i></a
        >
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
export class PanierComponent {
  articlePanier$: Observable<Article[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.articlePanier$ = this.store.select(ArticleState.getArticles);
  }

  removeArticle(a: Article) {
    this.store.dispatch(new RemoveArticle(a)).subscribe();
  }
}
