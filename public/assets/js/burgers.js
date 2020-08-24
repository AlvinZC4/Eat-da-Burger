$(function() {
    $(".create-burger").on("submit", function(event) {
        event.preventDefault()

        const newBurger = {
            name: $("#burgername").val().trim()
        }
        console.log("New burger going out ", newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger created")
                location.reload()
            }
        )
    })

    // $(".devour").on("click", function() {
    //     const id = $(this).data("id")
    //     const eaten = {
    //         devoured: true
    //     }
    //     $.ajax("/api/burgers/" + id, {
    //         type: "PUT",
    //         data: eaten
    //     }).then(
    //         function(){
    //             console.log("Devoured is now " + true)
    //             location.reload
    //         }
    //     )
    // })
})