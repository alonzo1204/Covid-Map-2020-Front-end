import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';//agregado
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    HomeModule,//agregado
    ECommerceModule,

  ],
  declarations: [
    PagesComponent,
    ProductComponent,
  ],
})
export class PagesModule {
}
