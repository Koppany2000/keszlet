import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltalanosBeszerzesekComponent } from './pages/altalanos-beszerzesek/altalanos-beszerzesek.component';
import { AnyagBeszerzesComponent } from './pages/anyag-beszerzes/anyag-beszerzes.component';
import { AnyagKategoriakComponent } from './pages/anyag-kategoriak/anyag-kategoriak.component';
import { AnyagKeszletComponent } from './pages/anyag-keszlet/anyag-keszlet.component';
import { EszkozBeszerzesComponent } from './pages/eszkoz-beszerzes/eszkoz-beszerzes.component';
import { EszkozKeszletComponent } from './pages/eszkoz-keszlet/eszkoz-keszlet.component';
import { FelhasznalokComponent } from './pages/felhasznalok/felhasznalok.component';
import { FoldhasznalokComponent } from './pages/foldhasznalok/foldhasznalok.component';
import { FoldteruletekComponent } from './pages/foldteruletek/foldteruletek.component';
import { FoldteruletkoltsegComponent } from './pages/foldteruletkoltseg/foldteruletkoltseg.component';
import { FooldalComponent } from './pages/fooldal/fooldal.component';
import { GazdasagievekComponent } from './pages/gazdasagievek/gazdasagievek.component';
import { MuveletekComponent } from './pages/muveletek/muveletek.component';
import { NaploComponent } from './pages/naplo/naplo.component';
import { NyelvekComponent } from './pages/nyelvek/nyelvek.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SemakComponent } from './pages/semak/semak.component';
import { SeoBeallitasComponent } from './pages/seo-beallitas/seo-beallitas.component';
import { TelepulesekComponent } from './pages/telepulesek/telepulesek.component';
import { TesztComponent } from './pages/teszt/teszt.component';

const routes: Routes = [
  { path: 'fooldal', component: FooldalComponent },
  { path: 'muveletek', component: MuveletekComponent },
  { path: 'anyagBeszerzes', component: AnyagBeszerzesComponent },
  { path: 'anyagKategoriak', component: AnyagKategoriakComponent },
  { path: 'anyagKeszlet', component: AnyagKeszletComponent },
  { path: 'eszkozBeszerzes', component: EszkozBeszerzesComponent },
  { path: 'eszkozKeszlet', component: EszkozKeszletComponent },
  { path: 'altalanosBeszerzes', component: AltalanosBeszerzesekComponent },
  { path: 'foldteruletek', component: FoldteruletekComponent },
  { path: 'foldteruletkoltseg', component: FoldteruletkoltsegComponent },
  { path: 'foldhasznalok', component: FoldhasznalokComponent },
  { path: 'telepulesek', component: TelepulesekComponent },
  { path: 'gazdasagievek', component: GazdasagievekComponent },
  { path: 'seoBeallitas', component: SeoBeallitasComponent },
  { path: 'nyelvek', component: NyelvekComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'felhasznalok', component: FelhasznalokComponent },
  { path: 'semak', component: SemakComponent },
  { path: 'naplo', component: NaploComponent },
  { path: 'teszt', component: TesztComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
