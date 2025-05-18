import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KafkaService, Message } from '../services/kafka.service';

@Component({
  selector: 'app-message-producer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-producer.component.html',
  styleUrls: ['./message-producer.component.scss']
})
export class MessageProducerComponent {
  messageData: Message = { name: '', message: '' };
  responseMessage = '';

  constructor(private kafkaService: KafkaService) {}

  sendToProduce(): void {
    this.kafkaService.sendMessage(this.messageData).subscribe({
      next: (res) => this.responseMessage = res,
      error: (err) => this.responseMessage = 'Error: ' + err.message
    });
  }

  sendToPublish(): void {
    this.kafkaService.publishMessage(this.messageData).subscribe({
      next: (res) => this.responseMessage = res,
      error: (err) => this.responseMessage = 'Error: ' + err.message
    });
  }
}
