// ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
// |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
// |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|

module.exports = function main(num) {
	//establish code list for number 0~9
    var number = ["._.", "...", "|.|", "..|", "._|", "|_|", "|_."];
	var numcode = [
		 [number[0],number[1],number[0],number[0],number[1],number[0],number[0],number[0],number[0],number[0]],
		 [number[2],number[3],number[4],number[4],number[5],number[6],number[6],number[3],number[5],number[5]],
		 [number[5],number[3],number[6],number[4],number[3],number[4],number[5],number[3],number[5],number[3]]
	];
	//split num into single number 
	var numarray = num.split('');
	var actual = [];
	
	for (var i= 0; i < numarray.length; i++)
	{
		for(var j = 0; j < 10; j++)
		{	
			var  temp = parseInt(numarray[j]); 
			actual.push(numcode[temp][i]);
			actual.join(' ');
		}
		actual.push("\n");		
	}			
    return actual;
};
