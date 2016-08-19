import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';
import {SecretConfig} from "./config/secret";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [ ProfileComponent ],
    providers: [ GithubService, SecretConfig ]
})
export class AppComponent {

}