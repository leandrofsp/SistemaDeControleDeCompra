[1mdiff --git a/index.html b/index.html[m
[1mindex 5b5e643..7b8b700 100755[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -34,6 +34,7 @@[m
 				</span>[m
 				<button id="btnAdd" onclick="addData();" class="btn btn-default">Add</button>[m
 			</div>[m
[32m+[m			[32m<span id="errors"></span>[m[41m[m
 			<table id="listTable" class="table">[m
 			</table>[m
 		</div>[m
[1mdiff --git a/lib/js/main.js b/lib/js/main.js[m
[1mindex abebd14..c52cb5b 100755[m
[1m--- a/lib/js/main.js[m
[1m+++ b/lib/js/main.js[m
[36m@@ -105,6 +105,12 @@[m [mfunction deleteData(id){[m
 	}[m
 }[m
 [m
[32m+[m[32mfunction validation(){[m[41m[m
[32m+[m	[32mvar desc = document.getElementById("desc").value;[m[41m[m
[32m+[m	[32mvar amount = document.getElementById("amount").value;[m[41m[m
[32m+[m	[32mvar value = document.getElementById("value").value;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
 setList(list);[m
 [m
 console.log(getTotal(list));[m
\ No newline at end of file[m
