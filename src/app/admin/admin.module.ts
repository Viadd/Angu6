import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Modulo de rutas
import { AdminRoutingModule } from './adminRouting.module';
// Componentes
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


@NgModule({
    declarations: [
        AdminComponent,
        AddComponent,
        EditComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ],
    exports: [AdminComponent]
})
export class AdminModule {}
