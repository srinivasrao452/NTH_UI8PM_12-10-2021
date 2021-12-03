

function insert(num){
    $(".calculator_display").val( $(".calculator_display").val()+ num )
}

function c(){
    $(".calculator_display").val("");
}

function equl(){
    $(".calculator_display").val(
        eval($(".calculator_display").val())
    )
}

function del(){
    value = $(".calculator_display").val();   // 6789

    $(".calculator_display").val(
        value.substring(0, value.length-1)
    )
}

