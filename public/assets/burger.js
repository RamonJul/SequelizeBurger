$(document).ready(function () {
    document.getElementById("burger").addEventListener("click", function () {

        var name = document.getElementById("new_burger").value
        if (name != "") {
            $.post(`/api/burger/${name}`).then(function () {
                location.reload()
            })
        } else {
            document.getElementById("new_burger").style.border = " 10px solid red"
        }
    })

    function eaten() {
        var id = this.getAttribute("data-id")

        $.ajax(`/api/burger/${id}`, {
            type: "PUT",
        }).then(function () {
            location.reload()
        })
    }

    function remove() {
        var id = this.getAttribute("data-id")

        $.ajax(`/api/burger/${id}`, {
            type: "DELETE",
        }).then(function () {
            console.log("delete")
            location.reload()
        })
    }


    var buttons = document.getElementsByClassName("eat")

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", eaten)
    }

    var x = document.getElementsByClassName("remove")
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener("click", remove)
    }

})