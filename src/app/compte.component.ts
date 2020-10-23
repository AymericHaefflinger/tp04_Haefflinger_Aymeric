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
  selector: "compte",
  template: `
    <h4>Votre Compte</h4>
    <ul class="collection with-header">
      <li>
        Nom : NomTest
      </li>
      <li>Prénom : PrénomTest</li>
      <li>
        Mail : MailTest@test.com
      </li>
      <li>Cette page est laide et non-finie par manque de temps</li>
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
export class CompteComponent {}
