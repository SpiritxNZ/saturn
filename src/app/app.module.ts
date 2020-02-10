import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatPaginatorModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// Pipes
import { SafeHtmlPipe } from './support/custom-pipes';


// Begin all components
import { AppComponent } from './app.component';
import { NavbarComponent } from './support/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './support/footer/footer.component';
import { ProgramsmainComponent } from './programs/programs-main/programs-main.component';
import { SuccesscasesComponent } from './success-cases/success-cases.component';
import { AboutusComponent } from './Pages/about-us/about-us.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { CourseshomeComponent } from './course/courses-home/courses-home.component';
import { ApplicationComponent } from './Pages/application/application.component';
import { CoursesComponent } from './course/courses/courses.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { ProgramTesterComponent } from './programs/program-tester/program-tester.component';
import { ProgramDeveloperComponent } from './programs/program-developer/program-developer.component';
import { ProgramDeveloperBeginnerComponent } from './programs/program-developer-beginner/program-developer-beginner.component';
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component';
import { BlogComponent } from './blog/blog/blog.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { BlogArticleComponent } from './blog/blog-article/blog-article.component';
import { ProgramDataanalystComponent } from './programs/program-dataanalyst/program-dataanalyst.component';
import { JobsPanelComponent } from './careers/jobs/jobs-panel/jobs-panel.component';
import { JobsSearchbarComponent } from './careers/jobs/jobs-searchbar/jobs-searchbar.component';
import { JobsListComponent } from './careers/jobs/jobs-list/jobs-list.component';
import { JobsDescriptionComponent } from './careers/jobs/jobs-description/jobs-description.component';
import { JobsDetailComponent } from './careers/jobs/jobs-detail/jobs-detail.component';
import { JobIntellHomeComponent } from './careers/job-intell/job-intell-home/job-intell-home.component';
import { JobIntellChartDialogComponent } from './careers/job-intell/job-intell-chart-dialog/job-intell-chart-dialog.component';
import { CVBuilderComponent } from './learner/cvbuilder/cvbuilder.component';
import { CVViewDialogComponent } from './learner/cv-view-dialog/cv-view-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProgramsmainComponent,
    SuccesscasesComponent,
    AboutusComponent,
    ContactusComponent,
    CourseshomeComponent,
    ApplicationComponent,
    CoursesComponent,
    FaqComponent,
    ProgramTesterComponent,
    ProgramDeveloperComponent,
    ProgramDeveloperBeginnerComponent,
    BlogsListComponent,
    BlogComponent,
    PageNotFoundComponent,
    BlogArticleComponent,
    ProgramDataanalystComponent,
    JobsPanelComponent,
    JobsSearchbarComponent,
    JobsListComponent,
    JobsDescriptionComponent,
    JobsDetailComponent,
    JobIntellHomeComponent,
    JobIntellChartDialogComponent,
    CVBuilderComponent,
    CVViewDialogComponent
  ],


  imports: [
    NoopAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatNativeDateModule, MatSelectModule, MatDividerModule, MatCardModule, MatDialogModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatBadgeModule, MatCheckboxModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatDividerModule, MatPaginatorModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  entryComponents: [
    JobIntellChartDialogComponent,
    CVViewDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}