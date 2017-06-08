// ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
// |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
// |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|

module.exports = function main(num) {
	//establish code list for number 0~9
    var number = ["._.", "...", "|.|", "..|", "._|", "|_|", "|_."];
	var numcode = {
		 '0':[number[0],number[2],number[5]],
		 '1':[number[1],number[3],number[3]],
		 '2':[number[0],number[4],number[6]],
		 '3':[number[0],number[4],number[4]],
		 '4':[number[1],number[5],number[3]],
		 '5':[number[0],number[6],number[4]],
		 '6':[number[0],number[6],number[5]],
		 '7':[number[0],number[3],number[3]],
		 '8':[number[0],number[5],number[5]],
		 '9':[number[0],number[5],number[3]]
	};
	//split num into single number 
	var numarray = num.split('');
	var actual = [];
	
	for (var i= 0; i < numarray.length; i++)
	{
		for(var j = 0; j < numcode[numarray[i]].length; j++)
		{	
			actual.push(numcode[numarray[i]][j]);	
		}
		actual.join(' ');
		actual.push("\n");		
	}			
    return actual;
};
