import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ThemeConfigurationComponent } from './theme-configuration/theme-configuration.component';
import { TemplateViewComponent } from './template-view/template-view.component';
import { ResumeDetailsComponent } from './resume-details/resume-details.component';
import { DynamicFormComponent } from './resume-details/dynamic-form/dynamic-form.component';
import { DownloadViewComponent } from './resume-details/download-view/download-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardViewComponent, ThemeConfigurationComponent, TemplateViewComponent, ResumeDetailsComponent, DynamicFormComponent, DownloadViewComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { 
  
}
