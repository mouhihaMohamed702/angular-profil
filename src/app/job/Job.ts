import { SafeHtml } from "@angular/platform-browser";

class Job {
  constructor(public id: Number,
    public name: string,
    public category: string,
    public description: SafeHtml,
    public thumbnailUrl: string) { }
}

export default Job;

