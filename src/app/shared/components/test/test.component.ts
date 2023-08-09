import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-test',
    template :`
    <p>This is a Component with only one File </p>`,
    styles:  [
        `
        p{
            padding :30px;
            background-color:lime;
            color:navy;
            text-align:center;
            font-weight:bold;
            font-size:30px;
            text-shadow:1px 1px 2px purple;
            
            }`
    ]


     
})
export class TestComponent implements OnInit{



 ngOnInit(): void {
     
 }
}