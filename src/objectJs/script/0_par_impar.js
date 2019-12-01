 function parImpar(){
 	process.stdout.write('ingresa un numero: ')


 	process.stdin.once('data',numero =>{
 		let modulo = numero % 2,
 		par = `El numero es ${numero} es par`,
 		impar=`el numero ${numero}es Impar`,

 		residuo= (modulo===0)?par:impar

 	process.stdout.write(residuo)
 	process.exit()
 	})
 

 }
 parImpar()