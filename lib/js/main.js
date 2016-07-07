var list = [
	{"desc":"rice","amount":"1","value":"5.40"},
	{"desc":"beer","amount":"12","value":"1.99"},
	{"desc":"meat","amount":"1","value":"15.00"}
];

function getTotal(list){
	var total = 0;
	for(var keys in list){
		total += list[keys].value * list[keys].amount;
	}
	return total;
}


function setList(list){
	var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
	for (var keys in list){
		table += '<tr><td>'+ formatDesc(list[keys].desc) +'</td><td>'+ list[keys].amount +'</td><td> '+ formatValue(list[keys].value) +'</td><td>Edit | Delete</td>';
	}
	table += '</tbody>';
	document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.chartAt(0).toUpperCase() + str.slice(1);
	return str;
}

function formatValue(value){
	var str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = "R$ " + str;
	return str;
}

function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

function formatValue(value){
	var str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = "R$ " + str;
	return str;
}

function addData(){
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;

	list.unshift({"desc":desc , "amount":amount , "value":value});
	setList(list);
}


setList(list);

console.log(getTotal(list));
