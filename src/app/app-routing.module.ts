import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import { ComponentDirectiveComponent } from './modules/demo/component-directive/component-directive.component';
import { CustomDirectiveComponent } from './modules/demo/custom-directive/custom-directive.component';
import { FormsComponent } from './modules/demo/forms/forms.component';
import { FormulairesComponent } from './modules/demo/formulaires/formulaires.component';
import { InputOutputComponent } from './modules/demo/input-output/input-output.component';
import { MainDemoComponent } from './modules/demo/main-demo/main-demo.component';
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { MainComponent } from './modules/demo/services/main/main.component';
import { StructuralDirectiveComponent } from './modules/demo/structural-directive/structural-directive.component';
import { AuthComponent } from './modules/exercice/auth/auth.component';
import { LoginComponent } from './modules/exercice/auth/login/login.component';
import { RegisterComponent } from './modules/exercice/auth/register/register.component';
import { ChronometreComponent } from './modules/exercice/chronometre/chronometre.component';
import { ListUserComponent } from './modules/exercice/list-user/list-user.component';
import { ListeCourseComponent } from './modules/exercice/liste-course/liste-course.component';
import { MainExerciceComponent } from './modules/exercice/main-exercice/main-exercice.component';

const routes: Routes = [

  {path : 'demo', component : MainDemoComponent, children : [
    {path : 'bindings', component : BindingsComponent},
    {path : 'pipes', component : PipesComponent},
    {path : 'component-directive', component : ComponentDirectiveComponent},
    {path : 'structural-directive', component : StructuralDirectiveComponent},
    {path : 'custom-directive', component : CustomDirectiveComponent},
    {path : 'input-output', component : InputOutputComponent},
    {path : 'services', component : MainComponent},
    {path : 'formulaires', component : FormulairesComponent},
    {path : 'forms', component : FormsComponent}
  ]},
  {path : 'exercice', component : MainExerciceComponent, children : [
    {path : 'chronometre', component : ChronometreComponent},
    {path : 'list-user', component : ListUserComponent},
    {path : 'shopping-list', component : ListeCourseComponent},
    {path : 'auth', component : AuthComponent, children : [
      {path : 'register', component : RegisterComponent},
      {path : 'login', component : LoginComponent}
    ]}
  ]},
  {path : 'module', loadChildren : () => import('./modules/users/users.module').then(m => m.UsersModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
