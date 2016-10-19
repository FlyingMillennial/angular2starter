import { Component } from '@angular/core';

@Component({
    selector: 'test-component',
    template: `
        <h2>Look - a child component!</h2>
        <p>This component also has to be declared in app.module.ts, but NOT bootstrapped.  Only the main
        component in the module needs to be bootstrapped.  All you have to do in the parent component is
        impor the child component class and use the selector in the parent template.</p>
    `
})

export class TestComponent {

}