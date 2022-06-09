import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class UiModule {}
