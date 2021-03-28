import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports : [
             
    ]     
})
export class ContadorModule {

}