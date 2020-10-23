import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProduitComponent } from "./produit.component";
import { PanierComponent } from "./panier.component";
import { DetailComponent } from "./detail.component";

const routes: Routes = [
  {
    path: "catalogue",
    component: ProduitComponent
  },

  {
    path: "catalogue/:id",
    component: DetailComponent
  },
  { path: "panier", component: PanierComponent },
  { path: "**", redirectTo: "/catalogue", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class MagasinRoutingModule {}
