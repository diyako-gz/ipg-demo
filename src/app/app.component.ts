import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodesubmitComponent } from "./components/codesubmit/codesubmit.component";
import { ResualtPageComponent } from "./components/resualt-page/resualt-page.component";
import { BasketUserComponent } from './components/basket-user/basket-user.component';
import { InfoPageComponent } from './components/info-page/info-page.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CodesubmitComponent, ResualtPageComponent, BasketUserComponent,InfoPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ipg-pages';
}
