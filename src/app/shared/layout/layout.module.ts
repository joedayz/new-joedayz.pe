import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainLayoutComponent} from "./app-layouts/main-layout-component";
import {HeaderModule} from "./header/header.module";
import {NavigationModule} from "./navigation/navigation.module";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NavigationModule,
    RouterModule,
  ],
  declarations: [

    FooterComponent,
    MainLayoutComponent,

  ],
  exports:[
    HeaderModule,
    NavigationModule,
    FooterComponent
  ]
})
export class JoeDayzLayoutModule{

}
