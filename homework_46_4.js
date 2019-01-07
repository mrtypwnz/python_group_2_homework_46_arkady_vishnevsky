	let Duck = {
		name: 'Дональд',
		color: 'белый',
		old: 1,
	toStr: function(){
		alert(`${Duck.name}, ${Duck.color}, ${Duck.old} год`);
		},
		say: function(){
			alert('Кря кря');
		}
	}
	Duck.toStr();
	Duck.say();