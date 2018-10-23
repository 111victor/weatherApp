console.log('Starting app');

setTimeout(()=>{
	console.log('Inside of a callback');
},2000);

setTimeout(()=>{
	console.log('Inside of a callback2');
}，0);

console.log('Finishing up');
