export class Event {
  id: number;
  title: string;
  resume: string;
  image: string;
  video: string;
  content: string;
  from: Date;
  to: Date;
  timeline: number;

  constructor(id, title, resume, image, video, content, timeline) {
    this.id = id;
    this.title = title;
    this.resume = resume;
    this.image = image;
    this.video = video;
    this.content = content;
    this.timeline = timeline;
  }
}
