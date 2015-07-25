/**
 * Created by nm on 7/11/15.
 */


var StepsModule = {
    step1: {
        goFurther: function() {
            this.checkButton = $('#chkAgree');
            if(this.checkButton.is(':checked')) {
                this.btnTerms.prop('disabled', false);
                this.btnWeeks.prop('disabled', false);
            }
            else {
                this.btnTerms.prop('disabled', true);
                this.btnWeeks.prop('disabled', true);
            }
        }
    },
    route: {
        step1: 'Step1.html',
        step2: 'Step2.html',
        step3: 'Step3.html'
    }
};

function setView(step) {
    $('#stepsView').load('../New/'+ step + '.html', function() {
        StepsModule.step1.checkButton = $('#chkAgree');
        StepsModule.step1.btnTerms = $('#btnterms');
        StepsModule.step1.btnWeeks = $('#btnWeeks');
    });
}

// Step 1

function goFurther() {
    if (document.getElementById("chkAgree").checked == true) {
        document.getElementById("btnterms").disabled = false;
        document.getElementById("btnWeeks").disabled = false;
    }
    else {
       document.getElementById("btnterms").disabled = true;
       document.getElementById("btnWeeks").disabled = true;
    }
}


//Step 2

var addClassToShowImageOnly = function(elem){
    var allChildNodes = elem.parentNode.childNodes;

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}


var addClassToShowSelected = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "No"){

        document.getElementById('textshow').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}


var addClassToShowSelected3 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow2').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow2').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected4 = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes"){
        document.getElementById('textshow3').innerHTML = 'Please Check this help link';
    } else if (elem && elem.innerHTML == "Not Sure") {
        document.getElementById('textshow3').innerHTML = 'Please Check this help link';
    }
    else{
        document.getElementById('textshow3').innerHTML = '';
    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected5 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow4').innerHTML = 'Click here to define Buildings';
    } else {
        document.getElementById('textshow4').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected6 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow5').innerHTML = 'Click here to define Buildings';
    } else {
        document.getElementById('textshow5').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected7 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow6').innerHTML = 'Currently: 5days(s)';
    } else {
        document.getElementById('textshow6').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}


var addClassToShowSelected8 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow7').innerHTML = 'Click here to define terms';
    } else {
        document.getElementById('textshow7').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}




var addClassToShowSelected9 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow8').innerHTML = 'Click here to define the maximum consecutive lessons';
    } else {
        document.getElementById('textshow8').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}



var addClassToShowSelected10 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow9').innerHTML = 'Click here to define the maximum allowed gaps per week';
    } else {
        document.getElementById('textshow9').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}



var addClassToShowSelected11 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow10').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow10').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}


var addClassToShowSelected12 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow11').innerHTML = 'All new classes will be allowed to gaps';
    } else {
        document.getElementById('textshow11').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}


var addClassToShowSelected13 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow12').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow12').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected14 = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes"){
        document.getElementById('textshow13').innerHTML = 'Click here to enable 0th period';
    } else if (elem && elem.innerHTML == "Not Sure") {
        document.getElementById('textshow13').innerHTML = 'Click here to enable or disable 0th period';
    }
    else{
        document.getElementById('textshow13').innerHTML = '';
    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected15 = function(elem) {
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes") {

        document.getElementById('textshow14').innerHTML = 'Please Check this help link';
    } else {
        document.getElementById('textshow14').innerHTML = '';

    }

    var result = [].filter.call(allChildNodes, function (items, index) {

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function (item) {
        item.className = "dont-show";
    })
    elem.previousElementSibling.className = "";
}

var addClassToShowSelected16 = function(elem){
    var allChildNodes = elem.parentNode.childNodes;
    if (elem && elem.innerHTML == "Yes"){
        document.getElementById('textshow15').innerHTML = 'Please Check this help link';
    } else if (elem && elem.innerHTML == "Not Sure") {
        document.getElementById('textshow15').innerHTML = 'Please Check this help link';
    }
    else{
        document.getElementById('textshow15').innerHTML = '';
    }

    var result = [].filter.call(allChildNodes, function(items, index){

        return /^IMG/.test(items.nodeName);
    });
    result.forEach(function(item){
        item.className= "dont-show";
    })
    elem.previousElementSibling.className = "";
}

setView('Step1');


