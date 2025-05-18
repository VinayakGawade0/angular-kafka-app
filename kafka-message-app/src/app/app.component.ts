import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageProducerComponent } from './message-producer/message-producer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageProducerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kafka-message-app';
}
