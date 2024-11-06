import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { SampleFieldsComponent } from './components/sample-fields/sample-fields.component';

@NgModule({
    declarations: [WidgetsComponent, SampleFieldsComponent],
    imports: [BrowserModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [WidgetsComponent,SampleFieldsComponent]
})
export class AppModule {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const elements: any[] = [[WidgetsComponent, 'widgets-component'], [SampleFieldsComponent, 'sample-fields']];
        try {
            for (const [component, name] of elements) {
                const elem = createCustomElement(component, { injector: this.injector });
                customElements.define(name, elem);
            }
        } catch (error) {
            console.error('ANGULAR ERROR', error);
        }
    }
}
