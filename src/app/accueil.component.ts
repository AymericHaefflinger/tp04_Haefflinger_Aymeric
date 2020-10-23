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
  selector: "accueil",
  template: `
    <h4>Bienvenue sur notre magasin en ligne</h4>
  `,

  styles: [
    `
      body {
        font-family: Lato;
      }
      h4 {
        text-align: center;
      }
    `
  ]
})
export class AccueilComponent {}
