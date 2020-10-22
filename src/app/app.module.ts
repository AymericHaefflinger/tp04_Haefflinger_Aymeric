import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProduitComponent } from "./produit.component";
import { HeaderComponent } from "./header.component";
import { HttpServiceService } from "./http-service.service";
import { HttpClientModule } from "@angular/common/http";

import { NgxsModule } from "@ngxs/store";
import { ArticleState } from "./article.state";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([ArticleState])
  ],
  declarations: [AppComponent, ProduitComponent, HeaderComponent],
  bootstrap: [AppComponent],
  providers: [HttpServiceService]
})
export class AppModule {}
