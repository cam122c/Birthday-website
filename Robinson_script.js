/* JavaScript 6th Edition
    Assignment 5 
	
	Author: Cameron Robinson
	Date: 4/6/2021
	
	Filename: Robinson_script.js
*/	

function favEvents(){
	document.write("<ol>");
	document.write("<li> In 1996,Fargo was released in the United States which was wriited by Joel and Ethan Coen, starring Franches McDormand </li>");
	document.write("<li>In 1998, Gloria Stuart was awarded the Screen Actors Guild award </li>");
	document.write("<li>In 2016, Turner Classic Movies showed several Claire Trevor's film to honor her birth.</li>");
	document.write("</ol>");
}
function rsvp(e){
	var name = document.getElementById("custFname");
	var email = document.getElementById("custFemail");
	var phone = document.getElementById("custFphone");
	var age = document.getElementById("custFage");
	var birthday = document.getElementById("custFbirthday");
	var favoritepartygame = document.getElementById("FavoritePartyGame");
 if (name.value && email.value && phone.value) {
	 alert("Thank you!") 
 
}else	{
	 alert("Please fill in all fields");
	 e.preventDefault();
	}
}	
function activities(Cameron){
	alert(Cameron)
}	

function wishList(){
	document.write("<table>")
	document.write("<caption>Things that I would Like to have</caption>")
	document.write("<tr>")
	document.write("<th>Item Name</th>")
	document.write("<th> Price Range</th>")
	document.write("<th>Additional Info</th>")
	document.write("<th>Links</th>")
	document.write("</tr>")
var ItemName = ["Jordan 4s","Yeezy Boost 350","Yeezy Boost 700","Bath & body works candles","Michael Kors men watch","Gucci belts","Gucci slides","Nike Tech Fleece"];
var PriceRange = ["$180-250$","$250-350$","$250-450$","$25-50$","$195-315$","$300-450$","$150-300$","$150-300$"];
var AdditionalInfo = ["Jordan 4s size 10.5","Yeezy 350 size 11","Yeezy 700 size 11","Mahagony","Anykind is fine"," Gucci Signature & Double G buckle waist 32","Size 11","Medium for both pants and hoodies."];
var Links =['<a href="https://www.flightclub.com/air-jordans/air-jordan-4">Jordan 4s </a>','<a href="https://www.flightclub.com/adidas/adidas-yeezy"> Yeezy 350 </a>','<a href="https://www.flightclub.com/yeezy/boost-700"> Yeezy 700 </a>','<a href="https://www.bathandbodyworks.com/c/home-fragrance/all-candles?cm_mmc=Google-_-Paid-Search-_-G_Non%20Brand_Home%20Fragrance_Candles-_-G_Non%20Brand_Home%20Fragrance_Candles_General&s_kwcid=AL!5233!3!345255774944!e!!g!!bathandbodyworks%20candles&ef_id=EAIaIQobChMI1rbVkcWS7wIVF7SzCh12Dg1iEAAYASAAEgLebvD_BwE:G:s&gclid=EAIaIQobChMI1rbVkcWS7wIVF7SzCh12Dg1iEAAYASAAEgLebvD_BwE&gclsrc=aw.ds"> Bath & body works </a>','<a href="https://www.michaelkors.com/watches/men/_/N-28cf"> Watches </a>','<a href="https://www.gucci.com/us/en/ca/men/accessories-for-men/belts-for-men-c-men-accessories-belts?gclid=EAIaIQobChMIra_RqceS7wIVg83ICh22xwPCEAAYASAAEgL3mvD_BwE"> Gucci belts </a>','<a href="https://www.gucci.com/us/en/ca/men/shoes-for-men/slides-sandals-c-mens-shoes-sandals-and-slides"> Gucci slides </a>','<a href="https://www.nike.com/w/mens-tech-fleece-clothing-6sipkz6ymx6znik1?cp=13507583580_search_%7CDYNAMIC+SEARCH+ADS%7CGOOGLE%7C71700000058932964%7CAll_X_X_X_X-Device_X_MensLifestyleApparel_DSA%7Cb%7Cc&gclsrc=aw.ds&&gclid=EAIaIQobChMI1-3g2siS7wIVkuDICh0iyQtZEAAYAiAAEgJod_D_BwE&gclsrc=aw.ds"> Nike </a>'];
for(var i = 0; i < ItemName.length; i++) {
	document.write("<tr>");
	document.write("<th>" + ItemName[i] + "</th>");
	document.write("<td>" + PriceRange[i]);
	document.write("<td>" + AdditionalInfo[i]);
	document.write("<td>" + Links[i]);
	document.write("</tr>");
}
document.write("</table>");

}	