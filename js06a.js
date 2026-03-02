"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: annaMoore
      Date:   3/2/2026

      Filename: js06a.js
 */

window.addEventListener("load",function(){
      let orderForm=document.forms.orderForm;
      let model=orderForm.elements.model;
      //select model selection when form opens
      model.focus();
});

