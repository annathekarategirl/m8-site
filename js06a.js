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
      //calc cost of order
      calcOrder();
      function calcOrder(){
            //determine selected model
            let mIndex=model.selectedIndex;
            let mValue=model.options[mIndex].value;
            //determine selected quanity
            let qIndex=orderForm.elements.qty.selectedIndex;
            let quantity=orderForm.elements.qty[qIndex].value;
            //model cost times quantity
            let modelCost=mValue*quantity;
            orderForm.elements.modelCost.value=modelCost.toLocaleString("en-US", {style: "currency", currency:" USD"});
            //retrieve cost of protection plan
            let planValue=document.querySelector('input[name="plan"]:checked').value;
            //charge plan to each item ordered
            let planCost=planValue*quantity;
            orderForm.elements.planCost.value=planCost.toLocaleString("en-US",{style:"currency",currency:"USD"});
            //calc order subtotal
            let subtotal=modelCost+planCost;
            orderForm.elements.subtotal.value=subtotal;
            //calc sales tax
            let salesTax=subtotal*0.05;
            orderForm.elements.salesTax.value=salesTax.toLocaleString("en-US",{style:"currency",currency:"USD"});
            //calculate the total cost of the order
            let totalCost=subtotal+salesTax;
            orderForm.elements.totalCost.value=totalCost.toLocaleString("en-US",{style:"currency",currency:"USD"});
      }
});

