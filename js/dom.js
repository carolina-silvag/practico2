function add(){
	/*tomo texto de textareaa*/
	var comments= document.getElementById('comment').value;
	if (comments.length >0) {
		/*limpealo del textarea*/
		document.getElementById('comment').value = '';
		/*el div en donde estan los comentario el html*/
		var newComments= document.createElement('div');
		var cont = document.getElementById('cont');

		/*crear un check*/
		var check= document.createElement('input');
		check.type = 'checkbox';

		/*texto despues del check*/
		var paragraph= document.createElement('p');
		paragraph.classList.add('color');
		var nodoText=document.createTextNode(comments);
		paragraph.appendChild(nodoText);

		var heart = document.createElement('i');/*esto es para el corazon*/
		heart.classList.add('fa', 'fa-heart', 'heart');

		var trash = document.createElement('i');/*esto es para la basura*/
		trash.classList.add('fa', 'fa-trash', 'trash');

		/*agregar todos los huerfanos al padre(contenedor)*/
		newComments.appendChild(check);
		newComments.appendChild(trash);
		newComments.appendChild(heart);
		newComments.appendChild(paragraph);
		cont.appendChild(newComments);

		check.addEventListener('click', function(){
			paragraph.classList.toggle('strike-out')
		})
		/*creas un evento*/
		trash.addEventListener('click', function(){
			cont.removeChild(newComments);
		})

		heart.addEventListener('click', function(){
			heart.classList.toggle('red');
		})
	}else{
		alert('Debe ingresar un texto');
	}
}




