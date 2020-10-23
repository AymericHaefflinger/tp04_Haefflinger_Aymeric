import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProduitComponent } from "./produit.component";
import { HeaderComponent } from "./header.component";
import { PanierComponent } from "./panier.component";
import { AccueilComponent } from "./accueil.component";
import { DetailComponent } from "./detail.component";
import { HttpServiceService } from "./http-service.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";

import { NgxsModule } from "@ngxs/store";
import { ArticleState } from "./article.state";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxsModule.forRoot([ArticleState])
  ],
  declarations: [
    AppComponent,
    ProduitComponent,
    HeaderComponent,
    PanierComponent,
    AccueilComponent,
    DetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpServiceService],
  exports: [AppRoutingModule, HeaderComponent, ProduitComponent]
})
export class AppModule {}
