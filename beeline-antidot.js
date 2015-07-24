function cureIframes(){
	var iframes=document.getElementsByTagName('iframe');
	var len=iframes.length;
	var m1b3f0rm=/\/m1b3f0rm$/;
	for(var i=0; i<len;i++){
		console.log(iframes[i].outerHTML);
		if(iframes[i].src && iframes[i].src.match(m1b3f0rm)){
			iframes[i].src=iframes[i].src.replace(m1b3f0rm,'');
		}else if(iframes[i].outerHTML.match(/src="" https:="" /)){
			var outer=iframes[i].outerHTML;
			//Браузеры видят это примерно так:
			//<iframe width="100%" src="" https:="" beeline-antidot.github.io="" sample-https-page.html?123""=""></iframe>
			outer=outer.
				//Чиним начало повреждённого src
				replace('src="" https:="" ','src="https://').
				//А теперь конец
				replace('""=""','"').
				//И всё остальное
				replace(/=""\s/g,'/');
			iframes[i].outerHTML=outer;
		}
	}
}
