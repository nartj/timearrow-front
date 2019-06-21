export class Contribution {
  event: Event;
  title: string;
  resume: string;
  image: string;
  video: string;
  content: string;
  beginDate: Date;
  endDate: Date;

  constructor(event, title, resume, image, video, content, beginDate, endDate) {
    this.event = event;
    this.title = title;
    this.resume = resume;
    this.image = image;
    this.video = video;
    this.content = content;
    this.beginDate = beginDate;
    this.endDate = endDate;
  }
}
