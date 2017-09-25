import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DefineComponent } from './componentes/define/define.component';
import { FormsModule }   from '@angular/forms';
import { ProcesamientoComponent } from './componentes/procesamiento/procesamiento.component';
import { TiempoComponent } from "./componentes/define/tiempo/tiempo.component";
import { CuentaAtrasComponent } from "./componentes/define/tiempo/cuenta-atras/cuenta-atras.component";
import { CronosComponent } from "./componentes/define/tiempo/cronos/cronos.component";
import { QuitarDecimalesPipe } from './pipes/quitar-decimales.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefineComponent,
    ProcesamientoComponent,
    TiempoComponent,
    CronosComponent,
    CuentaAtrasComponent,
    QuitarDecimalesPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
