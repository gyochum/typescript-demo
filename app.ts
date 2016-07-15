import '//code.jquery.com/jquery-1.12.1.min.js';
import {IService} from './services/iservice';
import {Service} from './services/Service';

export class App {
    
    title: string = "this is a watched ts file!!";
    service: IService;
    $: JQuery;
    
    constructor(){
        this.service = new Service();
        this.init();
    }
    
    public init(): void{
        let font = this.service.getRandomFont();
        $("#container i").addClass("fa fa-" + font.class);
        
        $(".add").on("click", (e) => {
           let font = this.service.getRandomFont();
           $("#container").append("<span class='font-container'><i class='icon fa fa-" + font.class + "'></i> <span class='remove'>x</span></span>"); 
        });
        
        $("#container").on("click", ".remove", (e) => {
            console.log('icxcx');
           e.target.parentElement.remove(); 
        });
    }
    
}


