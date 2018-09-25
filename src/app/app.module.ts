import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddDirectoryComponent } from './components/add-directory/add-directory.component';
//bootstrap
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


//integración con firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';
//importando el servicio
import { DirectoryService } from './services/directory.service';
//importando FormsModule 
import {FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddDirectoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase,'directorio-fjc'),
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [DirectoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
