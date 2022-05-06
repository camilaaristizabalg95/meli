import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

export const SHARED_MODULES: any[] = [
  CommonModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  FormsModule
]


@NgModule({
  declarations: [],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ]
})
export class SharedModule { }
