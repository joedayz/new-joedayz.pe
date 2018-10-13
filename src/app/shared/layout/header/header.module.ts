import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";



@NgModule({
  imports: [
    CommonModule,

    FormsModule,

  ],
  declarations: [

    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule{}
