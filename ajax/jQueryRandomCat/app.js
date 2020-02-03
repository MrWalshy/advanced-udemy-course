$("#newCatBtn").click(() => {
    $.getJSON("http://aws.random.cat/meow")
    .done((data) => {
        console.log(data)
        $("#imgDisplay").attr("src", data.file);
    })
    .fail(() => {
        console.log("Error");
    })
});