
function validaForm(){
	
	if( !$('input[name="brother"]').is(':checked') ){
		alert('Por favor, escolha um brother para eliminar.');
		return false;
	}
	return true;
}
var csrftoken = {{ csrf_token() }}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken)
        }
    }
})

