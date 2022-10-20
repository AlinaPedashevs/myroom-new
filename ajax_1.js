/* Article FructCode.com */

new Validator(document.querySelector('#ajax_form_2'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_2").click(
		function(){
			sendAjaxForm_2('result_form_2', 'ajax_form_2', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_2(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
           if( $("form#ajax_form_2 .hostel__input3").val() && $("form#ajax_form_2 .hostel__input2").val()){
                  	$('#result_form_2').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form_2').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
}
new Validator(document.querySelector('#ajax_form_1'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_1").click(
		function(){
			sendAjaxForm_1('result_form_1', 'ajax_form_1', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_1(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
            if( $("form#ajax_form_1 .hostel__input3").val() && $("form#ajax_form_1 .hostel__input2").val()){
                  	$('#result_form_1').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form_1').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });

     
}
new Validator(document.querySelector('#ajax_form_4'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_4").click(
		function(){
			sendAjaxForm_4('result_form_4', 'ajax_form_4', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_4(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
             if( $("form#ajax_form_4 .hostel__input3").val() && $("form#ajax_form_4 .hostel__input2").val()){
                  	$('#result_form_4').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
         }
         else{
             
             	 	$('#result_form_4').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
         }
        });
}
new Validator(document.querySelector('#ajax_form_5'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_5").click(
		function(){
			sendAjaxForm_5('result_form_5', 'ajax_form_5', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_5(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
             if( $("form#ajax_form_5 .hostel__input3").val() && $("form#ajax_form_5 .hostel__input2").val()){
                  	$('#result_form_5').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
             }
             else{
             
             	 	$('#result_form_5').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
              }
        });
}
new Validator(document.querySelector('#ajax_form_6'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_6").click(
		function(){
			sendAjaxForm_6('result_form_6', 'ajax_form_6', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_6(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
           if( $("form#ajax_form_6 .hostel__input3").val() && $("form#ajax_form_6 .hostel__input2").val()){
                  	$('#result_form_6').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
             }
             else{
             
             	 	$('#result_form_6').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
              }
        });
}
new Validator(document.querySelector('#ajax_form_7'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_7").click(
		function(){
			sendAjaxForm_7('result_form_7', 'ajax_form_7', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_7(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
           if( $("form#ajax_form_7 .hostel__input3").val() && $("form#ajax_form_7 .hostel__input2").val()){
                  	$('#result_form_7').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
             }
             else{
             
             	 	$('#result_form_7').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
              }
        });
}
new Validator(document.querySelector('#ajax_form_7'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_8").click(
		function(){
			sendAjaxForm_8('result_form_8', 'ajax_form_8', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_8(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
           if( $("form#ajax_form_8 .hostel__input3").val() && $("form#ajax_form_8 .hostel__input2").val()){
                  	$('#result_form_8').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
             }
             else{
             
             	 	$('#result_form_8').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
              }
        });
}
new Validator(document.querySelector('#ajax_form_7'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_").click(
		function(){
			sendAjaxForm_('result_form_', 'ajax_form_', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
            if( $("form#ajax_form_ .hostel__input3").val() && $("form#ajax_form_ .hostel__input2").val()){
                  	$('#result_form_').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
             }
             else{
             
             	 	$('#result_form_').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
              }
        });
}
new Validator(document.querySelector('#ajax_form_15'), function (err, res) {
    return res;
});
        
$( document ).ready(function() {
    $("#btn_15").click(
		function(){
			sendAjaxForm_15('result_form_15', 'ajax_form_15', 'handler.php');
			return false; 
		}
	);
});
function sendAjaxForm_15(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        
        
        dataType: "html", //формат данных
       
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    }).done(function() {
            if( $("form#ajax_form_15 .hostel__input3").val() && $("form#ajax_form_15 .hostel__input2").val()){
                  	$('#result_form_15').html("<p>Дякую за заявку! Скоро ми з вами зв'яжемося.</p>");
             }
             else{
             
             	 	$('#result_form_15').html("<p class='err'>Заповніть будь ласка обов'язково поля</p>");
              }
        });
}