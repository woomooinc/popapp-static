
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){
	Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
		sym.playReverse(0);
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height() + 200;
			var elemTop = $(elem).offset().top + 50;
			var elemBottom = elemTop + $(elem).height();

			return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
			  && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
		}

		if(isScrolledIntoView(sym.element)) {
			sym.playReverse(0);
			sym.play(0);
		} else {
			$(window).on("scroll", function(e) {
				if(isScrolledIntoView(sym.element)) {
					sym.playReverse(0);
					sym.play(0);
					$(window).off("scroll");
				}
			});
		}
	});
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-16923691");