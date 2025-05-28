// header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import this

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // ✅ Required for [routerLink], etc.
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
