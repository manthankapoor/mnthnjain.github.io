"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.itemCount = 0;
        this.placeholder = "give id of repair product";
        this.items = [[]];
        this.dummy_items = [];
        this.quantity_index = [];
        this.price_list = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items.length = 3;
        this.dummy_items.length = this.items.length;
        this.quantity_index.length = this.items.length;
        //  this.price_list = price_list;
        var XLSX = require("xlsx");
        var workbook = XLSX.readFile("../../../Master.xlsx");
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        console.log(xlData);
    };
    //   increase_itemCount() {
    //     console.log(this.items);
    //     this.itemCount++;
    //     var ws=new WebSocket("ws://localhost:8000")
    //     ws.onopen=()=>{console.log("jhingalalala")}
    //     ws.onerror=()=>{console.log(ws)}    
    //     console.log("adj;lkdl;askd;laskda;sldkas;d")
    //   }
    //   addInBill(no) {
    //     console.log("array length", this.items.length);
    //     this.items[no] = this.dummy_items[no];
    //     if (this.items.length - 1 == no) {
    //       console.log(no);
    //       this.dummy_items.length++;
    //       this.items.length = this.dummy_items.length;
    //     }
    //     this.validateData(no);
    //     console.log("modified array length", this.items.length);
    //   }
    //   validateData(no) {
    //     this.price_list.forEach(function(item) {
    //       console.log(item.id);
    //       if (item.id == no) {
    //         console.log(true);
    //         return true;
    //       }
    //     });
    //     this.items[no];
    //     var ws=new WebSocket("ws://localhost:8000")
    //     ws.onopen=()=>{console.log("jhingalalala")}
    //     ws.onerror=()=>{console.log(ws)}    
    //     console.log("adj;lkdl;askd;laskda;sldkas;d")
    //   }
    // quantity(no){
    // }
    // }
    HomeComponent.prototype.addToBill = function (row, coloum, value) {
        this.items[row][coloum] = value;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map