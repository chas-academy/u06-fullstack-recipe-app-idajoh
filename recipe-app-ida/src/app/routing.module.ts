import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeAPIComponent } from './recipe/recipe.component';
import { RecipeAPIDetailComponent } from './api-detail/apidetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: RecipeAPIComponent },
  { path: 'recipe/:id', component: RecipeAPIDetailComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: SignupComponent  },
  { path: '**', component: NotFoundComponent, data: { title : 'Oops' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
