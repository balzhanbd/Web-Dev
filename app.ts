//1 Components in Angular
/*
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    Hello Universe
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})
export class AppComponent {}
*/



//2 Updating the Component Class
/*
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ city }}, {{ 1 + 1 }}
  `,
})
export class AppComponent {
  city = 'San Francisco';
}
*/



//3 Composing Components
/*
import {Component} from '@angular/core';
@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
})
export class UserComponent {
  username = 'youngTech';
}
@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [UserComponent],
})
export class AppComponent {}
*/




//4 Control Flow in Components - @if
/*
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
    <span>Yes, the server is running</span>
    } @else {
    <span>No, the server is not running</span>
    }
  `,
})
export class AppComponent {
  isServerRunning = true;
}
*/




//5 Control Flow in Components - @for
/*
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    @for(user of users; track user.id) {
    <p>{{ user.name }}</p>
    }
  `,
})
export class AppComponent {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}
*/




//6 Property Binding in Angular
/*
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div [contentEditable]="isEditable"></div>
  `,
})
export class AppComponent {
  isEditable = true;
}
*/




//7 Event handling
/*
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class AppComponent {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
*/




//8 Component Communication with @Input
/*
app/user.component.ts

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{ name }}</p>
  `,
})
export class UserComponent {
  @Input() name = '';
}

app/app.component.ts

import {Component} from '@angular/core';
import {UserComponent} from './user.component';
@Component({
  selector: 'app-root',
  template: `
    <app-user name="Simran" />
  `,
  imports: [UserComponent],
})
export class AppComponent {}
*/




//9 Component Communication with @Output
/*
app/child.component.ts

import {Component, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

app/app.component.ts

import {Component} from '@angular/core';
import {ChildComponent} from './child.component';
@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [ChildComponent],
})
export class AppComponent {
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
}
*/




//10 Deferrable Views
/*
app/app.component.ts

import {Component} from '@angular/core';
import {CommentsComponent} from './comments.component';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
      <comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
  `,
  imports: [CommentsComponent],
})
export class AppComponent {}

app/comments.components.ts

import {Component} from '@angular/core';
@Component({
  selector: 'comments',
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
})
export class CommentsComponent {}
*/




//11 Optimizing images
/*
import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
*/




//12 Routing Overview
/*
app/app.routes.ts

import {Routes} from '@angular/router';
export const routes: Routes = [];

app/app.components.ts

import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class AppComponent {}

app/app.config.ts

import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
*/




//13 Define a Route
/*
app/app.routes.ts
import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserComponent,
  },
];


app/home/home.components.ts

import {Component} from '@angular/core';
@Component({
  selector: 'app-home',
  template: `
    <div>Home Page</div>
  `,
})
export class HomeComponent {}
*/




//14 Use RouterLink for Navigation
/*
import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
*/




//15 Forms Overview
/*
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  imports: [FormsModule],
})
export class UserComponent {
  favoriteFramework = '';
  username = 'youngTech';
}
*/




//16 Getting form control value
/*
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class UserComponent {
  favoriteFramework = '';
  username = 'youngTech';
  showFramework() {
    alert(this.favoriteFramework);
  }
}
*/




//17 Reactive Forms
/*
import {Component} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" 
          (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
    profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert (
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
*/





//18 Validating forms
/*
import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
*/





//19 Creating an injectable service
/*
app/car.service.ts

import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

app/app.components.ts

import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class AppComponent {
  carService = inject(CarService);
}
*/




//20 Inject-based dependency injection
/*
app/car.service.ts

import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

app/app.component.ts

import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  display = '';
  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
*/




//21 Constructor-based dependency injection
/*
app/car.service.ts

import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}


app/app/component.ts

import {Component} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
})
export class AppComponent {
  display = '';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
*/





//22 Pipes
/*
import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    {{ username | lowercase }}
  `,
  imports: [LowerCasePipe],
})
export class AppComponent {
  username = 'yOunGTECh';
}
*/




//23 Formatting data with pipes
/*
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
*/





//24 Create a custom pipe
/*
app/app.component.ts

import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';
@Component({
  selector: 'app-root',
  template: `
    Reverse Machine: {{ word | reverse }}
  `,
  imports: [ReversePipe],
})
export class AppComponent {
  word = 'You are a champion';
}


app/reverse.pipe.ts

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }

    return reverse;
  }
}
*/ 
