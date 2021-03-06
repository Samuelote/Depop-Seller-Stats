import moment from 'moment'
import { buyers, headers } from './example_buyers'

export const setUpExampleFile = () => {
  const mockFile = [headers]
  const currency = Math.round(Math.random()) ? '$' : '£'
  function randomDate (start, end) {
    return moment(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())))
  }
  const numOfSales = Math.floor(Math.random() * (120 - 85) + 85)
  for (let i = 0; i < numOfSales; i++) {
    const dateSold = randomDate(new Date(2020, 0, 1), new Date())
    const timeSold = randomDate(new Date(2020, 0, 1), new Date()).format('h:mm A')
    const dateListed =
      randomDate(new Date(2020, 0, 1), new Date(dateSold))
        .format('DD-MM-YYYY')
    const price = Math.floor(Math.random() * (110 - 25) + 25).toFixed(2)
    const shipping = Math.floor(Math.random() * 10).toFixed(2)
    const usps = Math.floor(Math.random() * (10 - 1) + 1).toFixed(2)
    mockFile.push([
      dateSold.format('DD-MM-YYYY'),
      timeSold,
      dateListed,
      Math.round(Math.random()) ? 'Yes' : 'No', // bundle
      buyers[Math.floor(Math.random() * 100)],
      'American Vintage',
      'amazing vintage pullover.↵↵details: beautiful and soft featuring bears and hearts',
      `${currency}${price}`,
      `${currency}${shipping}`,
      `${currency}${(parseFloat(shipping) + parseFloat(price)).toFixed(2)}`, // total
      `${currency}${shipping ? '0.00' : usps}`, // usps cost
      `${currency}${(price / 10).toFixed(2)}`, // depop fee
      `${currency}0.00`, // depop payment fee
      'PAYPAL', // method of payment
      'Sweaters', // category
      'Kennya Aguilar',
      '500 West University Ave.↵PMB #135',
      'N/A',
      'El Paso ',
      'TX',
      '79968',
      'US'
    ])
  }
  return mockFile
}

