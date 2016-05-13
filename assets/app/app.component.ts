import {Component} from '@angular/core';
import {MessageComponent} from "./messages/message.component";

@Component({
    selector: 'my-app',
    template: ` 
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <input type="text">
            </div>
        </div>
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <my-message></my-message>
            </section>
        </div>
    `,
    directives: [MessageComponent]
})
export class AppComponent {
    
}