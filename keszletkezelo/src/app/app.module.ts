import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooldalComponent } from './pages/fooldal/fooldal.component';
import { MuveletekComponent } from './pages/muveletek/muveletek.component';
import { AnyagKeszletComponent } from './pages/anyag-keszlet/anyag-keszlet.component';
import { AnyagBeszerzesComponent } from './pages/anyag-beszerzes/anyag-beszerzes.component';
import { AnyagKategoriakComponent } from './pages/anyag-kategoriak/anyag-kategoriak.component';
import { EszkozKeszletComponent } from './pages/eszkoz-keszlet/eszkoz-keszlet.component';
import { EszkozBeszerzesComponent } from './pages/eszkoz-beszerzes/eszkoz-beszerzes.component';
import { AltalanosBeszerzesekComponent } from './pages/altalanos-beszerzesek/altalanos-beszerzesek.component';
import { FoldteruletekComponent } from './pages/foldteruletek/foldteruletek.component';
import { FoldteruletkoltsegComponent } from './pages/foldteruletkoltseg/foldteruletkoltseg.component';
import { FoldhasznalokComponent } from './pages/foldhasznalok/foldhasznalok.component';
import { TelepulesekComponent } from './pages/telepulesek/telepulesek.component';
import { GazdasagievekComponent } from './pages/gazdasagievek/gazdasagievek.component';
import { SeoBeallitasComponent } from './pages/seo-beallitas/seo-beallitas.component';
import { NyelvekComponent } from './pages/nyelvek/nyelvek.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { FelhasznalokComponent } from './pages/felhasznalok/felhasznalok.component';
import { SemakComponent } from './pages/semak/semak.component';
import { NaploComponent } from './pages/naplo/naplo.component';
import { TesztComponent } from './pages/teszt/teszt.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooldalComponent,
    MuveletekComponent,
    AnyagKeszletComponent,
    AnyagBeszerzesComponent,
    AnyagKategoriakComponent,
    EszkozKeszletComponent,
    EszkozBeszerzesComponent,
    AltalanosBeszerzesekComponent,
    FoldteruletekComponent,
    FoldteruletkoltsegComponent,
    FoldhasznalokComponent,
    TelepulesekComponent,
    GazdasagievekComponent,
    SeoBeallitasComponent,
    NyelvekComponent,
    ProfilComponent,
    FelhasznalokComponent,
    SemakComponent,
    NaploComponent,
    TesztComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
