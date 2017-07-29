let x : number = 10;

function add(x:number, y:number):number{
	return x + y;
}
add(10, 20);

interface IEmployee{
	id : number,
	name : string,
	salary : number,
	add : myFn
}

interface myFn{
	(x : number, y:number ) : number
}

let emp : IEmployee = {
	id : 100,
	name : 'Suresh',
	salary : 10000,
	add : function(x : number, y : number) : number{ 
		return x + y;
	}
};

