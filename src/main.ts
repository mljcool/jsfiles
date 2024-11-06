import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { provideFluentDesignSystem, fluentCard, fluentButton, fluentTextField, fluentRadioGroup, fluentRadio, fluentTabPanel, fluentTab, fluentTabs, fluentSwitch, fluentDialog, fluentNumberField } from '@fluentui/web-components';

provideFluentDesignSystem().register(fluentCard(), fluentButton(), fluentTextField(), fluentRadioGroup(), fluentRadio(), fluentTab(), fluentTabPanel(), fluentTabs(), fluentSwitch(), fluentDialog(), fluentNumberField());

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
