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
        if (kolzap > 0) {
            $("#content").html(lll(tt1, tt2, tt3, summa));
            $("#button-over").click(function () {
                i = 1;
                mm();
            });
        }
        
    });

    $("#button-reset").click(function () {
        i = 1;
        mm();
    });
};

function lll(tt1, tt2, tt3, summa) {
    var otv = '<div class="form-group text-left well"><p><strong>Проверьте корректность введенных данных:</strong></p><p>' + tt3 + ' ' + tt1 + ' ' + tt2 + '. Пожертвование на сумму: ' + summa + ' рублей</p><div class="form-group text-center"><button class="btn btn-warning" type="button" id="button-over">Изменить данные</button></div></div>';
    var otv1 = '<form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml" target="_top"> '+
       ' <input type="hidden" name="receiver" value="410012561722752">'+
      '  <input type="hidden" name="formcomment" value="Свято-Троицкий монастырь: пожертвование">'+
       ' <input type="hidden" name="short-dest" value="Пожертвование Свято-Троицкому монастырю">'+
      ' <input type="hidden" name="label" value=".">'+
        ' <input type="hidden" name="successURL" value="https://vk.com/selengmon">'+

       ' <input type="hidden" name="quickpay-form" value="donate">'+
       ' <input type="hidden" name="targets" value="' + tt3 + ' ' + tt1 + ' ' + tt2 +
        '">'+
        '<input type="hidden" name="sum" value="' + summa +
        '" data-type="number">'+
       ' <input type="hidden" name="comment" value="' + tt3 + ' ' + tt1 + ' ' + tt2 + 
    '">'+
       ' <input type="hidden" name="need-fio" value="false">'+
       ' <input type="hidden" name="need-email" value="false">'+
       ' <input type="hidden" name="need-phone" value="false">'+
       ' <input type="hidden" name="need-address" value="false">'+

            '<div class="form-group text-center"><div class="btn-group" data-toggle="buttons">' +
       ' <label class="btn btn-default btn-lg"><input type="radio" name="paymentType" value="PC">Яндекс.Деньгами</label>'+
       ' <label class="btn btn-default active btn-lg"><input type="radio" name="paymentType" value="AC" checked>Банковской картой</label>'+
            '</div></div>' +
   ' <div class="form-group text-center"><input class="btn btn-primary btn-lg btn-block" type="submit" value="Перевести"></div>'+
       ' </form>'
    return otv + ' ' + otv1;
}
