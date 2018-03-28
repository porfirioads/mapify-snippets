$(function () {
    $("img[usemap]:first").mapify({
        popOver: {
            content: function (zone) {
                return "<p>Lorem ipsum dolor sit amet, harum iisque " +
                    "molestie ad sea, ea tempor placerat sit. Qui veri " +
                    "copiosae cu. Cu erant eligendi adipiscing mea, ei " +
                    "tale eros eum. Pro at tractatos percipitur. Duo ex " +
                    "salutatus voluptatibus, rebum feugait ad est. Sea " +
                    "ex porro aperiri perfecto, eos tantas epicuri " +
                    "mnesarchum at, ea altera voluptaria qui. Id mel " +
                    "apeirian dignissim persequeris, vel an vitae " +
                    "delicata.</p>" +

                    "<p>Posse assum laudem pro an. Usu ut soluta eirmod " +
                    "legendos, in dicunt fierent vim. Vix quaestio " +
                    "atomorum praesent in, nec at periculis omittantur. " +
                    "Duo te clita verear veritus.</p>";
            },
            delay: 0.7,
            margin: "0",
            //width: "260px"
        },
        onAreaHighlight: function () {
            console.log("onAreaHighlight callback");
        },
        onMapClear: function () {
            console.log("onMapClear callback");
        }
    });
});