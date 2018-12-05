import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  { path: '', loadChildren: './registration/registration-module#RegistrationPageModule' },
  { path: 'email-verify', loadChildren: './email-verify/email-verify.module#EmailVerifyPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
