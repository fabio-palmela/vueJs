new Vue({
	el: '#desafio',
	data: {
		alternarCor: false,
		quadrado: 'div-quadrado',
		verde: 'div-verde',
		classeUser: 'destaque div-quadrado',
		style5: {
			height: '50px',
			width: '100px'
		},
		cor5: '',
		percentual: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(function(){
				console.log(this.alternarCor);
				this.alternarCor = !this.alternarCor
			}.bind(this), 1000)
		},
		iniciarProgresso() {
			let valor = 0;
			let pixelProgress = 1;
			temporizador = setInterval(() => {
				valor = valor + pixelProgress;
				this.percentual = `${valor}%`;
				if(valor == 100) 
					clearInterval(temporizador);
			}, 10)
		}
	}
})
