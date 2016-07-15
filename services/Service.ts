import { IService } from './IService';
import {Font} from '../models/font';

export class Service implements IService {
    
    private fonts:Array<string> = ["pied-piper", "snapchat", "instagram", "bicycle", "vine", "tumblr", "windows"];
    
    getRandomFont():Font{
        var font = this.fonts[Math.floor(Math.random() * this.fonts.length)];
        var result = new Font(font);
        
        //write to the console using the base class' write function 
        result.write("loading font: " + result.class);
         
        return result;
    }
    
    
}