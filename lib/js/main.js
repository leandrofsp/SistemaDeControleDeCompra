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
		table += '<tr><td>'+ formatDesc(list[keys].desc) +'</td><td>'+ list[keys].amount +'</td><td> '+ formatValue(list[keys].value) +'</td><td> <button class="btn btn-default" onclick="setUpdate('+keys+');"> Edit </button> <button class="btn btn-default" onclick="deleteData('+keys+');"> Delete </button></td>';
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

function setUpdate(id){
	var obj = list[id];
	document.getElementById("desc").value = obj.desc;
	document.getElementById("amount").value = obj.amount;
	document.getElementById("value").value = obj.value;
	document.getElementById("btnUpdate").style.display = "inline-block";
	document.getElementById("btnAdd").style.display = "none";

	document.getElementById("inputIDUpdate").innerHTML = '<input type="hidden" id="idUpdate" value="'+id+'">';
}

function resetForm(){
	document.getElementById("desc").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";
	document.getElementById("btnUpdate").style.display = "none";
	document.getElementById("btnAdd").style.display = "inline-block";

	document.getElementById("inputIDUpdate").innerHTML = ""; 
}

function updateData(){
	var id = document.getElementById("idUpdate").value;
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;

	list[id] = { "desc":desc, "amount":amount, "value":value };
	resetForm();
	setList(list);
}

function deleteData(id){
	if (confirm("Delete this item")){
		if (id === list.length - 1) {
			list.pop();
		}else if (id === 0){
			list.shift();
		}else{
			var arrAuxIni = list.slice(0, id);
			var arrAuxEnd = list.slice(id + 1);
			list = arrAuxIni.concat(arrAuxEnd);

		}
		setList(list);
	}
}

setList(list);

console.log(getTotal(list));