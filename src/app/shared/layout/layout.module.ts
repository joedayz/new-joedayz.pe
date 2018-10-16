import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainLayoutComponent} from "./app-layouts/main-layout-component";
import {HeaderModule} from "./header/header.module";
import {NavigationModule} from "./navigation/navigation.module";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [   //aqui van modulos
    CommonModule,
    HeaderModule,
    NavigationModule,
    RouterModule,
  ],
  declarations: [   //aqui van componentes

    FooterComponent,
    MainLayoutComponent,

  ],
  exports:[        //expones para el resto de modulos lo que quieres compartir
    HeaderModule,
    NavigationModule,
    FooterComponent
  ]
})
export class JoeDayzLayoutModule{

}
