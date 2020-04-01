//点击搜索框的all部分出现下拉框
(function hMenuS(){
var categoryDom=getElement(document,'category');
var menuContainerDom=getElement(document,'menuContainer');
var backgroundDom=getElement(menuContainerDom,'background');
var menuDom=getElement(menuContainerDom,'menu');
var body=document.getElementsByTagName('body')[0];
hMenu();
categoryDom.addEventListener('click',showMenu,false);//点击出现侧边菜单栏
backgroundDom.addEventListener('click',hideMenu,false);//点击隐藏侧边菜单栏
function showMenu(){
	replaceClass(menuContainerDom,'hide','visible');
	replaceClass(backgroundDom,'hide','visible');
	setTimeout(function(){
		menuDom.style.left=0;
		body.style.overflow='hidden';
		if (menuDom.getElementsByClassName('content')[0]) {
			menuDom.getElementsByClassName('content')[0].style.left=0;
		}
	},100); //为什么这个一定要设置延时
}
function hideMenu(){
	replaceClass(backgroundDom,'visible','hide');
	body.style.overflow='auto';
	menuDom.style.left=-365+'px';
	setTimeout(function(){
	replaceClass(menuContainerDom,'visible','hide');
	},250);
}

//创建侧边菜单栏页面
function hMenu(){
 //以下为侧边菜单栏副菜单的数据信息
 var music=['STREAM MUSIC',category('Amazon Music Unlimited','siteDirectory.html',null),category('Amazon Music HD','',null),category('Prime Music','',null),category('Open Web Player','',null),'BUY MUSIC',category('CDs & Vinyl','',null),category('Download Store','',null)];
 var echo=['ECHO & ALEXA',category('Echo Show 5','',null),category('Echo Show 8','',null),category('Echo Show','',null),category('Echo Flex','',null),category('Echo Dot','',null),category('Echo Dot Kids Edition','',null),category('Echo','',null),category('Echo Plus','',null),category('Echo Studio','',null),category('Echo Auto','',null),category('Echo Loop','',null),category('Echo Frames','',null),category('See all devices with Alexa','',null),'ALEXA SMART HOME',category('Amazon Smart Plug','',null),category('AmazonBasics Microwave','',null),category('Amazon Smart Oven','',null),category('Echo Glow','',null),category('See all smart home devices','',null),'CONTENT & RESOURCES',category('Meet Alexa','',null),category('Alexa Appstore','',null),category('Alexa Skills','',null)];
 var fireTablets=['FIRE TABLETS',category('Fire 7','',null),category('Fire HD 8','',null),,category('All-new Fire HD 10','',null),category('Fire 7 Kids Edition','',null),category('Fire HD 8 Kids Edition','',null),category('All-new Fire HD 10 Kids Edition','',null),category('Accessories','',null),category('See all Fire tablets','',null),'CONTENT & RESOURCES',category('Prime Video','',null),category('Apps & Games','',null),category('Digital Music','',null),category('Kindle Books','',null),category('Kindle Unlimited','',null),category('Amazon Free Time Unlimited','',null),category('Newsstand','',null),category('Manage Your Content and Devices','',null)];
 var fireTV=['WATCH AND PLAY',category('Fire TV Stick','',null),category('Fire TV Stick 4','',null),,category('All-new Fire TV Cube','',null),category('Fire TV Recast','',null),category('See Fire TV Family','',null),'MOVIES, TV, AND GAMES',category('Prime Video - Included with Prime','',null),category('Fire TV Apps & Channels','',null),category('Games for Fire TV','',null),category('Amazon Photos','',null)];
 var kindle=['KINDLE E-READERS',category('All-new Kindle Kids Edition','',null),category('Kindle','',null),,category('Kindle Paperwhite','',null),category('All-new Kindle Oasis','',null),category('Accessories','',null),category('See all Kindle E-Readers','',null),'KINDLE STORE',category('Kindle Books','',null),category('Magazines','',null),category('Newspapers','',null),category('Kindle Unlimited','',null),category('Prime Reading','',null),'APPS & RESOURCES',category('Free Kindle Readng Apps','',null),category('Kindle Cloud Reader','',null),category('Manage Your Content and Devices','',null)];
 var appstore=['APPSTORE FOR ANDRIOD',category('All Apps and Games','',null),category('Games','',null),category('Amazon Coins','',null),category('Download Amazon Appstore','',null),category('Amazon Apps','',null),category('Your Apps and Subscriptions','',null)];
 var smartHome=['SMART HOME',category('Amazon Smart Home','',null),category('Lighting','',null),category('Door Locks','',null),category('Cameras','',null),category('Plugs','',null),category('Other Smart Solutions','',null),category('Thermostats','',null),category('Security Systems','',null),category('Televisions','',null),category('Speakers','',null),category('Voice Assistants','',null),category('Kitchen','',null),category('Vacuums','',null),category('Printers and PC','',null),category('Network and Wifi','',null),category('New to Smart Home','',null)];
 var physicalStore=['AMAZON PHYSICAL Stores',category('Amazon Books','',null),category('Amazon 4-star','',null),category('Amazon Go','',null),category('Find a store near you','',null)];
 var giftCards=['GIFT CARDS',category('All gift cards','',null),category('eGift cards','',null),category('Reload your balance','',null),category('Amazon Cash','',null),category('Third-party gift cards','',null)];
 var subsribe=['SUBSCRIBE WITH AMAZON',category('All Subscription Boxes','',null)];
 var live=['AMAZON LIVE',category('Live','',null),category('Recently Live','',null)];
 var internationalShopping=['INTERNATIONAL SHOPPING',category('Where we ship','',null),category('Visit Amazon Global','',null)];
 var petSupplies=['PET SUPPLIES',category('Dogs','',null),category('Cats','',null),category('Fish & Aquatic Pets','',null),category('Birds','',null),category('Horses','',null),category('Reptiles & Amphibians','',null),category('Small Animals','',null)];
 var sports=['SPORTS AND OUTDOORS',category('Sports and Outdoors','',null),category('Outdoors Recreation','',null),category('Sports & Fitness','',null),category('Fan Shop','',null)];
 var baby=['BABY',category('Activity & Entertainment','',null),category('Apparel & Accessories','',null),category('Baby & Toddler Toys','',null),category('Baby Care','',null),category('Baby Stationery','',null),category('Car Seats & Accessories','',null),category('Diapering','',null),category('Feeding','',null),category('Gifts','',null),category('Nursery','',null),category('Potty Training','',null),category('Pregnancy & Maternity','',null),category('Safety','',null),category('Strollers and Accessories','',null),category('Travel Gear','',null)];
 var automotives=['AUTOMOTIVE',category('Car Care','',null),category('Car Electronics & Accessories','',null),category('Exterior Accessories','',null),category('Interior Accessories','',null),category('Lights & Lighting Accessories','',null),category('Motorcycle & Powersports','',null),category('Oils & Fluids','',null),category('Paint & Paint Supplies','',null),category('Performance Parts & Accessories','',null),category('Replacement Parts','',null),category('RV Parts & Accessories','',null),category('Tire & Wheels','',null),category('Tools & Equipment','',null),category('Automotive Enthusiast Merchandise','',null),category('Heavy Duty & Commercial Vehicle Equipment','',null)];
 var arts=['ARTS & CRAFTS',category('Painting, Drawing & Art Supplies','',null),category('Beading & Jewwlry Making','',null),category('Crafting','',null),category('Fabric','',null),category('Fabric Decorating','',null),category('Knitting & Crochet','',null),category('Needlework','',null),category('Organization, Storage & Transport','',null),category('Printmaking','',null),category('Scrabooking & Stamping','',null),category('Sewing','',null),category('Party Decorations & Supplies','',null),category('Gift Wrapping Supplies','',null)];
 var beauty=['BEAUTY AND PERSONAL CARE',category('Makeup','',null),category('Skin Care','',null),category('Hair Care','',null),category('Fragrance','',null),category('Foot, Hand & Nail Care','',null),category('Tools & Accessories','',null),category('Shave & Hair Removal','',null),category('Personal Care','',null),category('Oral Care','',null)];
 var Computers=['COMPUTERS',category('Computer Accessories & Peripherals','',null),,category('Computer Components','',null),category('Computer & Tablets','',null),category('Data Storage','',null),category('External Components','',null),category('Laptop Accessories','',null),category('Monitors','',null),category('Networking Products','',null),category('Power Strips & Surge Protectors','',null),category('Printers','',null),category('Scanners','',null),category('Servers','',null),category('Tablet Accessories','',null),category('Tablet Replacement Parts','',null),category('Warranties & Services','',null)];
 var electronics=['ELECTRONICS',category('Accessories & Supplies','',null),category('Camera & Photo','',null),category('Car & Vehicle Elecronics','',null),category('Cell Phones & Accessories','',null),category('Computers & Accessories','',null),category('GPS & Navigation','',null),category('Headphones','',null),category('Home Audio','',null),category('Office Electronics','',null),category('Portable Audio & Video','',null),category('Security & Surveillance','',null),category('Service Plans','',null),category('Television & Video','',null),category('Video Game Consoles & Accessories','',null),category('Video Projectors','',null),category('Wearable Technology','',null),category('eBook Readers & Accessories','',null)];
 var women=["WOMEN'S FASHION",category('Clothing','',null),category('Shoes','',null),category('Jewelry','',null),category('Watches','',null),category('Handbags','',null),category('Accessories','',null),category("Men's Fashion",'',null),category("Girls' Fashion",'',null),category("Boys' Fashion",'',null)];
 var men=["WOMEN'S FASHION",category('Clothing','',null),category('Shoes','',null),category('Watches','',null),category('Accessories','',null),category("Women's Fashion",'',null),category("Girls' Fashion",'',null),category("Boys' Fashion",'',null)];
 var girl=["WOMEN'S FASHION",category('Clothing','',null),category('Shoes','',null),category('Jewelry','',null),category('Watches','',null),category('Accessories','',null),category('School Uniforms','',null),category("Women's Fashion",'',null),category("Men's Fashion",'',null),category("Boys' Fashion",'',null)];
 var boy=["BOY'S FASHION",category('Clothing','',null),category('Shoes','',null),category('Jewelry','',null),category('Watches','',null),category('Accessories','',null),category('School Uniforms','',null),category("Women's Fashion",'',null),category("Men's Fashion",'',null),category("Girls' Fashion",'',null)];
 var health=['HEALTH AND HOUSEHOLD',category('Boby & Child Care','',null),category('Health Care','',null),category('HouseHold Supplies','',null),category('Medical Supplies & Equipment','',null),category('Oral Care','',null),category('Personal Care','',null),category('Sexual Wellness','',null),category('Sports Nutrition','',null),category('Stationery & Gift Wrapping Supplies','',null),category('Vision Care','',null),category('Vitamins & Dietary Supplements','',null),category('Wellness & Relaxation','',null)];
 var homeKitchen=['HOME AND KITCHEN',category("Kids' Home Store",'',null),category('Kitchen & Dining','',null),category('Beding','',null),category('Bath','',null),category('Furniture','',null),category('Home Decor','',null),category('Wall Art','',null),category('Lighting & Ceiling Fans','',null),category('Seasonal Decor','',null),category('Event & Party Supplies','',null),category('Heating, Cooling & Air Quality','',null),category('Irons & Steamers','',null),category('Vacuums & Floor Care','',null),category('Storage & Organization','',null),category('Cleaning Supplies','',null)];
 var industrial=["INDUSTRIAL AND SCIENTIFIC",category('Abrasive & Finishing Products','',null),category('Additive Manufacturing Products','',null),category('Commercial Door Products','',null),category('Cuttinng Tools','',null),category('Fasteners','',null),category('Filtration','',null),category('Food Service Equipment & Supplies','',null),category('Hydraulics, Pneumatics & Plumbing','',null),category('Industrial Electrical','',null),category('Industrial Hardware','',null),category('Industrial Power & Hand Tools','',null),category('Janitorial & Sanitation Supplies','',null),category('Lab & Scientific Products','',null),category('Material Handling Products','',null),category('Occupational Health & Safety Products','',null),category('Packaging & Shipping Supplies','',null),category('Power Transmission Products','',null),category('Professional Dental Supplies','',null),category('Professional Medical Supplies','',null),category('Raw Materials','',null),category('Retail Store Fixtures & Equipment','',null),category('Robotics','',null),category('Science Education','',null),category('Tapes, Adhesives & Sealants','',null),category('Test, Measure & Inspect','',null)];
 var luggage=['LUGGAGE',category('Carry-ons','',null),category('Backpacks','',null),category('Garment bags','',null),category('Travel Totes','',null),category('Luggage Sets','',null),category('Laptop Bags','',null),category('Suitcases','',null),category('Kids Luggage','',null),category('Messenger Bags','',null),category('Umbrellas','',null),category('Duffles','',null),category('Travel Accessories','',null)];
 var movies=['MOVIES & TELEVISION',category('Movies','',null),category('TV Shows','',null),category('Blu-ray','',null),category('4K Ultra HD','',null),category('Best Sellers','',null),category("Today's Deals",'',null),category('New Releases','',null),category('Pre-orders','',null),category('Kids & Family','',null),category('Prime Video','',null)];
 var software=['INDUSTRIAL AND SCIENTIFIC',category('Accounting & Finance','',null),category('Antivirus & Security','',null),category('Bussiness & Office','',null),category("Children's",'',null),category('Design & Illustration','',null),category('Digital Software','',null),category('Education & Reference','',null),category('Games','',null),category('Lifestyle & Hobbies','',null),category('Music','',null),category('Networking & Servers','',null),category('Operating Systems','',null),category('Photography','',null),category('Programming & Web Development','',null),category('Tax Preparation','',null),category('Utilities','',null),category('Video','',null)];
 var tools=["TOOLS & HOME IMPROVEMENT",category('Tools & Home Improvement','',null),category('Appliances','',null),category('Building Supplies','',null),category('Electrical','',null),category('Hardware','',null),category('Kitchen & Bath Fixtures','',null),category('Light Bulbs','',null),category('Lighting & Ceiling Fans','',null),category('Measuring & Layout Tools','',null),category('Painting Supplies & Wall Treatments','',null),category('Power & Hand Tools','',null),category('Rough Plumbing','',null),category('Safety & Security','',null),category('Storage & Home Organization','',null),category('Welding & Soldering','',null),];
 var toys=["TOYS AND GAMES",category('Action Figures & Statues','',null),category('Arts & Crafts','',null),category('Baby & Toddler Toys','',null),category('Building Toys','',null),category('Dolls & Accessories','',null),category('Dress Up & Pretend Play','',null),category('Kids Electronics','',null),category('Games','',null),category('Grown-Up Toys','',null),category('Hobbies','',null),category("Kids' Furniture, Decor & Storage",'',null),category('Learning & Education','',null),category('Novelty & Gag Toys','',null),category('Party Supplies','',null),category('Puppets','',null),category('Puzzles','',null),category('Sports & Outdoors Play','',null),category('Stuffed Animals & Plush Toys','',null),category('Toys Remote Control & Play Vehicles','',null),category('Tricycle, Scooters & Wagons','',null),category('Video Games','',null)];
 var videoGames=['VIDEO GAMES',category('Video Games','',null),category('PlayStation 4','',null),category('PlayStation 3','',null),category('Xbox One','',null),category('Xbox 360','',null),category('Nintendo Switch','',null),category('Wii U','',null),category('Wii','',null),category('PC','',null),category('Mac','',null),category('Nintendo 3DS & 2DS','',null),category('Nintendo DS','',null),category('PlayStation Vita','',null),category('Sony PSP','',null),category('Retro Gaming & Microconsoles','',null),category('Accessories','',null),category('Digital Games','',null),category('Kids & Family','',null)];
 //以下为主菜单信息
 var shopByCategory=['SHOP BY CATEGORY',category('Amazon Music','',music),category('Echo & Alexa','',echo),category('Fire Tablets','',fireTablets),category('Fire TV','',fireTV),category('Kindle E-reader & Books','',kindle),category('Appstore for Andriod','',appstore),category('Subscribe & Save','',null),category('Smart Home','',smartHome),category('Amazon Physical Stores','',physicalStore),category('Gift Cards','',giftCards),category('#FoundItOnAmazon','',null),category('Subscribe with Amazon','',subsribe),category('Amazon Live','',live),category('International Shopping','',internationalShopping),category('Pet supplies','',petSupplies),category('Sports and Outdoors','',sports),category('Baby','',baby),category('Automotive','',automotives),category('Arts & Crafts','',arts),category('Beauty and personal care','',beauty),category('Computers','',Computers),category('Electronics','',electronics),category("Women's Fashion",'',women),category("Men's Fashion",'',men),category("Girl's Fashion",'',girl),category("Boy's Fashion",'',boy),category('Health and Household','',health),category("Home and Kitchen",'',homeKitchen),category("Industrial and Scientific",'',industrial),category("Luggage",'',luggage),category("Movies & Television",'',movies),category("Software",'',software),category("Tools & Home Improvement",'',tools),category("Toys and Games",'',toys),category("Video Games",'',videoGames),category('Full Store Directory','',null)];
 //找到主菜单的根节点，将文档碎片加入文档中
 var mainMenuDom=getElement(document,'shopByCategory');
 var mainMenuItem=createMenu(shopByCategory);
 mainMenuDom.appendChild(mainMenuItem);
 var subMenuDom=getElement(document,'subMenu');
 
//category中保存每一类别的信息，包括名称，链接，是否有子项
function category(cname,href,subcate){
	return {
		name:cname,
		ref:href,
		sub:subcate
	};
}

//创建侧边菜单栏，参数为保存侧边菜单栏分类的一个数组，返回一个文档碎片，可以将其添加到文档中
function createMenu(root){
 	var len=root.length;
 	var fragment=document.createDocumentFragment();
 	for (var i = 0; i < len; i++) {
 		if (typeof root[i]==='string') {
 			if (typeof ul==='object') {
 				fragment.appendChild(ul);
 				ul=null;
 			}
 			else{
 				var ul=document.createElement('ul');
 			}
 			var p=document.createElement('p');
 			p.innerHTML=root[i];
 			fragment.appendChild(p);
 		}
 		else if (typeof root[i] === 'object') {
 			var list=document.createElement('li');
 			if (root[i].sub!==null) {
 				list.innerHTML='<a href='+root[i].ref+'><div class="img"></div><div class="text">'+root[i].name+'</div></a>';
 				root[i].subMenu=createMenu(root[i].sub);
 				(function(j){
 					list.onclick=function(e){
 						e.preventDefault();
 						subMenuDom.innerHTML='<p class="subhead"><i></i>MAIN MENU</p>';
 						var saveSubMenu=root[j].subMenu.cloneNode(true); //文档碎片移入DOM中，则文档碎片中没有元素，因此需要克隆文档碎片以保存在subMenu中
 						subMenuDom.appendChild(root[j].subMenu);
 						root[j].subMenu=saveSubMenu;
 						var menuContentDom=menuDom.getElementsByClassName('content')[0];
 						subMenuDom.style.display='block';
 						menuContentDom.style.left='-100%';
 						var subhead=menuContainerDom.getElementsByClassName('subhead')[0];
 						subhead.onclick=function(){
 							menuContentDom.style.left=0;
 						};
 					}
 				})(i)	
 			}else{
 				list.innerHTML='<a href='+root[i].ref+'><div class="text">'+root[i].name+'</div></a>';
 			}
 			var ul=ul||document.createElement('ul');
 			ul.appendChild(list);
 		}
 	}
 	if(ul) {fragment.appendChild(ul);};
 	return fragment;
 }





}



})();
 