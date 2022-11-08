import { Component } from '@angular/core';

@Component({
  selector: 'my-component1',
  template: `
  
  NEW NEW I am an existing component with name: {{name}} <br />
  projected content: <ng-content></ng-content>
  `,
})
export class EmbeddableComponent1 {
  name: string;
  ngOnInit() {
    console.log(`EmbeddableComponent.OnInit name=`, this.name);
  }
}
