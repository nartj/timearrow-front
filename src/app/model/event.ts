/*
Modèle d'un composant
 */

export class Event {
  title: string;
  resume: string;
  image: string;
  video: string;
  content: string;
  beginDate: Date;
  endDate: Date;

  constructor(title, resume, image, video, content) {
    this.title = title;
    this.resume = resume;
    this.image = image;
    this.video = video;
    this.content = content;
  }
}
