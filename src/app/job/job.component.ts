import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Job from './Job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {
  @Input() job: Job;
  @Output() selectJob = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDetail() {
    this.selectJob.emit(this.job);
  }
}
