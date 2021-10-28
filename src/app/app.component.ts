import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <button mat-flat-button color="primary">Material Button</button>
    <button class="px-4 py-2 rounded bg-primary-500 text-white">
      Tailwind Button
    </button>
    <h1 class="text-primary-500">Tailwind Heading One</h1>
    <div class="h-48 w-48 rounded bg-primary-500"></div>
  `,
  styles: [],
})
export class AppComponent {
  title = "ng-material-tailwind-theming";
}
