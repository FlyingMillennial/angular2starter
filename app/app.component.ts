import { Component } from '@angular/core';
import { TestComponent } from './child/child.component';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Look, a component!</h1>
        <p>This componenent is declared and bootstrapped in app.module.ts, which is in turn bootstrapped
        in main.ts.  It is a directive in index.html at the root of the directory, which kicks everything off.</p>
        <button (click)="showTestComponent()">{{toggleTestComponent ? 'Hide' : 'Show'}} child component</button>
        <test-component *ngIf="toggleTestComponent"></test-component>
    `
})

export class AppComponent {

    //Toggle Test Comopnent
    toggleTestComponent: boolean = false;
    showTestComponent():void {
        this.toggleTestComponent = !this.toggleTestComponent;
    }

}
