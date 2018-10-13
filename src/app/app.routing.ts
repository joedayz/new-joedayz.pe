/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout-component";
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


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
      },
      {
        path: 'inicio', component: InicioComponent
      },
      {
        path: 'curso-presencial-oracle-plsql-11g', component: CursoPresencialOraclePlsql11gComponent
      },
      {
        path: 'curso-presencial-oracle-java8-associate', component: CursoPresencialOracleJava8AssociateComponent
      },
      {
        path: 'curso-presencial-spring-boot-y-spring-cloud', component: CursoPresencialSpringBootYSpringCloudComponent
      },
      {
        path: 'diplomado-online-angular-y-vuejs', component: DiplomadoOnlineAngularYVuejsComponent
      },
      {
        path: 'diplomado-online-java', component: DiplomadoOnlineJavaComponent
      },
      {
        path: 'diplomado-online-net', component: DiplomadoOnlineNetComponent
      },
      {
        path: 'curso-online-oracle-java8-associate', component: CursoOnlineOracleJava8AssociateComponent
      },
      {
        path: 'curso-online-spring-boot-y-spring-cloud', component: CursoOnlineSpringBootYSpringCloudComponent
      },
      {
        path: 'curso-online-spring-professional-certification', component: CursoOnlineSpringProfessionalCertificationComponent
      },
      {
        path: 'campus', component: CampusComponent
      },
      {
        path: 'joefact', component: JoefactComponent
      },
      {
        path: 'contacto', component: ContactoComponent
      },

      {
        path: 'empresa', component: EmpresaComponent
      },
      {
        path: 'miscellaneous',
        loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',
        data: {pageTitle: 'Miscellaneous'}
      },
    ]
  },

  {path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
