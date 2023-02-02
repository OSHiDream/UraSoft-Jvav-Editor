	var code = '';
		function save(){
			code = document.getElementById('codetext').value;
			layer.msg('<b style="color:#000;display:inline-block;text-shadow:none;padding:0;margin:0">保存完成</b>',{time:600,icon:1,shift : 5,scrollbar:false,offset:'30px'});
		}
		function renamefile(){
			var newname = prompt('请输入新的项目名');
			if(newname){
				document.title = newname;
			}else if(newname === ''){
				return false
			}else{
				return false;
			}
		}
		function back(){
			layer.load(1,{shade:[.8,'rgba(0,0,0,.9)']});
			setTimeout("location.href='index.html'",400);
		}
		function download(){
			var name = document.getElementsByTagName('title')[0].innerText;
			var text = document.getElementById('codetext').value;
			var blob = new Blob ([text],{type:'jvr/jvr'});
			var oA = document.createElement('a');
			var url = window.URL.createObjectURL(blob);
			oA.download =  name + '.jvr';
			oA.href = url;
			document.body.appendChild(oA);
			oA.click();
			document.body.removeChild(oA);
		}
		function check_style(){
			var style = document.getElementById('style');
			var text_name = document.getElementById('text-name');
			if(style.getAttribute('href') === 'css/main.css'){
				style.setAttribute('href','css/night.css');
				text_name.innerHTML = '<span id="text-name">&#xe635;白昼主题</span>';
			}
			else{
				style.setAttribute('href','css/main.css');
				text_name.innerHTML = '<span id="text-name">&#xe63e;极域主题</span>';
			}
		}