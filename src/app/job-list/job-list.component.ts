import { Component, OnInit } from '@angular/core';
import Job from '../job/Job';
import { JobService } from '../services/job.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobList = [];
  jobListJson = [];
  currentFilter = 'All';

  constructor(private jobService: JobService, private sanitazer: DomSanitizer) { }

  ngOnInit() {
    this.jobService.getList().subscribe(
      data => {
        this.jobListJson = data;
        this.mappingJson(data);
      },
      err => console.error(err)
    );
  }

  mappingJson(data) {
    this.jobList = [];
    data.forEach(element => {
      this.jobList.push(new Job(element.id, element.title.rendered, element.type,
        this.sanitazer.bypassSecurityTrustHtml(element.content.rendered), element.thumbnail_url));
    });
  }

  onFilter(value) {
    this.currentFilter = value;
  }

  onDetail(job: Job) {
    console.log(job);
  }

}
