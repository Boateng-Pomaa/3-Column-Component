import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabsComponent],
  template:`<main>
  <section class="content">
    <app-tabs></app-tabs>
    <!-- <router-outlet></router-outlet> -->
  </section>
</main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3-Column-Component';
}
