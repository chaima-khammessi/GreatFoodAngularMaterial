import { NgModule } from '@angular/core'
import { from } from 'rxjs';
import{MatButtonModule} from '@angular/material/button'
import{MatIconModule} from '@angular/material/icon'
import{MatBadgeModule} from '@angular/material/badge'
import{MatListModule} from '@angular/material/list'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatCardModule} from '@angular/material/card'
import {MatStepperModule} from '@angular/material/stepper'
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'

const MaterialComponent = [
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatStepperModule,
  MatInputModule,
  MatCheckboxModule

]

@NgModule({
 
  imports: [MaterialComponent],
  exports: [MaterialComponent] , 
})
export class MaterialModule { }
