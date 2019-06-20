export class Timeline {

  constructor(
    public id: number,
    public title: string,
    public from: Date,
    public to: Date,
    public resume: string,
    public topics: Array<number>,
    public contributions: Array<number>,
    public events: Array<number>
    ) { }	    
}
