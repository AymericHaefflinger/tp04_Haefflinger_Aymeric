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
    <ul class="collection with-header">
      <li class="collection-item avatar">
        <img src="{{ art.img }}" alt="" class="circle" />
        <span class="title">{{ art.nom }}</span>
        <p>
          {{ art.prix }}
        </p>
      </li>
      <li>Ceci est la vue détaillée</li>
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
  @Input()
  customNom: string;
  @Input()
  customPrix: string;
  @Input()
  customImage: string;

  art: Article;

  ngOnInit() {
    this.art.nom = this.customNom;
    this.art.prix = this.customPrix;
    this.art.img = this.customImage;
  }
}
