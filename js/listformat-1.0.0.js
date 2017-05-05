;(function($){
				$.fn.extend({
					listformat:function(opts){
						var defaults={
								data:[]
							}
						var settings = $.extend({}, defaults, opts);
						$(this).hide();
						$(this).each(function(index,item){
							var htmlstr='<ul class="kdlistul">';
							var predata="";
							$(settings.data).each(function(listindex,listitem){
								var myday="";
								if(predata!=listitem.day)
								{
									myday=listitem.day
									predata=myday;
								}
								if(listitem.iscurrent=="true")
								{
									htmlstr+='<li><b class="current"></b><span class="day">'+myday+'</span><span class="date">'+listitem.date+'</span> <span class="time">'+listitem.time+'</span><span class="msg">'+listitem.msg+'</span><div class="clearboth"></div></li>';
								}
								else
								{
									htmlstr+='<li><b></b><span class="day">'+myday+'</span><span class="date">'+listitem.date+'</span> <span class="time">'+listitem.time+'</span><span class="msg">'+listitem.msg+'</span><div class="clearboth"></div></li>';
								}
								
							});	
							htmlstr+='</ul>';
							$(item).html(htmlstr);
							$("ul.kdlistul>li:first").append("<p class='firstline'></p>");
							$("ul.kdlistul>li:last").append("<p class='lastline'></p>");
							
							setTimeout(function(){
								var firstliheight=$("ul.kdlistul>li:first").height();
								//var lastliheight=$("ul.kdlistul>li:last").height();
								$("ul.kdlistul p.firstline").height(firstliheight-27);
								
							},100)
							
							
						});
						$(this).show();
						return this;
					}
				});
})(jQuery);		