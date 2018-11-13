import { NgModule } from '@angular/core';

import { CobaAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CobaAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CobaAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CobaAppSharedCommonModule {}
