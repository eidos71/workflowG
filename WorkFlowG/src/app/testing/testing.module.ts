import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MyPipe } from './tutorial/my.pipe';
import { DefaultPipe } from './tutorial/default.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloworldComponent, MyPipe, DefaultPipe]
})
export class TestingModule { }
