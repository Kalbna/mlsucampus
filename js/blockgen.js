/* 
fetch("../js/blockdetail.json").then(
	response =>{
		return response.json();
	}
).then(data =>{
	console.log(data.elements[0].departid);
}); */
import data from '../js/blockdetail.json' assert {type:'json'};
console.log(data.elements[0].english);

/* function elementGather(i){
	const campusid = data.elements[i].campusid;
	const departid = data.elements[i].departid;
	const hindi = data.elements[i].hindi;
	const english = data.elements[i].english;
	const mapurl = data.elements[i].maplocation;
	const qrurl = data.elements[i].qrcode;
	console.log(campusid,departid,hindi);

	return campusid; */

/* 	function htmlgenerator(campusid,departid,hindi,english,mapurl,qrurl){
		const divtag = document.getElementsByClassName("depart");
		divtag.innerHTML +=`
		<div id="${campusid}" class="dep">
		<div id="${departid}" class="depname">
			<div id="${hindi}" class="hindi">जनसंख्या अनुसंधान केंद्र</div>
			<div id="${english}" class="english">population research center </div>
		</div>
		<div class="mapqr">
			<div id="${mapurl}" class="map">Google Maps</div>
			<div id="${qrurl}" class="qr">QRCode...</div>
		</div>
	</div> 
		`;
		console.log(campusid);
	
	} */

/* }; */
function htmlgenerator(campusid,departid,hindi,english,mapurl,qrid){
	const divtag = document.getElementById("mainsection");
	divtag.innerHTML +=`
	<div id="${campusid}" class="dep">
	<div id="${departid}" class="depname">
		<div id="${hindi}" class="hindi">${hindi}</div>
		<div id=">${english}" class="english">${english} </div>
	</div>
	<div class="mapqr">
		<div id="" class="map"><a href="${mapurl}" target="_blank" rel="noopener noreferrer">Google Maps</a></div>
		<div id="${qrid}" class="qr">QRCode...</div>
	</div>
</div> 
	`;
	console.log(campusid);
};

const datalenght = data.elements.length;
console.log(datalenght);
const dataArray = data.elements;
console.log(dataArray);




/* */
/* BLOCK GENERATOR*/
for (let index = 0; index <= data.elements.length; index++) {
	const element = data.elements[index];
	console.log(element);
	const campusid = data.elements[index].campusid;
	const departid = data.elements[index].departid;
	const hindi = data.elements[index].hindi;
	const english = data.elements[index].english;
	const mapurl = data.elements[index].maplocation;
	const qrurl = data.elements[index].qrcode;
	const qrid = data.elements[index].qrid;
	console.log(campusid,departid,hindi,english,mapurl,qrurl,qrid);

	htmlgenerator(campusid,departid,hindi,english,mapurl,qrid);
}

/* QR CODE GENERATOR*/
const qrelement = document.getElementById("") 

/* elementGather(1);
htmlgenerator(campusid); */
