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

    $("#addBurger").on("click", function(event) {
        console.log("CLICKED");
        event.preventDefault();
        const newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    $(".deleteburger").on("click", function(event) {
        event.preventDefault();
        console.log("CLICKED");
        const burgID = $(this).attr("data-id");
        console.log(burgID);

        $.ajax("/api/burgers/" + burgID, {
            method: "DELETE"
        }).then(function() {
            window.location = "/"
        });
    });
});