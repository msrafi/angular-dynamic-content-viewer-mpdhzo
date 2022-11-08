import {
  ContentViewer,
  EmbeddedComponents,
  embeddedComponents,
} from './dynamic-content-viewer';
import { NgModule, Component, ComponentFactoryResolver } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'my-app',
  template: `
    HTML from server: <br />
    <textarea [value]="content" (keyup)="content = $event.target.value" rows="4" cols="50" ></textarea> <br />
    Avilable Components: <br />
    <div *ngFor="let selectors of selectors">{{selectors}}</div>
    <hr />
    Output: <br />
    <content-viewer [content]="content"></content-viewer>
  `,
})
export class App {
  content =
    '<h1>\n  I am content from the server, just normal HTML\n</h1>\n<my-component name="hello">I am the projected content!</my-component>';
  selectors = [];
  constructor(
    embeddedComponents: EmbeddedComponents,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    for (const component of embeddedComponents.components) {
      const factory =
        componentFactoryResolver.resolveComponentFactory(component);
      this.selectors.push(factory.selector);
    }
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [App, ContentViewer, embeddedComponents],
  entryComponents: [embeddedComponents],
  bootstrap: [App],
  providers: [EmbeddedComponents],
})
export class AppModule {}
