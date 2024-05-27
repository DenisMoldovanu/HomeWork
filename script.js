$(document).ready(function () {
    $(".color-item").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
    $(".memory-item").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
});
