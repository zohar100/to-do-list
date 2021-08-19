//on click specific todo action line through
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//add todo to list
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        console.log(event.which);
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});