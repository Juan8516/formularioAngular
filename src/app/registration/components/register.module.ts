import { NgModule } from "@angular/core";
import { ListComponent } from './list/list.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ListComponent,
    RegistrerComponent
  ],
  exports: [
    ListComponent,
    RegistrerComponent
  ],
  imports: [
    CommonModule
  ]
})

export class RegistrerUser {
}
