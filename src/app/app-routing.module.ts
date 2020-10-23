import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil.component";

const routes: Routes = [
  { path: "", redirectTo: "/accueil", pathMatch: "full" },
  { path: "accueil", component: AccueilComponent },
  {
    path: "magasin",
    loadChildren: () =>
      import("./magasin-rooting.module").then(m => m.MagasinRoutingModule)
  },
  { path: "**", redirectTo: "/accueil", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
