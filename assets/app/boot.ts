///<reference path="../../typings/browser.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.service";
import { ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);