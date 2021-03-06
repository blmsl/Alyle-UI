import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResizingCroppingImagesDemoRoutingModule } from './resizing-cropping-images-demo-routing.module';
import { DemoViewModule } from '../../demo-view';
import { ResizingCroppingImagesDemoComponent } from './resizing-cropping-images-demo/resizing-cropping-images-demo.component';
import { ResizingCroppingImagesExample01Module } from './resizing-cropping-images-example-01/resizing-cropping-images-example-01.module';

@NgModule({
  imports: [
    CommonModule,
    ResizingCroppingImagesDemoRoutingModule,
    DemoViewModule,
    ResizingCroppingImagesExample01Module
  ],
  declarations: [ResizingCroppingImagesDemoComponent]
})
export class ResizingCroppingImagesDemoModule { }
