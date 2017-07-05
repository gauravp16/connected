var _ = require('underscore');

function Connected(no_of_elements)
{
	this.Nodes = [];
	this.Total = no_of_elements;
}

function getRandomArbitrary(max,min) {
    	return Math.random() * (max - min) + min;
}

Connected.prototype = function() {
	function root(connected, node){
		if(node == undefined || node === null || node.Parent === undefined || node.Parent === null)
			return node;

		if(node.Parent.Id === node.Id)
			return node;

		node.Parent = root(connected, node.Parent);
		return node.Parent;
	}

	function get(connected, actual){
		/*_.each(connected.Nodes, function(node){
			if(node.Actual === actual)
				return node;
		});*/
		for(var i = 0; i < connected.Nodes.length; i++){
			if(connected.Nodes[i].Actual === actual)
				return connected.Nodes[i];
		}
		return null;
	}

	function getOrCreate(connected, actual){
		var node = get(connected, actual);
		if(node === null){
			node = 
			{
				Actual : actual,
				Id : getRandomArbitrary(connected.Total, 0),
				Size : 1
			};
			node.Parent = null;
			connected.Nodes.push(node);
		}
		return node;
	}

	return {
		find: function(p,q){
			var pNode = get(this, p);
			if(pNode === null)
				return false;

			var qNode = get(this, q);
			if(qNode === null)
				return false;

			if(root(this, pNode) === root(this, qNode))
				return true;
			return false;
		},

		connect: function(p,q){
			var pNode = getOrCreate(this, p);
			var qNode = getOrCreate(this, q);

			var pRoot = root(this, pNode);
			var qRoot = root(this, qNode);

			if(pRoot === qRoot)
				return;

			if(pRoot.Size > qRoot.Size){
				qRoot.Parent = pRoot;
				pRoot.Size += qRoot.Size;
			}
			else{
				pRoot.Parent = qRoot;
				qRoot.Size += pRoot.Size;
			}
		}
	};
}();

module.exports = Connected;
