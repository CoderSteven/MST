/*
vertices = [ 0 , 1, 2, 3 , 4 , 5 ];
edges = [ 	{ source : 0 , target : 2 , weight : 6 } , 
		  	{ source : 2 , target : 4 , weight : 5 } ,
		 	{ source : 0 , target : 1 , weight : 5 } ,
			{ source : 1 , target : 3 , weight : 2 } ,
			{ source : 3 , target : 5 , weight : 4 } ,
			{ source : 2 , target : 3 , weight : 2 } ,
			{ source : 4 , target : 5 , weight : 4 } ,
			{ source : 0 , target : 3 , weight : 4 } ,
			{ source : 2 , target : 5 , weight : 3 } ,
			{ source : 1 , target : 2 , weight : 1 }
		]; 
*/
parent = {};
rank = {};
X = [];

function makeset(x) {
	parent[x] = x;
	rank[x] = x;
}

function find(x) {
	while ( x != parent[x] ) {
		x = parent[x];
	}
	return x;
}

function union(x,y) {
	rx = find(x);
	ry = find(y);
	
	if( rx == ry ) {
		return;
	}
	
	if( rank[rx] > rank[ry] )
	{
		parent[ry] = rx;
	}
	else {
		parent[rx] = ry;
		if( rank[rx] == rank[ry] ) {
			rank[ry] = rank[ry] + 1;
		}
	}
	
}

function kruskal( vertices , edges ) {
	
	for( var i = 0 ; i < vertices.length ; i++ ) {
		makeset(vertices[i]);
	}
	

	edges.sort( function(a,b) { 
		return a.weight - b.weight;
	});
	
	console.log(edges);
	
	for( var i = 0 ; i < edges.length ; i++ ) {
		var e = edges[i];
		u = e.source;
		v = e.target;
		if( find(u) != find(v) ) {
			X.push(e);
			union(u,v);
		}	
	
	}
	
	return X;
		
}
