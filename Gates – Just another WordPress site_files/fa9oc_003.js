// source --> http://www.dynamicpress.eu/envato/gates1/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=3.5.6 
jQuery(function(e){if("undefined"==typeof wc_add_to_cart_params)return!1;var t=function(){e(document.body).on("click",".add_to_cart_button",this.onAddToCart).on("click",".remove_from_cart_button",this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart",this.updateCartPage).on("added_to_cart removed_from_cart",this.updateFragments)};t.prototype.onAddToCart=function(t){var a=e(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;t.preventDefault(),a.removeClass("added"),a.addClass("loading");var o={};e.each(a.data(),function(t,a){o[t]=a}),e(document.body).trigger("adding_to_cart",[a,o]),e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),o,function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?e(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)})}},t.prototype.onRemoveFromCart=function(t){var a=e(this),o=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),o.block({message:null,overlayCSS:{opacity:.6}}),e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),{cart_item_key:a.data("cart_item_key")},function(t){t&&t.fragments?e(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")}).fail(function(){window.location=a.attr("href")})},t.prototype.updateButton=function(t,a,o,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),r.addClass("added"),wc_add_to_cart_params.is_cart||0!==r.parent().find(".added_to_cart").length||r.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),e(document.body).trigger("wc_cart_button_updated",[r]))},t.prototype.updateCartPage=function(){var t=window.location.toString().replace("add-to-cart","added-to-cart");e(".shop_table.cart").load(t+" .shop_table.cart:eq(0) > *",function(){e(".shop_table.cart").stop(!0).css("opacity","1").unblock(),e(document.body).trigger("cart_page_refreshed")}),e(".cart_totals").load(t+" .cart_totals:eq(0) > *",function(){e(".cart_totals").stop(!0).css("opacity","1").unblock(),e(document.body).trigger("cart_totals_refreshed")})},t.prototype.updateFragments=function(t,a){a&&(e.each(a,function(t){e(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),e.each(a,function(t,a){e(t).replaceWith(a),e(t).stop(!0).css("opacity","1").unblock()}),e(document.body).trigger("wc_fragments_loaded"))},new t});
// source --> //www.dynamicpress.eu/envato/gates1/wp-content/plugins/sitepress-multilingual-cms/templates/language-switchers/legacy-dropdown-click/script.js?ver=1 
/*jshint browser:true, devel:true */
/*global document */

var WPMLLanguageSwitcherDropdownClick = (function() {
    "use strict";

    var wrapperSelector = '.js-wpml-ls-legacy-dropdown-click';
    var submenuSelector = '.js-wpml-ls-sub-menu';
    var isOpen = false;

    var toggle = function(event) {
        var subMenu = this.querySelectorAll(submenuSelector)[0];

        if(subMenu.style.visibility === 'visible'){
            subMenu.style.visibility = 'hidden';
            document.removeEventListener('click', close);
        }else{
            subMenu.style.visibility = 'visible';
            document.addEventListener('click', close);
            isOpen = true;
        }

        return false;
    };

    var close = function(){

        if(!isOpen){
            var switchers = document.querySelectorAll(wrapperSelector);

            for(var i=0;i<switchers.length;i++){
                var altLangs = switchers[i].querySelectorAll(submenuSelector)[0];
                altLangs.style.visibility = 'hidden';
            }
        }

        isOpen = false;
    };

    var preventDefault = function(e) {
        var evt = e ? e : window.event;

        if (evt.preventDefault) {
            evt.preventDefault();
        }

        evt.returnValue = false;
    };

    var init = function() {
        var wrappers = document.querySelectorAll(wrapperSelector);
        for(var i=0; i < wrappers.length; i++ ) {
            wrappers[i].addEventListener('click', toggle );
        }

        var links = document.querySelectorAll(wrapperSelector + ' a.js-wpml-ls-item-toggle');
        for(var j=0; j < links.length; j++) {
            links[j].addEventListener('click', preventDefault );
        }
    };

    return {
        'init': init
    };

})();

document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    WPMLLanguageSwitcherDropdownClick.init();
});
// source --> http://www.dynamicpress.eu/envato/gates1/wp-content/plugins/js_composer/assets/js/vendors/woocommerce-add-to-cart.js?ver=5.7 
window.jQuery( document ).ready( function ( $ ) {
	$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.addClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.addClass( 'vc-woocommerce-add-to-cart-loading' )
			.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
	} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
		if ( 'undefined' === typeof($button) ) {
			$button = $( '.vc-gitem-add-to-cart-loading-btn' );
		}
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.removeClass( 'vc-woocommerce-add-to-cart-loading' )
			.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
	} );
} );