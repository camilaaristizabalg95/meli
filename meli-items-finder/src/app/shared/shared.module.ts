import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { SHARED_COMPONENTS } from '.';

export const SHARED_MODULES: any[] = [
  CommonModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  FormsModule
]

/**
 * Importación y exportación de todos los
 * modulos y componentes que se compartiran
 * a todo el aplicativo 
 */
@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
