import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProduitComponent } from "./produit.component";
import { PanierComponent } from "./panier.component";

const routes: Routes = [
  { path: "", redirectTo: "/catalogue", pathMatch: "full" },
  { path: "catalogue", component: ProduitComponent },
  { path: "panier", component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
