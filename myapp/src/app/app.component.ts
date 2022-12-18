import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  toshow = '0';
  curval = '';
  ans = 0;
  writetoinput(value: string) {
    this.curval += value;
    this.ans += parseInt(value);
    this.toshow = this.curval;
  }
  answer() {
    this.curval = eval(this.curval);
    this.toshow = this.curval;
  }
  remove() {
    this.curval = this.curval.slice(0, this.curval.length - 1);
    this.toshow = this.curval;
  }
  removeall() {
    this.curval = '';
    this.toshow = '0';
  }
}
