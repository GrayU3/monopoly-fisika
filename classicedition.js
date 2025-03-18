function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Mediter-ranean";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() { //but how do you know city tax is at square 4? it is at line 2382 monopoly.js
	addAlert(player[turn].name + " paid $200 for landing on City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on City Tax. Pay $200.");
}

var square = [];

square[0] = new Square("GO", "Ambil Rp200 tiap lewat. Fisika bilang: usaha keras = hasil maksimal.", "#FFFFFF");
square[1] = new Square("Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Community Chest", "Ikuti instruksi kartu. Siap-siap dapet rejeki atau musibah.", "#FFFFFF");
square[3] = new Square("Lab Fisika Lantai Bawah", "Rp60. Tempat eksperimen ngaco dimulai.", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("City Tax", "bayar $200 Untuk negara, katanya...", "#FFFFFF");
square[5] = new Square("Reading Railroad", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Lab Kimia Bocor", "Rp100. Bau belerang permanen, bonus pusing.", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "Ambil kartu, uji keberuntungan ala kuantum.", "#FFFFFF");
square[8] = new Square("Vermont Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Kantin sains", "Rp120. Mie instan rasa fisika.", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("Taman Energi Potensial", "Rp140. Tempat healing sambil ngitung gravitasi.", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Electric Company", "$150 Kalau lampu mati, bawa lilin.", "#FFFFFF", 150, 2);
square[13] = new Square("States Avenue", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Kelas Fisika Pagi", "Rp160. Tempat ngantuk berjamaah.", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("St. James Place", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Community Chest", "Buka kartu, rejeki nomplok atau kena prank?", "#FFFFFF");
square[18] = new Square("Tennessee Avenue", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Gedung uji Laser", "Rp200. Hati-hati silau permanen.", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Kentucky Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Indiana Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Lab Anti-Mainstream", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("B&O Railroad", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Ruang Teori Konspirasi", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Area Percobaan Quantum", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Go to Jail", "Masuk penjara! Langsung! Ga usah muter, ga usah ambil Rp200. Fisika juga gak bisa nolong.", "#FFFFFF");
square[31] = new Square("Pacific Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Tempat belajar", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Zona Gravitasi", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Short Line", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Park Place", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
square[39] = new Square("Gedung Anti-Gravitasi", "Rp400. Parkir susah, tapi keren.", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Kabur dari Penjara pakai ILMU! Kartu ini bisa melengkung ruang-waktu dan kabur kayak ninja. Simpan buat darurat atau jual demi cuan.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Kamu juara 2 kontes kecantikan! Pesona kuantummu nyata, bro. Ambil Rp10 dan tersenyumlah seperti bintang TikTok.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("Jual saham sebelum harganya anjlok. Kamu pinter... atau hoki? Ambil Rp50, jangan ditanya.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Asuransi jiwa cair! Loh, kok masih hidup? Sudahlah, ambil aja Rp100, no debat.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Dapat refund pajak penghasilan! Negara salah hitung, kamu untung. Ambil Rp20, cepet sebelum di-revisi.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Dana liburan cair! Tapi liburannya cuma angan-angan. Ambil Rp100, buat beli es teh.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("Dapat warisan Rp100 dari kerabat tak dikenal. Agak mistis, tapi rezeki tak boleh ditolak.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Kamu dibayar Rp25 buat jelasin rumus fisika ke tetangga. Keren, jadi dosen dadakan.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Biaya rumah sakit Rp100. Kamu cedera gara-gara salto gagal. Bayar, terus istirahat dah.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Bank salah transfer ke rekening kamu! Ambil Rp200 sebelum diblokir.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Bayar uang sekolah Rp50. Ilmu mahal, tapi males belajar lebih mahal.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Bayar biaya dokter Rp50. Diagnosa: kebanyakan begadang. Bayar dan tidur lah.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("Hari ulang tahunmu! Peras tiap pemain Rp10. Ini bukan kado, ini tradisi.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Maju ke START dan ambil Rp200. Fisika bilang: momentum = duit sekarang.", function() { advance(0);});
communityChestCards[14] = new Card("Perbaikan jalan: lubang cacing di jalanmu bikin macet. Bayar Rp40 per rumah, Rp115 per hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Masuk penjara! Langsung! Ga usah muter, ga usah ambil Rp200. Fisika juga gak bisa nolong.", function() { gotojail();});


chanceCards[0] = new Card("Kabur dari Penjara GRATIS! Kartu sakti ini bisa kamu simpan atau barter dengan harga temen.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Lakukan perbaikan massal! Bayar Rp25 per rumah, Rp100 per hotel. Badai fisika menyerang properti kamu.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Kena tilang ngebut! Bayar Rp15, terus pura-pura tobat.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("Kamu jadi ketua RT... eh, dewan direksi! Bayar Rp50 ke tiap pemain. Jabatan itu mahal, bro.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Mundur 3 langkah! Lagi apes, jalan pun dipaksa rewind.", function() { gobackthreespaces();});
chanceCards[5] = new Card("Maju ke utilitas terdekat! Belum punya? Beli. Udah punya orang? Bayar 10x lemparan dadu. Nasibmu = dadu.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Dapat dividen bank Rp50! Sahammu meledak, besok lusa turun lagi.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("Maju ke stasiun terdekat! Kalau belum ada yang punya, sikat. Kalau udah? Bayar 2x sewa, terus menyesal.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Bayar pajak kemiskinan Rp15. Ironis, tapi hidup memang keras.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Liburan ke Reading Rail Road! Lewatin START, ambil Rp200. Hidupmu sementara bahagia.", function() { advance(5);});
chanceCards[10] = new Card("Maju ke Boardwalk! Tempat elite, harga elite, dompet nangis.", function() { advance(39);});
chanceCards[11] = new Card("Maju ke Illinois Avenue. Lewat START? Dapat Rp200. Lumayan buat bayar cicilan.", function() { advance(24);});
chanceCards[12] = new Card("Pinjaman bangunan cair! Ambil Rp150, jangan ditanya legal atau nggak.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("Maju ke stasiun terdekat! Belum punya? Langsung beli. Udah punya? Bayar 2x lipat dan menangis.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Maju ke St. Charles Place. Lewat START? Ambil Rp200 kayak bos.", function() { advance(11);});
chanceCards[15] = new Card("Masuk penjara! Langsung masuk. Gak usah drama, gak usah ambil Rp200.", function() { gotojail();});
