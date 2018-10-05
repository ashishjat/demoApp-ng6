import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatCheckboxModule, MatTooltipModule, MatToolbarModule,
    MatIconModule, MatMenuModule, MatListModule],
  exports: [MatButtonModule, MatInputModule, MatCheckboxModule, MatTooltipModule, MatToolbarModule,
    MatIconModule, MatMenuModule, MatListModule],
})

export class MaterialModule { }
