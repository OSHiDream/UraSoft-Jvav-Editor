var arr = [123, 17, 18];
			document.oncontextmenu = new Function("event.returnValue=false;"),//禁用右键
			
			window.onkeydown = function (e) {
			 var keyCode = e.keyCode || e.which || e.charCode;
			 var ctrlKey = e.ctrlKey || e.metaKey;
			 console.log(keyCode + "--" + keyCode);
			 if (ctrlKey && keyCode == 85) {
			 console.log("ctrl+u");
			 e.preventDefault();
			 }
			 if (arr.indexOf(keyCode) > -1) {
			 console.log("其他");
			 e.preventDefault();
			 }
			 //e.preventDefault();
			 //return false;
			}