export const exampleFile = `Date of sale,Time of sale,Date of listing,Bundle,Buyer,Brand,Description,Item price,Buyer shipping cost,Total,USPS Cost,Depop fee,Depop Payments fee,Payment type,Category,Name,Address Line 1,Address Line 2,City,State,Post Code,Country
05/01/2020,1:01 AM,17/11/2019,No,mirroie,American Vintage,"amazing vintage pullover.

details: beautiful and soft featuring bears and hearts all around. preowned a bit of pilling here and there. shipping is $6.00. cover photo is edited! colors are accurate on the other 3 :) 

size: modeled on a small could fit S-L depending on fit. 

DM with questions or offers 🖤

tags: #vintage #grandpasweater #unisex #christmas #pullover",$25.00,$6.00,$31.00,$0.00,$3.10,$0.00,PAYPAL,Sweaters,Kennya Aguilar,"500 West University Ave.
PMB #135",N/A,El Paso ,TX,79968,US
09/01/2020,1:38 AM,17/11/2019,No,aidm,American Vintage,"beautiful 100% silk vintage western button-up. 

details: western style blouse with a belt/buckle/chain print. no flaws. shipping is $5.00. cover photo is edited! colors are accurate in the other 3 :) 

size: modeled on small could fit S-M. 

DM with questions or offers 🖤

tags: #vintage #silk #graphic #urbanoutfitters #unisex",$16.00,$4.00,$20.00,$0.00,$2.00,$0.00,PAYPAL,Blouses,Adriana .,309 2nd NW st,N/A,Buffalo Center ,IA,50424,US
19/01/2020,5:38 PM,19/01/2020,No,jacquelinebuui,Comme des Garçons,"cdg x converse black high-tops. selling for cheap because while they were only worn outside twice they did get a little stain on the left shoe (photo 4). overall in good condition. unisex marked a women’s 7 and a men’s 6. I’m a 7.5 and they fit perfectly. free shipping! DM with questions or offers 🖤

tags: #commedesgarcons #cdg #converseplay #urbanoutfitters",$65.00,$0.00,$65.00,$12.00,$6.50,$0.00,PAYPAL,Sneakers,jacqueline bui,5505 Lavatera Ct,N/A,Centreville,VA,20120,US
21/01/2020,6:09 PM,20/01/2020,No,rubymylove,American Vintage,"ultimate cottagecore embroidered cardigan. so cute super grandma vibes. hand loomed made by colter bay international. has shoulder pads that could be taken off. some pilling but no flaws. unisex would best fit S-M modeled on a small. DM with questions or offers 🖤

tags: #cottagecore #farmcore #chunkyknit #handmade #kawaii",$20.00,$6.00,$26.00,$0.00,$2.60,$0.00,PAYPAL,Cardigans,Ruby Cartwright,7 Lowell st,N/A,Asheville,NC,28803,US
21/01/2020,9:32 PM,09/01/2020,No,malapin,Polo Ralph Lauren,"vintage POLO Ralph Lauren quarter zip. has a waffle knit texture and is pretty lightweight. raw hem. unisex would best fit S-M modeled on a small. DM with questions or offers 🖤

tags: #urbanoutfitters #graphictee #retro #unisex",$12.00,$4.00,$16.00,$0.00,$1.60,$0.00,PAYPAL,Sweaters,Malavee Pin,42 Osgood St,N/A,Lowell,MA,01851,US
24/01/2020,2:30 AM,14/01/2020,No,_julia,Oscar de la Renta,"oscar de la renta pink floral mesh cami. so cute over a lacy bralette. unisex would best fit XS-S modeled on a small. DM with questions or offers 🖤

tags: #urbanoutfitters #designer #meshtop #unisex #kawaii",$11.00,$3.00,$14.00,$0.00,$1.40,$0.00,PAYPAL,Cami tops,Julia Barbosa,3315 La Mesa Dr. Apt. #5,N/A,San Carlos,CA,94070,US
24/01/2020,3:43 AM,08/01/2020,No,madelineaafedt,American Vintage,"vintage grandma heart mockneck sweater. oversized fit modeled on a size small. could fit S-L. unisex. tuck it in or wear it oversized! DM with questions or offers 🖤

tags: #cottagecore #farmcore #embroidery #unisex #lolita",$20.00,$6.00,$26.00,$0.00,$2.60,$0.00,PAYPAL,Sweaters,Madeline Aafedt,"1701 Elm Street SE
Apt 30",N/A,Minneapolis,MN,55414,US
25/01/2020,9:07 PM,18/11/2019,No,katiehoffmaan,American Vintage,"vintage GOLF Hawaii royal blue sweatshirt. unisex marked a men’s large and modeled on a women’s small. has a couple of tiny stains (photos 2 & 4). DM with questions or offers 🖤

tags: #urbanoutfitters #vintage #retro #graphictee #golf",$14.00,$6.00,$20.00,$0.00,$2.00,$0.00,PAYPAL,Sweatshirts,katie hoffman,928 tallow trail,N/A,cedar park,TX,78613,US
26/01/2020,6:24 PM,13/01/2020,No,dacarr,Wrangler,"vintage vibrant wrangler button-up. comes with velcro shoulder pads that can be easily taken off. unisex could fit S-L. DM questions or offers 🖤

tags: #western #urbanoutfitters #unisex #floral",$14.00,$4.00,$18.00,$0.00,$1.80,$0.00,PAYPAL,Blouses,dani carr,239 parmelee hall,N/A,fort collins,CO,80521,US
27/01/2020,3:58 AM,12/01/2020,No,fantatoure,American Vintage,"vintage Lacoste golf long-sleeve. natural oatmeal color. has a super dope golf graphic on the back and the classic logo on the front. unisex could fit S-L and modeled on a small. DM with questions or offers 🖤

tags: #lacoste #urbanoutfitters #golf #unisex #graphictee",$10.50,$6.00,$16.50,$0.00,$1.65,$0.00,PAYPAL,Sweaters,Fanta Toure,2255 Grand Concourse Apt 4c,N/A,Bronx ,NY,10453,US
28/01/2020,5:19 AM,07/12/2019,No,uhhhhh2222,Disney,"vintage Walt Disney World quarter zip. men’s large modeled on a women’s small. shipping $6.00. DM with questions or offers 🖤 

tags: #disney #mickey #vintage #unisex #urbanoutfitters",$30.00,$6.00,$36.00,$0.00,$3.60,$0.00,PAYPAL,Sweatshirts,Lizette Ponce,3808 Skipton Dr,N/A,Austin ,TX,78727,US
01/02/2020,8:06 AM,29/01/2020,No,kateroney,American Vintage,"beautiful vibrant 1980s floral midi skirt. so springtime so perfect. gives me anthropologie vibes. unisex would best fit S-M and modeled on a small. made in USA of 100% cotton. DM with questions or offers 🖤

tags: #madewell #retro #80s #unisex #depopusa",$25.00,$6.00,$31.00,$0.00,$3.10,$0.00,PAYPAL,Skirts,Kate Roney,5196 Newanga Ave,N/A,Santa Rosa ,CA,95405,US
01/02/2020,10:22 PM,01/02/2020,No,mejiaariel,American Vintage,"metallic pink gameboy advance sp from 2002. another childhood favorite! perfectly intact save for a few minor scuffs and scratches. will come w a charger and a horse game from the 2005 movie Dreamer. free shipping! DM with questions or offers 🖤

tags: #y2k #nintendo #kawaii #vintage",$60.00,$0.00,$60.00,$9.00,$6.00,$0.00,PAYPAL,Other,ariel mejia,P.O. box 71,N/A,manteo,NC,27954,US
02/02/2020,9:29 PM,09/12/2019,No,madeleinewillls,American Vintage,"vintage banana republic lacy long-sleeve. a little pilling but no major flaws. marked a women’s small true to size. shipping is $5.00. DM with questions or offers 🖤

tags: #bananarepublic #unisex #cottagecore #urbanoutfitters #vintage",$10.00,$5.00,$15.00,$0.00,$1.50,$0.00,PAYPAL,Blouses,Madeleine Williams,6533 Altschul,N/A,New York,NY,10027,US
06/02/2020,5:35 PM,03/02/2020,No,peppah,Sanrio,"hello kitty mini backpack with pink straps. this bby is so cute but has imperfections which is why price is low. she has faint marks on the back of her dress and her bow is a little loose. could also use a good wash. still has so much life left she deserves a good home. unisex. made in 2013. DM with questions or offers 🖤

tags: #kawaii #sanrio #unisex #y2k #depopusa",$12.00,$4.50,$16.50,$0.00,$1.65,$0.00,PAYPAL,Bags & Purses,Jessica Peters,1708 fountain ln,N/A,Waconia,MN,55387,US
12/02/2020,8:23 AM,08/12/2019,No,casteliia,American Vintage,"vintage Nike half-zip windbreaker. unisex marked a men’s medium and modeled on a women’s small. DM with questions or offers 🖤

tags: #retro #nike #urbanoutfitters #unisex #greenbay",$32.00,$8.00,$40.00,$0.00,$4.00,$0.00,PAYPAL,Windbreakers,Evelyn castellanos,4253 layla way ,N/A,san diego ,CA,92154,US
12/02/2020,11:14 PM,30/01/2020,No,jaimeeclaire,American Vintage,"ON HOLD/ vintage oversized forest green knit sweater. v comf v chunky. has lil stars on the sleeves and the back and a big star on the front. unisex would fit S-L and modeled on a small. DM with questions or offers 🖤

tags: #depopusa #chunky #grandma #unisex #urbanoutfitters",$15.00,$8.00,$23.00,$0.00,$2.30,$0.00,PAYPAL,Sweaters,Jaimee Claire,5152 s. Espana ct. ,N/A,Centennial ,CO,80015,US
15/02/2020,3:51 PM,15/02/2020,No,loralissa,Nike,"vintage white Nike Air Force 1s. these have a lot of wear including ripped insides and loose threads. but! they are a classic. unisex women’s size 8 and men’s 6.5. DM with questions or offers 🖤

tags: #af1 #unisex #depopusa #y2k #sagelow",$35.00,$8.00,$43.00,$0.00,$4.30,$0.00,PAYPAL,Sneakers,Lissa Lora,8400 NW 25th St Ste 100,N/A,Doral,FL,33198,US
16/02/2020,2:26 AM,16/02/2020,No,melthewarrior12,N/A,bundle post for @melthewarrior12 💫 6 Zelda amiibo figures 2 GameCube games.,$92.00,$8.00,$100.00,$0.00,$10.00,$0.00,PAYPAL,Other,Melanie K,827 N Adams Rd,N/A,Rochester Hills,MI,48309,US
16/02/2020,4:05 AM,16/02/2020,No,nataliemarie22,American Vintage,"vintage embroidered minnie mouse crewneck. green w rainbow lettering. wear w flared jeans and some red lipstick. unisex would best fit S-M and modeled on a small. DM with questions or offers 🖤

tags: #disney #vintage #mickey #unisex #depopusa",$15.00,$8.00,$23.00,$0.00,$2.30,$0.00,PAYPAL,Sweaters,Natalie Nunez,15791 canna way ,N/A,Westminster ,CA,92683,US
16/02/2020,5:38 PM,15/02/2020,No,abbyalampi2,Nike,"vintage white Nike Air Force 1s. these have a lot of wear including ripped insides and loose threads. but! they are a classic. unisex women’s size 8 and men’s 6.5. DM with questions or offers 🖤

tags: #af1 #unisex #depopusa #y2k #sagelow",$25.00,$8.00,$33.00,$0.00,$3.30,$0.00,PAYPAL,Sneakers,Abby Alampi,34143 courtyard drive ,N/A,Chesterfield ,MI,48047,US
20/02/2020,4:41 AM,20/02/2020,No,queenlvr,N/A,bundle post for @queenlvr 💫,$30.00,$9.00,$39.00,$0.00,$3.90,$0.00,PAYPAL,Other,Carley Foss,1701 E Cotati Ave #882,N/A,rohnert park ,CA,94928,US
23/02/2020,5:47 PM,16/02/2020,No,lacydevin02,Disney,"vintage winnie the pooh denim wallet. has some discoloration and minor flaws but is overall so cute. unisex one size. DM with questions 🖤

tags: #90s #disney #pooh #unisex #depopusa",$5.00,$3.50,$8.50,$0.00,$0.85,$0.00,PAYPAL,Wallets,Devin Lacy,13201 fencerow rd,N/A,keller,TX,76244,US
23/02/2020,6:23 PM,20/02/2020,No,amanjjj,Urban Outfitters,"fuzzy cow print bucket hat 🐄 so trendy and cute. dunno where it’s from but it gives me urban outfitters vibes. unisex one size. DM with questions or offers 🖤

tags: #brandymelville #buckethat #unisex #depopusa #animalprint",$15.00,$3.50,$18.50,$0.00,$1.85,$0.00,PAYPAL,Hats,Alexa Manga,360 quail forest Blvd #504,N/A,Naples,FL,34105,US
23/02/2020,6:56 PM,23/02/2020,No,sydgraves,N/A,bundle for @sydgraves 💫,$33.00,$0.00,$33.00,$14.00,$3.30,$0.00,PAYPAL,Other,Syd Graves,996 Amarillo Ave,N/A,Palo Alto,CA,94303,US
23/02/2020,7:08 PM,03/02/2020,No,bellad4,American Vintage,"y2k Tommy Hilfiger logo t-shirt. super soft and comf. a bit of cracking on the logo but no major flaws. would fit S-XL (oversized-fitted) modeled on a small. unisex. DM with questions or offers 🖤

tags: #tommy #urbanoutfitters #graphictee #unisex #depopusa",$8.40,$4.50,$12.90,$0.00,$1.29,$0.00,PAYPAL,T-shirts,Isabella Ward,9423 Sir Huon Lane,N/A,Charlotte,NC,28173,US
24/02/2020,1:13 AM,03/02/2020,No,mhayes15,American Vintage,"vintage 100% cotton chunky golf sweater. has an embroidered golfing graphic in middle and knit pattern throughout. unisex marked a men’s L and modeled on women’s small. no flaws. free shipping! DM with questions or for bundle deals 🖤

tags: #depopusa #golf #chunky #unisex #urbanoutfitters",$17.50,$0.00,$17.50,$6.50,$1.75,$0.00,PAYPAL,Sweaters,junkie .,1161 Cavalier Ave,N/A,Simi Valley,CA,93065,US
25/02/2020,3:04 PM,15/01/2020,No,evadana121,American Vintage,"vintage navy blue Nordstrom skinny belt. made from imported alligator hide. would best fit sizes 25-29 modeled on a 28. free shipping! DM with questions or for bundle deals 🖤

tags: #snakeskin #alligator #nordstrom #vintage #leather",$12.60,$0.00,$12.60,$4.50,$1.26,$0.00,PAYPAL,Belts,Eva Harris,2423 Diana Road,N/A,Baltimore,MD,21209,US
27/02/2020,3:07 AM,18/01/2020,No,zotoso,Harley Davidson,"vintage Harley Davidson mini backpack. cute and simultaneously badass. one size unisex. this will be cleaned before shipping I just wanted to get some photos while the lighting was good! has some peeling on the trim. free shipping! DM with questions or for bundle deals 🖤

measurements: 10” width 3.5” length 9.5” height 

tags: #sturgis #harley #urbanoutfitters #retro #unisex",$20.00,$0.00,$20.00,$6.50,$2.00,$0.00,PAYPAL,Bags & Purses,Zohar Tsoran,66-30 110th st ,N/A,Forest Hills ,NY,11375,US
27/02/2020,5:34 AM,10/12/2019,No,b_lanham,American Vintage,"vintage floral pussy-cat bow button-up. unisex marked a women’s 6 (S-M). harry styles/gucci/sugar grandma vibes. free shipping! DM with questions or for bundle deals 🖤

tags: #unisex #androgynous #floral #urbanoutfitters #70s",$21.00,$0.00,$21.00,$4.50,$2.10,$0.00,PAYPAL,Blouses,Brittany Lanham,1323 Aristo Street,N/A,Glendale ,CA,91201,US
27/02/2020,7:22 AM,03/02/2020,No,lmadduri,American Vintage,"silky peasant style button-up. has super extra balloon sleeves 3/4 length. so elegant so trendy. does have one small mark near the bottom on the front and the back but not noticeable when tucked in. unisex would fit S-M. free shipping! DM with questions or for bundle deals 🖤

tags: #silk #unisex #puffsleeves #everlane #depopusa",$6.30,$0.00,$6.30,$4.50,$0.63,$0.00,PAYPAL,Blouses,Lalitha Madduri,546 W. 114th St. ,N/A,New York,NY,10027,US
28/02/2020,12:05 AM,29/01/2020,No,sgbarber,American Vintage,"vintage handmade silky midi skirt. beautiful floral pattern. unisex no size but would fit S-M and modeled on a small. cottagecore vibes someone pls take this bby on a picnic. free shipping! DM with questions or for bundle deals 🖤

measurements laying flat: waist 26-34” length 27” 

tags: #handmade #midiskirt #cottagecore #urbanoutfitters #depopusa",$25.00,$0.00,$25.00,$6.50,$2.50,$0.00,PAYPAL,Skirts,Samantha Barber,116 whirlaway lane ,N/A,chapel hill ,NC,27516,US
29/02/2020,8:01 AM,29/02/2020,No,leejennifer1,N/A,bundle post for @leejennifer1 💫,$55.00,$0.00,$55.00,$10.50,$5.50,$0.00,PAYPAL,Art,Jennifer Lee,2980 E College Ave #H-14,N/A,Boulder,CO,80303,US
01/03/2020,2:14 AM,28/02/2020,Yes,edgyhannah,Urban Outfitters,"nostalgic graphic tee from urban outfitters. love this so much just don’t wear it enough ;( worn once. oversized fit marked a large and modeled on a small. unisex. free shipping! DM with questions or for bundle deals 🖤

tags: #unisex #depopusa #brandy #graphictee",$20.00,$0.00,$45.00,$10.50,$4.50,$0.00,PAYPAL,T-shirts,hannah mand,"628 Lakeview Way 
",N/A,Redwood City,CA,94062,US
01/03/2020,2:14 AM,29/02/2020,Yes,edgyhannah,Urban Outfitters,"black and pink Dickies sweatshirt. a little thinner than a hoodie but thicker than a tee. unisex would fit S-L and modeled on a small. free shipping! DM with questions or for bundle deals 🖤

tags: #dickies #unisex #depopusa #brandy",$25.00,-,-,-,-,-,PAYPAL,Sweatshirts,hannah mand,"628 Lakeview Way 
",N/A,Redwood City,CA,94062,US
01/03/2020,7:45 PM,28/01/2020,No,byunibi,American Vintage,"freaking amazing 1980s handmade babydoll teatime dress. a plethora of different pastel patterns were used to make this dress. has puff sleeves!! no size would best fit S-M modeled on a small. pink buttons up the back. it hurts to let this one go. free shipping! DM with questions or for bundle deals 🖤 

measurements laying flat: chest 17” waist 29” length 41” 

tags: #cottagecore #80s #handmade #vintage #depopusa",$40.00,$0.00,$40.00,$6.50,$4.00,$0.00,PAYPAL,Babydoll dresses,jordan !!,4819 Chastain Drive,N/A,Melbourne,FL,32940,US
01/03/2020,8:25 PM,01/03/2020,No,maddyarcaro,N/A,for @maddyarcaro (the one on the left is urs!) 💫,$6.00,$2.00,$8.00,$0.00,$0.80,$0.00,PAYPAL,Other,Maddy A,718 Douglas Drive,N/A,Cherry Hill,NJ,08034,US
02/03/2020,5:17 AM,15/01/2020,No,whatavar,Disney,"RESERVED DO NOT PURCHASE / vintage 101 Dalmatians overall dress. soooo freaking cute has two puppies embroidered on the pockets. unisex modeled on a small and would best fit M-L. free shipping! DM with questions or for bundle deals 🖤

measurements laying flat: waist 20.5” hips 22” length from neckline 28” 💫

tags: #disney #90s #urbanoutfitters #depopusa #unisex",$20.00,$0.00,$20.00,$6.50,$2.00,$0.00,PAYPAL,Casual dresses,ava 🥀,398 Sandy Lane,N/A,Deltona,FL,32738,US
05/03/2020,12:44 AM,21/02/2020,No,jayme13,Juicy Couture,"bubblegum freakin pink y2k juicy couture velour track jacket. full Paris Hilton glam. has the iconic crown sparkling on the back. unisex would best fit XS-S and modeled on a small. DM with questions or for bundle deals 🖤

tags: #juicy #y2k #urbanoutfitters #vintage #depopusa",$25.00,$5.00,$30.00,$0.00,$3.00,$0.00,PAYPAL,Track jackets,Jayme Salley,2182 east greenleaf drive,N/A,Frederick,MD,21702,US
05/03/2020,11:18 AM,05/03/2020,No,estherkinsaul,Dr. Martens,"doc martens flora chelsea boots. these have a lot of wear I wore them everyday for about a year. the toes are scuffed they need new insoles and there are a lot of creases. but! they still have some miles left. they’ve been in oceans and rivers and over many mountains with me and it hurts to let them go. size 7 would fit a 7-7.5. DM with questions or for bundle deals 🖤

tags: #urbanoutfitters #docs #unisex #chelsea #depopusa",$12.00,$8.00,$20.00,$0.00,$2.00,$0.00,PAYPAL,Boots,Esther Horstman ,707 Crestview dr ,N/A,Madison ,AL,35758,US
05/03/2020,6:11 PM,05/03/2020,No,fatima2003,American Vintage,"vintage Oregon oversized crewneck sweatshirt. has an embroidered lighthouse graphic in the center. pair w some patterned pants and some docs for a casual look! has a small stitched spot in back (photo 4). unisex would fit S-XL and modeled on a small. DM with questions or for bundle deals 🖤

tags: #brandy #vintage #unisex #urbanoutfitters #depopusa",$25.00,$5.00,$30.00,$0.00,$3.00,$0.00,PAYPAL,Sweatshirts,Fatima Shah,22 Roosevelt ,N/A,Irvine,CA,92620,US
05/03/2020,10:12 PM,27/02/2020,No,nishtha142,American Vintage,"sunshine yellow 90s floral midi dress. beautiful fit beautiful print beautiful details. would be an amazing prom dress but alas I am no longer a teen ;(( v reformation vibes. would best fit an XXS-XS modeled on a small (it’s pretty tight). DM with questions or for bundle deals 🖤

measurements laying flat: bust 13” waist 13” length 38.5” 💫 

tags: #reformation #brandy #vintageprom #depopusa #urbanoutfitters",$20.00,$5.00,$25.00,$0.00,$2.50,$0.00,PAYPAL,Midi dresses,Nishtha Trivedi,9843 RPO Way,N/A,New Brunswick ,NJ,08901,US
07/03/2020,3:02 AM,20/02/2020,No,andrearuizgomez,Disney,"red vintage Mickey Mouse quarter zip. from the Disney store. material is thinner than a sweater more like a henley. unisex would fit S-L and modeled on a small. DM with questions or for bundle deals 🖤

tags: #vintage #disney #mickey #unisex #depopusa",$15.00,$5.00,$20.00,$0.00,$2.00,$0.00,PAYPAL,Sweatshirts,Andrea Ruiz,24043 Wright Dr. ,N/A,Hayward ,CA,94545,US
09/03/2020,3:30 AM,27/02/2020,No,katey__,American Vintage,"y2k ditsy floral ruffle midi skirt. light pink and beige color way. reformation energy. unisex would fit S-M and modeled on a small. DM with questions or for bundle deals 🖤

tags: #reformation #urbanoutfitters #depopusa #ditsy #brandy",$20.00,$3.50,$23.50,$0.00,$2.35,$0.00,PAYPAL,Skirts,Katey M,15216 86th Street east,N/A,Puyallup ,WA,98372,US
09/03/2020,11:43 AM,16/01/2020,No,daliacolette,American Vintage,"vintage yellow San Francisco embroidered tee. has a cable car embroidered behind the letters. slightly oversized could fit S-L (loose-fitted) modeled on a small. unisex. DM with questions or for bundle deals 🖤

tags: #urbanoutfitters #graphictee #retro #unisex #vsco",$14.00,$3.50,$17.50,$0.00,$1.75,$0.00,PAYPAL,T-shirts,Dalia Gopstein,"90 University Heights

UHS 1 113D",N/A,Burlington,VT,05405,US
10/03/2020,1:01 AM,28/02/2020,No,urgrandmasofia,American Vintage,"vintage pastel kawaii knit sweater. has lil pink roses throughout. no tag but would best fit S-M and modeled on a small. unisex. DM with questions or for bundle deals 🖤

tags: #fairykei #grandma #kawaii #unisex #depopusa",$20.00,$5.00,$25.00,$0.00,$2.50,$0.00,PAYPAL,Sweaters,sofia a.,7320 SW 65 Avenu,N/A,Miami,FL,33143,US
11/03/2020,10:55 PM,11/03/2020,No,nishtha142,N/A,postage for @nishtha142 💫,$2.00,$2.00,$4.00,$0.00,$0.40,$0.00,PAYPAL,Other,Nishtha Trivedi ,10 Geiger Lane ,N/A,Warren,NJ,07059,US
11/03/2020,11:34 PM,27/02/2020,No,hunnybunny8,American Vintage,"vintage large teddy bear backpack. sooo cute rly good size. the pocket is in the body so there’s room for all the essentials and then some. unisex one size. DM with questions or for bundle deals 🖤

tags: #topshop #90s #depopusa #urbanoutfitters #stuffie",$25.00,$5.00,$30.00,$0.00,$3.00,$0.00,PAYPAL,Bags & Purses,Isabelle Wilson,212 Village Road,N/A,Wilmington,DE,19805,US
12/03/2020,3:12 PM,22/01/2020,No,isabellap5,Unbranded,"amazing y2k chunky platform sneakers from the brand no boundaries. these are deadstock and new with tags! super bratz vibes. unisex size 8 women’s and 6.5 men’s. free shipping! DM with questions or for bundle deals 🖤

#chunky #vintage #skechers #y2k #bratz",$20.00,$5.00,$25.00,$0.00,$2.50,$0.00,PAYPAL,Platforms,isabelle panelli,3759 E Liberty Lane,N/A,Gilbert,AZ,85296,US
12/03/2020,9:25 PM,28/01/2020,No,carladicovskiy,American Vintage,"y2k bubblegum pink fuzzy cropped cardigan brand new w tags! this was part of a 2 piece set but unfortunately i couldn’t find the matching bottoms :( marked a youth 16 would fit a women’s XS-S modeled on a small. super 2000s Disney/Nickelodeon vibes. DM with questions or for bundle deals 🖤

tags: #y2k #juicy #urbanoutfitters #unisex #egirl",$15.00,$6.00,$21.00,$0.00,$2.10,$0.00,PAYPAL,Cardigans,Carla Dicovskiy,1308 Abbott Boulevard ,N/A,Fort Lee,NJ,07024,US
14/03/2020,8:50 AM,19/12/2019,No,gangianthony,N/A,"vintage satin robe. unisex would best fit M-L. I’m 5’4 and it hits me right around the ankles. for a night out or for loungewear. DM with questions or for bundle deals 🖤

tags: #victoriassecret #satin #kimono #harrystyles #urbanoutfitters",$22.40,$3.50,$25.90,$0.00,$2.59,$0.00,PAYPAL,Robes,Anthony Gangi,525 Obispo Pacific Trail ,N/A,Arroyo Grande ,CA,93420,US
16/03/2020,4:30 AM,16/03/2020,No,petite1125,N/A,for @petite1125 💫,$1.00,$4.50,$5.50,$0.00,$0.55,$0.00,PAYPAL,Other,Ana-Sofia Muñoz,308 Pleasanthome Dr.,N/A,La Puente,CA,91744,US
16/03/2020,4:16 PM,08/03/2020,No,ximenanava994,American Vintage,"vintage 90s LL Bean tan corduroy pants. marked a size 6 petite modeled on a 5’4 size 6. these are sooo flattering and have a high-waisted fit. poetry major vibes. unisex. DM with questions or for bundle deals 🖤

tags: #urbanoutfitters #cords #unisex #depopusa #arthoe",$30.00,$5.00,$35.00,$0.00,$3.50,$0.00,PAYPAL,High waisted jeans,Blue Bunbun,1219 Alamo Creek Terrace Apt 6,N/A,Paso Robles,CA,93446,US
16/03/2020,4:47 PM,02/02/2020,No,tootmcdoot,American Vintage,"super cute y2k floral midi dress. maybe not perfect for 30 degree weather but definitely perfect for a pastel goth bby event. nicely fitted pictured on a size 6. has an asymmetrical ruffle at the bottom and pink straps/trim. unisex. DM with questions or for bundle deals 🖤

tags: #y2k #prom #homecoming #urbanoutfitters #depopusa",$19.60,$5.00,$24.60,$0.00,$2.46,$0.00,PAYPAL,Midi dresses,bonnierose dietrich,3538 preserve blvd,N/A,panama city,FL,32408,US
18/03/2020,3:13 AM,05/03/2020,No,taralakin,American Vintage,"vintage oversized country club crewneck sweatshirt. has SPRINGDALE embroidered in the center. gives me v brandy melville energy and is also the softest sweater I’ve ever put on my body. would fit S-XL modeled on a small. DM with questions or for bundle deals 🖤

NOTE: this has a couple of light stains on the sleeve that aren’t too bad! I can post more photos upon request :) 

tags: #urbanoutfitters #90s #unisex #depopusa #vintage",$17.00,$8.00,$25.00,$0.00,$2.50,$0.00,PAYPAL,Sweatshirts,Tara Lakin,591 South 167th Drive,N/A,Goodyear,AZ,85338,US
18/03/2020,3:54 AM,16/03/2020,No,fieyang,Brandy Melville,"red lauren cropped tank from brandy melville. it’s just too cold where I live to justify keeping but it has no flaws whatsoever. one size would best fit XS-S and modeled on a small. DM with questions or for bundle deals 🖤

tags: #brandy #vsco #unisex #depopusa #rarebrandy",$16.00,$4.00,$20.00,$0.00,$2.00,$0.00,PAYPAL,Tank tops,Fei Yang,985 Covington Rd,N/A,Los Altos,CA,94024-5053,US
19/03/2020,9:26 PM,29/02/2020,No,malikaawan,Urban Outfitters,"ON HOLD / cutest vintage doc martens from the 80s / 90s. brown w lil flowers embossed on the sides. these have standard vintage wear but are in great condition and are looking for a good home. unisex women’s 8 and men’s 6.5. free shipping! DM with questions or for bundle deals 🖤

tags: #oxfords #docs #urbanoutfitters #90s #brandy",$45.00,$0.00,$45.00,$14.00,$4.50,$0.00,PAYPAL,Platforms,Malikah Awan,16312 Angler Lane ,N/A,Huntington Beach ,CA,92647,US
19/03/2020,11:28 PM,19/03/2020,No,casseycakes,N/A,"bundle post for @casseycakes 💫 
vintage white cardigan 
vintage Eddie Bauer striped top 
handmade bralette crop top",$50.00,$0.00,$50.00,$10.50,$5.00,$0.00,PAYPAL,Other,Cassandra Magno,"201 N Toluca St 
Apt 11",N/A,Los Angeles ,CA,90026,US
21/03/2020,10:40 PM,21/03/2020,No,ouchwronghole,N/A,"bundle for @ouchwronghole 💫
vintage RL quarter zip 
daisy tank",$46.00,$0.00,$46.00,$10.50,$4.60,$1.63,STRIPE,Other,lizzie enwright,3762 storms rd,N/A,kettering,OH,45429,US
24/03/2020,4:28 PM,24/03/2020,No,mcsharpdawg,American Vintage,"the most gorgeous prairie dress I’ve ever owned. true vintage handmade from the 1970s. green gingham with an apron-tie detail and beautiful puff sleeves. I wanna keep this piece so bad it’s just too big for me. would recommend for an M/L modeled on a small. would also recommend for someone 5’7 and over I’m 5’4 and it’s too long. free shipping! DM with questions or for bundle deals 🖤

measurements laying flat untied: 42” bust 44” waist 57” length 💫

tags: #cottagecore #reformation #unisex #depopusa #gunnesax",$40.00,$0.00,$40.00,$10.50,$4.00,$1.46,STRIPE,Maxi dresses,Alexis Nelson,73 N 22nd Street,N/A,Columbus,OH,43203,US
25/03/2020,2:32 PM,25/03/2020,No,hiraethvibes,N/A,cheetah amara for @hiraethvibes 💫,$34.00,$0.00,$34.00,$4.50,$3.40,$0.00,PAYPAL,Other,Daniel Koh,"5801 Firestone Court,

",N/A,San Jose,CA,95138,US
25/03/2020,6:05 PM,25/03/2020,No,tianacarcamo,N/A,skylar bow tank for @tianacarcamo 💫,$25.00,$0.00,$25.00,$4.50,$2.50,$0.00,PAYPAL,Other,Tiana Carcamo,144 Kalina Street ,N/A,Fort Polk ,LA,71459,US
25/03/2020,7:07 PM,11/03/2020,No,iqourl,Brandy Melville,"brandy melville amara dress brand new with tags. got this in the mail today and unfortunately ur girl is a little too thicc for it but thought I’d see if anyone wants it before I return! has a pink ditsy floral pattern. for reference I’m 5’4 27” waist and 40” hips. one size but would fit XS-S. shoot me an offer! will come w a handmade scrunchie and brandy stickers. DM with questions or for bundle deals 🖤

tags: #amara #brandy #urbanoutfitters #ditsy #unisex",$38.00,$0.00,$38.00,$6.50,$3.80,$0.00,PAYPAL,Summer dresses,Ruoqi Liu,"18452 Halsted St 
Unit 410",N/A, Northridge,CA,91325,US
25/03/2020,9:06 PM,25/03/2020,No,marisagannon,N/A,for @marisagannon 💫,$6.50,$0.00,$6.50,$6.50,$0.65,$0.00,PAYPAL,Other,Marosa Gamnon,3345 Woodlawn Avenue,N/A,Schenectady,NY,12304,US
27/03/2020,1:35 AM,26/03/2020,No,bellalarson15,American Vintage,"vintage cropped Minnesota crewneck. pale yellow raw hem. the cutest woodland graphic in the center. unisex would fit XS-L and modeled on a small. DM with questions or for bundle deals 🖤

tags: #90s #urbanoutfitters #pastel #graphictee #depopusa",$20.00,$6.50,$26.50,$0.00,$2.00,$0.00,PAYPAL,Sweatshirts,Bella L,20585 Twilight Trail ,N/A,Rogers ,MN,55374,US
29/03/2020,1:46 AM,27/02/2020,No,dansythomas,American Vintage,"1980s rainbow knit sweater tee. vibrant colorway. unisex would best fit S-M and modeled on a small. DM with questions or for bundle deals 🖤

tags: #80s #urbanoutfitters #depopusa #sweater #graphictee",$20.00,$5.00,$25.00,$0.00,$2.50,$0.00,PAYPAL,Sweaters,Dansy Thomas,"2808 NE Martin Luther King Jr Blvd, Unit 5",N/A,Portland ,OR,97212,US
29/03/2020,5:32 AM,13/03/2020,No,gmoreno1224,American Vintage,"the coolest 90s animaniacs mini backpack. black nylon features the animaniacs on the flap and the title on the bottom. from warner bros 1994. unisex. would fit a phone wallet and keys comfortably. DM with questions or for bundle deals 🖤

tags: #urbanoutfitters #looneytunes #animaniacs #unisex #vintage",$35.00,$4.50,$39.50,$0.00,$3.95,$0.00,PAYPAL,Bags & Purses,Graciela Moreno,2825 Elk Grove rd,N/A,Carrollton,TX,75007,US`
