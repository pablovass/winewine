let uri= 'http://localhost/api/product'

let extensionFiltro='/filter'

let extension='/'

let valorExtencion;

function getPost(u){
	return u;
    //return fetch(u);
}

function createUri(){
 	process.stdout.write('elije la extencion: ')
 	console.log('1 = filter')
 	console.log('2 = todos')

	
	process.stdin.once('data',numero =>{
 		let modulo = numero,
 		extend = `http://localhost/api/product/${numero}`,
 		extend2 =`http://localhost/api/product/filter`,

 		residuo = (modulo==1)?extend:extend2

 	process.stdout.write(residuo)
 	 console.log('\n es: '+ getPost(residuo))

 	process.exit()
 	})
 

 }
 createUri()
