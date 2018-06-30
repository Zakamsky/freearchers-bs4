$(function() {

	// Custom JS



});
    // сокрытие меню на мобилках по клику
$(document).on('click', function(){
    $('.collapse').collapse('hide');
})


$('#tiryModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var tir = button.data('tir') // Extract info from data-* attributes
    var cost = button.data('cost') // Extract info from data-* attributes
    var addcost = button.data('addcost') // Extract info from data-* attribut
//        var range = $('#range').slider("option", "value")

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Заказ тира "' + tir + '"')
//        modal.find('.modal-body .valrange').text(range)
    modal.find('.modal-body #tir').val(tir)
    modal.find('.modal-body #cost').val(cost)
    modal.find('.modal-body #addcost').val(addcost)

})
