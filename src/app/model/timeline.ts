import {Contribution} from './contribution';
import {Topic} from './topic';

export class Timeline {
    title: string;
    from: Date;
    to: Date;
    resume: string;
    topics: Array<Topic>;
    contributions: Array<Contribution>;
    events: Array<Event>;

    constructor(title, from, to, resume, topics, contributions, events) {
      this.title = title;
      this.from = from;
      this.to = to;
      this.resume = resume;
      this.topics = topics;
      this.contributions = contributions;
      this.events = events;
  }
}
