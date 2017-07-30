var app = (function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Consumer] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Consumer] result = ${result}`)
	}

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			//return result;
			if (typeof callback === 'function')
				callback(result);
		}, 5000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Consumer] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Consumer] result = ${result}`)	
		});
		
	}

	var addASyncEvents = (function(){
		var callbacks = [];
		function process(x,y){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				callbacks.forEach(callback => callback(result));
			}, 5000);
		}
		function subscribe(callback){
			if (typeof callback === 'function')
				callbacks.push(callback);
		}
		return {
			process : process,
			subscribe : subscribe
		}
	})();

	function addAsyncPromise(x,y){
		var p = new Promise(function(resolveFn, rejectFn){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				resolveFn(result);
			}, 5000);
		});
		return p;
	}



	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addASyncEvents : addASyncEvents,
		addAsyncPromise : addAsyncPromise
	}
})();