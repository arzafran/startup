<button id="vemos">Agregar</button>
<button id="borramos">Borrar</button>
<script>
$(document).ready(function(){
$('#vemos').click(function(){
var tontoyretonto = '{"title":"Tonto y Retonto","Anio":"2002"}';
localStorage.setItem('name',tontoyretonto);
console.log(localStorage.getItem('name'));
});

$("borramos").click(function(){
localStorage.clear();
alert('Datos enviados, su información ha sido borrada de localStorage');
});	
});	
</script>
