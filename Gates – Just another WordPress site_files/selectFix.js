(function(e){e.fn.selectFix=function(t){e(this).each(function(){var n=e.extend({extraStyles:true,responsive:false,arrow:true,arrowWidth:20,arrowContent:"",className:"select",classText:"text",classArrow:"arrow",classFocus:"focused",classEnd:"selected",display:"inline-block"},t);var r="."+n.className;var i=e(this);i.css({"-webkit-appearance":"none","box-sizing":"border-box","-moz-box-sizing":"border-box","-webkit-box-sizing":"border-box",cursor:"pointer"});var s;if(i.children("option:selected").size()>0){s=i.children("option:selected").eq(0).text()}else{s=i.children("option").eq(0).text()}var o=i.css("height");var u=i.css("width").replace("px","");var a;if(n.responsive){a=100*parseInt(u.replace("px",""))/parseInt(i.parent().css("width").replace("px",""))+"%"}else{a=u+"px"}var f;var l=String(n.arrowWidth);if(l.indexOf("px")<0&&l.indexOf("%")<0){l=l+"px"}if(n.arrow==true){f='<span style="display: block; height: 100%; position: absolute; right: 0; width: '+l+';" class="'+n.classArrow+'">'+n.arrowContent+"</span>"}else{f=""}i.css({display:"block",left:0,opacity:0,position:"absolute",top:0,"z-index":1}).wrap('<div class="'+n.className+'"style="overflow: hidden; display: '+n.display+"; position: relative;  width: "+a+';"></div>').closest(r).append('<span style="display: block; left: 5px; height: '+o+'; line-height: inherit; position: absolute; top: 0; width: 100%;" class="'+n.classText+'">'+s+"</span>"+f);i.bind({change:function(e){i.siblings("."+n.classText).html(i.children("option[value="+i.val()+"]").text());if(n.extraStyles==true){i.parent(r).addClass(n.classEnd).removeClass(n.classFocus)}if(i.val()==""||i.val()==undefined||i.val()==null){i.parent(r).removeClass(n.classEnd)}},focus:function(t){if(n.extraStyles==true){i.parent(r).addClass(n.classFocus)}i.keyup(function(){i.siblings("."+n.classText).html(e(this).children("option:selected").text())})},click:function(){if(n.extraStyles==true){i.parent(r).addClass(n.classFocus)}},blur:function(){if(n.extraStyles==true){i.parent(r).removeClass(n.classFocus)}}});if(e(".stlyesFor"+n.className).size()<1){i.after('<style type="text/css" class="stlyesFor'+n.className+'">.'+n.className+" select {width: 100%;}</style>")}})}})(jQuery)