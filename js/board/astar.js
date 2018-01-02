function pathHeuristic(x1, y1, x2, y2) {
	// See list of heuristics: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
	var d1 = Math.abs (x2 - x1);
	var d2 = Math.abs (y2 - y1);
	return d1 + d2;
}

/**
* Arg node {x, y}
* return node {x, y, f, g, h, cost, visited, closed, parent}
*/
function initPathNode(x, y) {
	var node = {
		x : x,
		y : y,
		f : 0,
		g : 0,
		h : 0,
		cost : 1,
		visited : false,
		closed : false,
		parent : null,
	};
	return node;
}

function containPathNode(list, n) {
	for (var i = 0; i < list.length; ++i) {
		if (list[i].x == n.x && list[i].y == n.y) {
			return i;
		}
	}
	return -1;
}

function removePathNode(list, n) {
	var index = containPathNode(list, n);
	if (index != -1) {
		list = list.splice(index, 1);
	}
	return list;
}

function astar(startx, starty, endx, endy) {
	console.log("a* : " + startx + "-" + starty + " : " + endx + "-" + endy);
	var openList   = [];
	var closedList = [];
	openList.push(initPathNode(startx, starty));
	var security = 0;
	while(openList.length > 0) {
		if (++security == 500) {
			return;
		}
		var lowInd = 0;
		for(var i = 0; i < openList.length; ++i) {
			if(openList[i].f < openList[lowInd].f) {
				lowInd = i;
			}
		}
		var currentNode = openList[lowInd];
		if(currentNode.x == endx && currentNode.y == endy) {
			var curr = currentNode;
			var ret = [];
			while(curr.parent) {
				ret.push({x:curr.x,y:curr.y});
				curr = curr.parent;
			}
			return ret.reverse();
		}
		removePathNode(openList, currentNode);
		closedList.push(currentNode);
		// Find all neighbors for the current node.
		var neighbors = getPathChilds(currentNode.x, currentNode.y);
		for(var i = 0, il = neighbors.length; i < il; ++i) {
			//console.log("test neighbor");
			var neighbor = neighbors[i];
			//console.log(neighbor);
			if(containPathNode(closedList, neighbor) != -1) {
					// not a valid node to process, skip to next neighbor
					continue;
			}
			var gScore = currentNode.g + 1;
			var gScoreIsBest = false;

			if (containPathNode(openList, neighbor) == -1) {
				//console.log("push in open");
				// This the the first time we have arrived at this node, it must be the best
				// Also, we need to take the h (heuristic) score since we haven't done so yet
				gScoreIsBest = true;
				neighbor.h = pathHeuristic(neighbor.x, neighbor.y, endx, endy);
				openList.push(neighbor);
			} else if(gScore < neighbor.g) {
				// We have already seen the node, but last time it had a worse g (distance from start)
				//console.log("reevaluate");
				gScoreIsBest = true;
			}
			//console.log("check");
			if (gScoreIsBest) {
				// Found an optimal (so far) path to this node.	 Store info on how we got here and
				//	just how good it really is...
				neighbor.parent = currentNode;
				neighbor.g = gScore;
				neighbor.f = neighbor.g + neighbor.h;
				//neighbor.debug = "F: " + neighbor.f + "<br />G: " + neighbor.g + "<br />H: " + neighbor.h;
			}
		}
	}
	// No result was found - empty array signifies failure to find path.
	console.log("no result search path");
	return [];
}

function getPathChilds(x, y) {
	let ret = [];
	var v_ = board;
	if (v_[y - 1] !== undefined && v_[y - 1][x] !== undefined &&
		v_[y - 1][x].type != "wall" && hasNothingOnIt(x, y - 1)) {
		ret.push(initPathNode(x, y - 1));
	}
	if (v_[y] !== undefined && v_[y][x + 1] !== undefined &&
		v_[y][x + 1].type != "wall" && hasNothingOnIt(x + 1, y)) {
		ret.push(initPathNode(x + 1, y));
	}
	if (v_[y + 1] !== undefined && v_[y + 1][x] !== undefined &&
		v_[y + 1][x].type != "wall" && hasNothingOnIt(x, y + 1)) {
		ret.push(initPathNode(x, y + 1));
	}
	if (v_[y] !== undefined && v_[y][x - 1] !== undefined &&
		v_[y][x - 1].type != "wall" && hasNothingOnIt(x - 1, y)) {
		ret.push(initPathNode(x - 1, y));
	}
	return ret;
}

/**
 * Verifie s'il n'y a pas de joueurs ou d'objets impassable sur
 * le sol en x, y.
 */
function hasNothingOnIt(x, y) {
	for (id in players) {
		if (players[id].x == x && players[id].y == y) {
			return false;
		}
	}
	return true;
}