/* Article FructCode.com */

        new Validator(document.querySelector('#ajax_form1'), function (err, res) {
	        return res;
        });
      
        new Validator(document.querySelector('#ajax_form'), function (err, res) {
            return res;
        });
    

        new Validator(document.querySelector('#ajax_form2'), function (err, res) {
            return res;
        });
            new Validator(document.querySelector('#ajax_form4'), function (err, res) {
            return res;
        });
        
          new Validator(document.querySelector('#ajax_form5'), function (err, res) {
            return res;
        });
         new Validator(document.querySelector('#ajax_form6'), function (err, res) {
            return res;
        });
        new Validator(document.querySelector('#ajax_form7'), function (err, res) {
            return res;
        });
         new Validator(document.querySelector('#ajax_form8'), function (err, res) {
            return res;
        });
          
        new Validator(document.querySelector('#ajax_form15'), function (err, res) {
            return res;
        });
$( document ).ready(function() {
    $("#btn").click(
		function(){
		    
			sendAjaxForm('result_form', 'ajax_form', 'handler.php');
		
		}
	);
});

$( document ).ready(function() {
    $("#btn1").click(
		function(){
			sendAjaxForm1('result_form1', 'ajax_form1', 'handler.php');
		
		}
	);
})
$( document ).ready(function() {
    $("#btn2").click(
		function(){
			sendAjaxForm2('result_form2', 'ajax_form2', 'handler.php');
		
		}
	);
});
 



$( document ).ready(function() {
    $("#btn4").click(
		function(){
			sendAjaxForm4('result_form4', 'ajax_form4', 'handler.php');
			
		}
	);
});
$( document ).ready(function() {
    $("#btn5").click(
		function(){
			sendAjaxForm5('result_form5', 'ajax_form5', 'handler.php');
			
		}
	);
});
$( document ).ready(function() {
    $("#btn6").click(
		function(){
			sendAjaxForm6('result_form6', 'ajax_form6', 'handler.php');
		
		}
	);
});
$( document ).ready(function() {
    $("#btn7").click(
		function(){
			sendAjaxForm7('result_form7', 'ajax_form7', 'handler.php');
		}
	);
});

$( document ).ready(function() {
    $("#btn8").click(
		function(){
			sendAjaxForm8('result_form8', 'ajax_form8', 'handler.php');
		}
	);
});
$( document ).ready(function() {
    $("#btn15").click(
		function(){
			sendAjaxForm15('result_form15', 'ajax_form15', 'handler.php');
		}
	);
});


function sendAjaxForm15(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize()
 	}).done(function() {
             if( $("form#ajax_form15 .hostel__input2").val() && $("form#ajax_form15 .hostel__input1").val()){
                  	$('#result_form15').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form15').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
       
}

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize()
 	}).done(function() {
             if( $("form#ajax_form .hostel__input2").val() && $("form#ajax_form .hostel__input1").val()){
                  	$('#result_form').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
       
}
function sendAjaxForm1(result_form, ajax_form, url) {
   
   $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),
    }).done(function(data) {
      
         if( $("form#ajax_form1 .hostel__input2").val() && $("form#ajax_form1 .hostel__input1").val()){
                  	$('#result_form1').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form1').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
           
        });
}

function sendAjaxForm2(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),
    }).done(function(data) {
      
         if( $("form#ajax_form2 .hostel__input2").val() && $("form#ajax_form2 .hostel__input1").val()){
                  	$('#result_form2').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
           
             	 	$('#result_form2').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
           
        });
       
}

function sendAjaxForm_2(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
            $(this).find("input").val("");
            	$('#result_form_2').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
            $("#ajax_form_2").trigger("reset");
        });
       
}
function sendAjaxForm4(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),
    }).done(function(data) {
      
         if( $("form#ajax_form4 .hostel__input2").val() && $("form#ajax_form4 .hostel__input3").val()){
                  	$('#result_form4').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form4').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
           
        });
       
}
function sendAjaxForm5(result_form, ajax_form, url) {
   $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),
    }).done(function(data) {
      
         if( $("form#ajax_form5 .hostel__input2").val() && $("form#ajax_form5 .hostel__input3").val()){
                  	$('#result_form5').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form5').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
           
        });
       
}
function sendAjaxForm6(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
         data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {

         if( $("form#ajax_form6 .hostel__input2").val() && $("form#ajax_form6 .hostel__input3").val()){
                  	$('#result_form6').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form6').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
        
}
function sendAjaxForm7(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
          
         if( $("form#ajax_form7 .hostel__input2").val() && $("form#ajax_form7 .hostel__input3").val()){
                  	$('#result_form7').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form7').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
       
}
function sendAjaxForm8(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
             if( $("form#ajax_form8 .hostel__input2").val() && $("form#ajax_form8 .hostel__input3").val()){
                  	$('#result_form8').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form8').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
       
}
function sendAjaxForm15(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
             if( $("form#ajax_form15 .hostel__input2").val() && $("form#ajax_form15 .hostel__input1").val()){
                  	$('#result_form15').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form15').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
       
}