


$(document).ready(function () {
    $("ul.Destaque li img").hover(function () {
        $("ul.Destaque li img").not(this).stop().fadeTo(400, 0.3)

    }, function () {
        $("ul.Destaque li img").stop().fadeTo(400, 1)

    })
})
 
