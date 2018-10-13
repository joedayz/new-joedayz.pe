import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {JoeDayzLayoutModule} from "./shared/layout/layout.module";

import { routing } from './app.routing'
import {InicioComponent} from "./inicio.component";
import {CursoPresencialOraclePlsql11gComponent} from "./curso-presencial-oracle-plsql-11g.component";
import {CursoPresencialOracleJava8AssociateComponent} from "./curso-presencial-oracle-java8-associate.component";
import {CursoPresencialSpringBootYSpringCloudComponent} from "./curso-presencial-spring-boot-y-spring-cloud.component";
import {DiplomadoOnlineAngularYVuejsComponent} from "./diplomado-online-angular-y-vuejs.component";
import {DiplomadoOnlineJavaComponent} from "./diplomado-online-java.component";
import {DiplomadoOnlineNetComponent} from "./diplomado-online-net.component";
import {CursoOnlineOracleJava8AssociateComponent} from "./curso-online-oracle-java8-associate.component";
import {CursoOnlineSpringBootYSpringCloudComponent} from "./curso-online-spring-boot-y-spring-cloud.component";
import {CursoOnlineSpringProfessionalCertificationComponent} from "./curso-online-spring-professional-certification.component";
import {CampusComponent} from "./campus.component";
import {JoefactComponent} from "./joefact.component";
import {ContactoComponent} from "./contacto.component";
import {EmpresaComponent} from "./empresa.component";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CursoPresencialOraclePlsql11gComponent,
    CursoPresencialOracleJava8AssociateComponent,
    CursoPresencialSpringBootYSpringCloudComponent,
    DiplomadoOnlineAngularYVuejsComponent,
    DiplomadoOnlineJavaComponent,
    DiplomadoOnlineNetComponent,
    CursoOnlineOracleJava8AssociateComponent,
    CursoOnlineSpringBootYSpringCloudComponent,
    CursoOnlineSpringProfessionalCertificationComponent,
    CampusComponent,
    JoefactComponent,
    ContactoComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    JoeDayzLayoutModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
