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
	document.getElementById("totalValue").innerHTML = formatValue(total);
	
}


function setList(list){
	var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
	for (var keys in list){
		table += '<tr><td>'+ formatDesc(list[keys].desc) +'</td><td>'+ list[keys].amount +'</td><td> '+ formatValue(list[keys].value) +'</td><td> <button class="btn btn-default" onclick="setUpdate('+keys+');"> Edit </button> <button class="btn btn-default" onclick="deleteData('+keys+');"> Delete </button></td>';
	}
	table += '</tbody>';
	document.getElementById("listTable").innerHTML = table;

	document.getElementById("errors").style.display = "none";
	getTotal(list);
	saveListStorage(list);
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
	if (!validation()){
		return;
	}
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;

	list.unshift({"desc":desc , "amount":amount , "value":value});
	setList(list);
	resetForm();
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
	document.getElementById("errors").style.display = "none";
}

function updateData(){
	if (!validation()){
		return;
	}
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

function validation(){
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;

	var errors = "";

	if(desc === ""){
		errors += '<p>Fill out Description</p>';
	}
	if (amount === "") {
		errors += '<p> Fill out a Qquantity</p>';
	}else if (amount != parseInt(amount)){
		errors += '<p> Fill out a valid amount</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(value)){
		errors += '<p>Fill out a valid value</p>';
	}

	if (errors != "") {
		document.getElementById("errors").style.display = "block";
		document.getElementById("errors").style.backgroundColor = "#ccc";
		document.getElementById("errors").style.color = "#fff";
		document.getElementById("errors").style.padding = "10px";
		document.getElementById("errors").style.margin = "10px";
		document.getElementById("errors").style.borderRadius = "13px";

		document.getElementById("errors").innerHTML = "<h3> Error:</h3>" + errors;
		return 0;
	}else{
		return 1;
	}
}

function deleteList(){
	if (confirm("Delete this list?")) {
		list = [];
		setList(list);
	}
}

function saveListStorage(){
	var jasonStr = JSON.stringify(list);
	localStorage.setItem("list", jasonStr);
}

function initListStorage(){
	var testList = localStorage.getItem("list");
	if(testList){
		list = JSON.parse(testList);	
	}
	setList(list);
}

initListStorage();