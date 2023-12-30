import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-registrer',
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})
export class RegistrerComponent {
  public name: string = 'Juan Manuel';
  public age: number = 38;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = "Simon";
  }

  changeAge():void {
    this.age = 3;
  }

}
