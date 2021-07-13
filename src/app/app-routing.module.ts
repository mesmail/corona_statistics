import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'select', component: SelectComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
