import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      })
    )
  ]
}).catch(err => console.error(err));
