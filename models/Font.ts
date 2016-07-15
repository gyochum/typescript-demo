import {Base} from './Base';

export class Font extends Base{
    
    public class: string;
    
    constructor(_class:string){
        super();
        
        this.class = _class;
    }
    
}