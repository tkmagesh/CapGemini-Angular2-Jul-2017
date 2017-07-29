import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Module
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator/calculator-one.component';
import { CalculatorTwoComponent } from './calculator/calculator-two.component';
import { ListDemoComponent } from './list-demo/listDemo.component';

//Service
import { CalculatorModel } from './calculator/CalculatorModel';


@NgModule({
  //directives, pipes, components
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorOneComponent,
    CalculatorTwoComponent,
    ListDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //services
  providers: [
    CalculatorModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
