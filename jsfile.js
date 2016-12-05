/**
 * Created by Kuzjma on 05.12.2016.
 */
var i = 1;

$(document).ready(function(){
    mm();
});

function inptt(i) {
    return '<div class="form-group"><input type="text" class="form-control input-lg" placeholder="Введите имя" id="name' + i + '"></div>'
}

function formaa(i) {
    return '<form><div class="form-group text-center"><div class="btn-group" data-toggle="buttons"><label class="btn btn-default active btn-lg">' +
        '<input type="radio" name="options" value="O здравии" checked> О здравии </label><label class="btn btn-default btn-lg">' +
        '<input type="radio" name="options" value="О упокоении"> О упокоении</label></div></div><div id="inptext">' + inptt(i) +
        '</div><div class="form-group text-right">' +
        '<button class="btn btn-danger btn-sm" type="button" id="button-add-name"> Добавить еще одно имя <span class="glyphicon glyphicon-plus">' +
        '</span></button></div><div class="form-group"><label for="fc">Укажите срок:</label><select class="form-control input-sm" id="fc">' +
        '<option>Сорокоуст (40 дней)</option><option>На полгода (6 мес.)</option><option>На один год (12 мес)</option></select></div>' +
        '<div class="form-group text-center"><button class="btn btn-primary btn-lg btn-block" type="button" id="button-submit">Рассчитать пожертвование</button></div>' +
        '<div class="form-group text-center"><button class="btn btn-warning btn-xs" type="button" id="button-reset">Очистить форму</button></div></form>';
}

function mm() {
    $("#content").html(formaa(i));
    
    $("#button-add-name").click(function (e) {
        i++;
        console.log(i);
        $("#inptext").append(inptt(i));
        if (i==3) {
            $("#button-add-name").attr("disabled", "disabled");
            $("#button-add-name").html("Не больше 3 имен за один раз");
        }
    });

    $("#button-submit").click(function () {
        var tt1 = $("input:radio[name=options]:checked").val();
        var tt2 = $("select#fc").val();

        var tt3 = "";
        var kolzap = 0;
        for (b=0; b<i; b++){
            var k = "#name" + (b+1);
            if ($(k).val() != "") {
                tt3 = tt3 + " " + $(k).val();
                kolzap++;
            }
        }

        var cena;
        switch (tt2) {
            case 'Сорокоуст (40 дней)':
                cena = 150;
                break;
            case 'На полгода (6 мес.)':
                cena = 300;
                break
            case 'На один год (12 мес)':
                cena = 500;
                break
        }
        
        var summa = kolzap * cena;


        console.log(tt1, tt2, tt3, kolzap, cena, summa);


    });
    
    $("#button-reset").click(function () {
        i = 1;
        mm();
    });
};