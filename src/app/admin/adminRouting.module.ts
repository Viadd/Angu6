import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

// Rutas
const rutasHijas: Routes = [
    {
        path: 'admin-panel', component: AdminComponent,
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full'},
            { path: 'listado', component: ListComponent },
            { path: 'Añadir', component: AddComponent },
            { path: 'Editar', component: EditComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(rutasHijas)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
