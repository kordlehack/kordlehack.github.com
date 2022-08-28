//exporte les données sélectionnées
var $table = $('#table');
    $(function () {
        $('#toolbar').find('select').change(function () {
            $table.bootstrapTable('refreshOptions', {
                exportDataType: $(this).val()
            });
        });
    })

		var trBoldBlue = $("table");

	$(trBoldBlue).on("click", "tr", function (){
			$(this).toggleClass("bold-blue");
	});

    
document.addEventListener("dragover", function(e){
    e = e || window.event;
    var dragX = e.pageX, dragY = e.pageY;

    console.log("X: "+dragX+" Y: "+dragY);
}, false);

//  jQuery

$("body").bind("dragover", function(e){
    var dragX = e.pageX, dragY = e.pageY;

    console.log("X: "+dragX+" Y: "+dragY);
});