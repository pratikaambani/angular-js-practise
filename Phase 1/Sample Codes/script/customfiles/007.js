
//007
var showClock = angular.module("clockAppn", []);
showClock.controller("clockCtrlr", clockFunction);

function clockFunction($scope) {
var date = new Date();
$scope.currentTime = date.toTimeString();
$scope.updateTime = function() {
	var date = new Date();
	$scope.currentTime = date.toTimeString();
}
}



//010
var app = angular.module('ngModelExample', []);
app.controller("ngModelController", ctrlrFunction);

function ctrlrFunction($scope) {
	$scope.textBoxChange = function() {
		console.log("textbox value changed");
	}
}


//011, 012 nested Controllers
var nestedCtrl = angular.module("nestedController1", []);
nestedCtrl.controller("ctrl1", fun1);
nestedCtrl.controller("ctrl2", fun2);

function fun1($scope) {
	this.testProperty = "From first controller: ctrl1";
	}

	function fun2($scope) {
		this.testProperty = "From second controller: ctrl2";
	}



//014
	var calcApp = angular.module("calcApplication", []);
	calcApp.controller("calculatorController", calcFun);

	function calcFun() {
		this.resultVal = 0;

		this.btnClicked = function(button) {
			this.selectedOperation = button;
		}

		this.computeResult = function() {
		var number1 = parseFloat(this.firstIP);
		var number2 = parseFloat(this.secondIP);

		if(this.selectedOperation === '+') {
			this.resultVal = number1 + number2;
		} else if(this.selectedOperation === '-') {
			this.resultVal = number1 - number2;
		} else if(this.selectedOperation === '*') {
			this.resultVal = number1 * number2;
		} else if(this.selectedOperation === '/') {
			this.resultVal = number1 / number2;
		}
	}
}

//doubt, how to add muiltiple fuctions in single controller
//015
var moreDirs = angular.module('moreDirectivesApp', []);
moreDirs.controller('moreDirectiveController', moreDirFunction);
moreDirs.controller('moreDirectiveController', anotherDirFunction);

function moreDirFunction() {
	this.myList = [1, 2, 3, 42, 1256];
}

function anotherDirFunction() {
	this.detailsOfMembers = [
		{'name':'hg', 'age': '1'},
		{'name':'oi', 'age': '3'},
		{'name':'we', 'age': '6'},
		{'name':'ds', 'age': '8'}
	];
}




//016 module dependency: look 016.js
var modulesDetail = angular.module("mulModules", ["anotherModule"]);

var extModule = angular.module("externalModule", ['ngTagsInput']);
extModule.controller("tagsDemoCtrl", tagsFun);

function tagsFun() {
	this.tags = [
		{ text: 'T1'},
		{ text: 'T2'},
		{ text: 'T3'},
		{ text: 'T4'}		
	];
}




var application1 = angular.module("todoApp", []);
application1.controller("someController", aFunction);

function aFunction() {

	this.todos = [
		"Learn Angular",
		"Practise Angular",
		"Enjoy ma buoy"
	];

	this.addNewTodo = function() {
		this.todos.push(this.newTodo);
		this.newTodo = "";
	}

	this.triggerEditFun = function() {
		this.editMode = !this.editMode;
	}
}