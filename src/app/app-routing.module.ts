import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Begin all components
import { AppComponent } from './app.component';
import { NavbarComponent } from './support/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './support/footer/footer.component';
import { ProgramsmainComponent } from './programs/programs-main/programs-main.component';
import { SuccesscasesComponent } from './success-cases/success-cases.component';
import { AboutusComponent } from './Pages/about-us/about-us.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { ApplicationComponent } from './Pages/application/application.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { ProgramTesterComponent } from './programs/program-tester/program-tester.component';
import { ProgramDeveloperComponent } from './programs/program-developer/program-developer.component';
import { ProgramDeveloperBeginnerComponent } from './programs/program-developer-beginner/program-developer-beginner.component';
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component';
import { BlogComponent } from './blog/blog/blog.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { BlogArticleComponent } from './blog/blog-article/blog-article.component';
import { ProgramDataanalystComponent } from './programs/program-dataanalyst/program-dataanalyst.component';
import { JobComponent } from './careers/jobs/job/job.component';
import { JobsDetailComponent } from './careers/jobs/jobs-detail/jobs-detail.component';
import { JobsPanelComponent } from './careers/jobs/jobs-panel/jobs-panel.component';
import { JobsSearchbarComponent } from './careers/jobs/jobs-searchbar/jobs-searchbar.component';
import { JobsListingComponent } from './careers/jobs/jobs-listing/jobs-listing.component';

const routes: Routes = [
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  { path: ':lang/home', component: HomeComponent },
  { path: ':lang/programs-main', component: ProgramsmainComponent },
  // Blogs
  { path: ':lang/blogs', component: BlogsListComponent },
  { path: ':lang/blogs-list', component: BlogsListComponent },
  { path: ':lang/article/:id', component: BlogArticleComponent },

  { path: ':lang/blog', component: BlogComponent },
  { path: ':lang/success-cases', component: SuccesscasesComponent },
  { path: ':lang/about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactusComponent },

  { path: ':lang/program-developer', component: ProgramDeveloperComponent },
  { path: ':lang/program-developer-beginner', component: ProgramDeveloperBeginnerComponent },
  { path: ':lang/program-tester', component: ProgramTesterComponent },
  { path: ':lang/application', component: ApplicationComponent },
  { path: ':lang/faq', component: FaqComponent },
    // { path: ':lang/courses-home', component: CourseshomeComponent },
  // { path: ':lang/courses', component: CoursesComponent },
  // { path:':lang/courses/:id', component:CoursesComponent },
  { path: ':lang/jobs', component: JobsPanelComponent },
  { path: ':lang/jobdetail', component: JobsDetailComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
