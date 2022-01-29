import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamSnapshotComponent } from './webcam-snapshot.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    WebcamSnapshotComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class WebcamSnapshotModule { }
