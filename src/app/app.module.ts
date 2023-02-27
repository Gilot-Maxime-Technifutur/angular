import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { MainDemoComponent } from './modules/demo/main-demo/main-demo.component';
import { MainExerciceComponent } from './modules/exercice/main-exercice/main-exercice.component';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { TempPipe } from './shared/pipes/temp.pipe';
import { ChronometreComponent } from './modules/exercice/chronometre/chronometre.component';
import { TimePipe } from './modules/exercice/chronometre/time/time.pipe';
import { ComponentDirectiveComponent } from './modules/demo/component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './modules/demo/structural-directive/structural-directive.component';
import { HoverColorDirective } from './modules/demo/custom-directive/hover-color.directive';
import { CustomDirectiveComponent } from './modules/demo/custom-directive/custom-directive.component';
import { ListUserComponent } from './modules/exercice/list-user/list-user.component';
import { InputOutputComponent } from './modules/demo/input-output/input-output.component';
import { EnfantComponent } from './modules/demo/input-output/enfant/enfant.component';
import { ListeCourseComponent } from './modules/exercice/liste-course/liste-course.component';
import { TableauComponent } from './modules/exercice/liste-course/tableau/tableau.component';
import { MainComponent } from './modules/demo/services/main/main.component';
import { Table1Component } from './modules/demo/services/table1/table1.component';
import { Table2Component } from './modules/demo/services/table2/table2.component';
import { FormulairesComponent } from './modules/demo/formulaires/formulaires.component';
import { FormsComponent } from './modules/demo/forms/forms.component';
import { AuthComponent } from './modules/exercice/auth/auth.component';
import { RegisterComponent } from './modules/exercice/auth/register/register.component';
import { LoginComponent } from './modules/exercice/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainDemoComponent,
    MainExerciceComponent,
    BindingsComponent,
    PipesComponent,
    TempPipe,
    ChronometreComponent,
    TimePipe,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    HoverColorDirective,
    CustomDirectiveComponent,
    ListUserComponent,
    InputOutputComponent,
    EnfantComponent,
    ListeCourseComponent,
    TableauComponent,
    MainComponent,
    Table1Component,
    Table2Component,
    FormulairesComponent,
    FormsComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
