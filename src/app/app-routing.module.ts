import { Routes } from "@angular/router";
import { RootComponent } from "./components/root/root.component";
import { ImpressComponent } from "./components/impress/impress.component";
import { DataPolicyComponent } from "./components/data-policy/data-policy.component";
import { UserComponent } from "./components/user/user.component";

export const myRoutes: Routes = [
  { path: '', component: RootComponent },
  { path: 'impress', component: ImpressComponent },
  { path: 'data-policy', component: DataPolicyComponent },
  { path: 'user/:user_id', component: UserComponent },
];
