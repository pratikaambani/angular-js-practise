//016
var myHelloModule = angular.module("anotherModule", []);
myHelloModule.controller("hiCtrlr", funHelloCtrlr);

function funHelloCtrlr() {
	this.helloMessage = "I am from myHelloModule module";
}