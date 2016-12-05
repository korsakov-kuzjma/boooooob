/**
 * Created by Kuzjma on 05.12.2016.
 */
var forma = '<form><div class="form-group text-center"><div class="btn-group" data-toggle="buttons"><label class="btn btn-default active btn-lg"> <input type="radio" name="options" id="option1" checked> О здравии </label><label class="btn btn-default btn-lg"><input type="radio" name="options" id="option2"> О упокоении</label></div></div><div id="inptext"><div class="form-group" ><input type="text" class="form-control input-lg" placeholder="Введите имя"></div></div><div class="form-group text-right"><button class="btn btn-danger btn-sm" type="button" id="button-add-name"> Добавить еще одно имя <span class="glyphicon glyphicon-plus"></span></button></div><div class="form-group"><label for="fc">Укажите срок:</label><select class="form-control input-sm" id="fc"><option>Сорокоуст (40 дней)</option><option>На полгода (6 мес.)</option><option>На один год (12 мес)</option></select></div><div class="form-group text-center"><button class="btn btn-primary btn-lg btn-block" type="button">Рассчитать пожертвование</button></div><div class="form-group text-center"><button class="btn btn-warning btn-xs" type="button" id="button-reset">Рассчитать пожертвование</button></div></form>';
var inpt = '<div class="form-group"><input type="text" class="form-control input-lg" placeholder="Введите имя"></div> ';
var i = 1;

$(document).ready(function(){
    mm();
   


});

function mm() {
    $("#content").html(forma);
    
    $("#button-add-name").click(function (e) {
        i++;
        console.log(i);
        $("#inptext").append(inpt);
        if (i==3) {
            $("#button-add-name").attr("disabled", "disabled");
        }
    });
    
    $("#button-reset").click(mm);
};