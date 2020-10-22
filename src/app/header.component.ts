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
  selector: "header",
  template: `
    <nav>
      <div class="nav-wrapper teal lighten-2">
        <a href="#" class="brand-logo">Nos jeux</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#.html"
              >Votre Panier :
              {{ (articlePanier$ | async).length }} article(s)</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <produit></produit>
    <panier></panier>
  `,

  styles: [
    `
      body {
        font-family: Lato;
      }
      a {
        margin-left: 20px;
        margin-right: 20px;
      }
    `
  ]
})
export class HeaderComponent {
  articlePanier$: Observable<Article[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.articlePanier$ = this.store.select(ArticleState.getArticles);
  }
}
