$(function() {

    $(".eatburger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredBurger = {
            devoured : 1
        };

        console.log(id);
        console.log(devouredBurger);
        console.log("CLICKED");
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".")
});