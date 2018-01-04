cost = {};
prev = {};
S = [];
result = [];

function prim( vertices , edges ) {
	
	cost = {};
	prev = {};
	S = [];
	result = [];
	v = [];
	for( var i = 0 ; i < vertices.length ; i++ ) {
		var u = vertices[i];
		cost[u] = Number.MAX_SAFE_INTEGER;
		v.push( { vertex : vertices[i] , weight : cost[u]  });
		prev[u] = null;
	}
	vertices = v;
	
	console.log("Cost");
	console.log(cost);
	cost[vertices[0].vertex] = 0;
	build_min_heap(vertices);
	
	while ( vertices.length != 0 ) {

		result.push({ MST_S : S.slice() , MST_V_S : vertices.slice() , previous : JSON.parse(JSON.stringify(prev)) , cost : JSON.parse(JSON.stringify(cost))   });
		
		var v = heap_extract_min(vertices);
		
		S.push(v);
		
		for ( var i = 0 ; i < edges.length ; i++ ) {
			if( edges[i].source == v.vertex ) {
				z = edges[i].target;
				
				var test = false
				for( var l = 0 ; l < S.length ; l++ )
				{
					if( S[l].vertex == z )
					{
						test = true;
					}
				}			
				if( cost[z] > edges[i].weight && !test ) {
					cost[z] = edges[i].weight;
					prev[z] = v.vertex;
					
					for( var d = 0 ; d < vertices.length ; d++ )
					{
						if( vertices[d].vertex == z )
						{
							vertices[d].weight = cost[z];
							break;
						}
					}
					
					build_min_heap(vertices);
				}
			}
			
			if( edges[i].target == v.vertex ) {
				z = edges[i].source;
				
				var test = false
				for( var l = 0 ; l < S.length ; l++ )
				{
					if( S[l].vertex == z )
					{
						test = true;
					}
				}
				
				if( cost[z] > edges[i].weight && !test ) {
					cost[z] = edges[i].weight;
					prev[z] = v.vertex;
					
					for( var d = 0 ; d < vertices.length ; d++ )
					{
						if( vertices[d].vertex == z )
						{
							vertices[d].weight = cost[z];
							break;
						}
					}
					
					build_min_heap(vertices);
				}
			}
			
		}
	
	}
	
	result.push({ MST_S : S.slice() , MST_V_S : vertices.slice() , previous : JSON.parse(JSON.stringify(prev)) , cost : JSON.parse(JSON.stringify(cost))   });
		
	return result;
}
