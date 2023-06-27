//js for men
import header from "../component/header.js";
document.getElementById("header").innerHTML=header()

let man = [
    {
      id: 1,
      name: "Smashic Brand Logo Shoes",
      price: 1799,
      oldprice: 4499,
      brandname: "Puma",
      offer: 60,
      size: "UK3",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2023/1/31/ce9c89f5-ab94-4754-8f56-00a6747173e41675143770544PumaSmashicUnisexSneakers1.jpg",
    },
  
    {
      id: 2,
      name: "Unisex Sneakers",
      price: 1599,
      oldprice: 3999,
      brandname: "Puma",
      offer: 60,
      size: "UK7",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16530962/2021/12/24/9f9b34b2-cba5-415a-9718-c224263649f11640350292538-Puma-Unisex-Casual-Shoes-1941640350292216-1.jpg",
    },
  
    {
      id: 3,
      name: "Unisex TRC Blaze Sneakers",
      price: 1799,
      oldprice: 4499,
      brandname: "Puma",
      offer: 60,
      size: "UK3",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767158/2023/1/31/0aa8aa89-94e1-4e78-96a6-86d55ac8cb051675143826155PumaSmashicUnisexSneakers1.jpg",
    },
  
    {
      id: 4,
      name: "Unisex TRC Blaze Sneakers",
      price: 4949,
      oldprice: 1099,
      brandname: "Puma",
      offer: 55,
      size: "UK7",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21497766/2023/3/24/a7743f4b-cac7-41f4-bfb3-94e5a37281a31679641776169-TRC-Blaze-Mens-Sneakers-6501679641775700-1.jpg",
    },
    {
      id: 5,
      name: "Wired Rapid Textured Sneakers",
      price: 2199,
      oldprice: 499,
      brandname: "Puma",
      offer: 60,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18814816/2022/11/6/1104f25e-29c1-42bf-a9c7-0dae89a8e5a71667717398456PumaUnisexBlackWiredRapidTexturedSneakers1.jpg",
    },
    {
      id: 6,
      name: "RS-X Reinvention Sneakers",
      price: 4949,
      oldprice: 10999,
      brandname: "Puma",
      offer: 55,
      size: "UK4",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767216/2023/1/31/570a0640-b374-4e70-8315-44669b4a6df51675143112712RS-XReinventionUnisexSneakers1.jpg",
    },
  
    {
      id: 7,
      name: "Unisex Wired Run Pure Sneakers",
      price: 2399,
      oldprice: 5999,
      brandname: "Puma",
      offer: 60,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21497678/2023/3/1/a639c9e6-8846-4365-9be5-231c567f56571677653940569-Puma-Wired-Run-Pure-Unisex-Sneakers-3661677653940207-1.jpg",
    },
  
    {
      id: 8,
      name: "Smashic Brand Logo Shoes",
      price: 2799,
      oldprice: 6999,
      brandname: "Puma",
      offer: 60,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21497706/2023/2/28/b0f33773-e53e-42be-b14a-d343016651861677580039970Anzarun20UnisexSneakers1.jpg",
    },
    {
      id: 9,
      name: "Unisex RS-X GEN Sneakers",
      price: 4289,
      oldprice: 10999,
      brandname: "Puma",
      offer: 61,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21497874/2023/2/28/b1d408df-16b7-4427-a1e2-0edadaba5ff71677576533620RS-XGENGPUMAUnisexSneakers1.jpg",
    },
  
    {
      id: 10,
      name: "Unisex CV In Running Shoes",
      price: 2799,
      oldprice: 6999,
      brandname: "Puma",
      offer: 60,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21496366/2023/3/1/1f7df38f-c964-4c30-83f3-f20655d278e61677653072864CellViveIntakeUnisexShoes1.jpg",
    },
  
    {
      id: 11,
      name: "Unisex Dual Flex Sneakers",
      price: 2149,
      oldprice: 4299,
      brandname: "Puma",
      offer: 50,
      size: "UK3",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19104804/2023/1/24/a3a02c04-cc57-49ee-bdef-3e55e49369f61674545289729-Dual-Flex-9561674545289399-1.jpg",
    },
  
    {
      id: 12,
      name: "Unisex Softr PC Training Shoes",
      price: 3999,
      oldprice: 7999,
      brandname: "Puma",
      offer: 50,
      size: "UK8",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21496412/2023/3/1/4afb33a8-9998-400e-a1ee-66b7c40bb1f81677653074862SoftrideProCoastTrainingShoes1.jpg",
    },
    {
      id: 13,
      name: "Unisex NRGY Comet Running",
      price: 2159,
      oldprice: 4499,
      brandname: "Puma",
      offer: 52,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12692664/2022/5/4/06ce6d77-a5d7-43e3-bfa7-b46deade08081651661090293PumaUnisexBlackNRGYCometRunningShoes1.jpg",
    },
  
    {
      id: 14,
      name: "TRC Blaze Milkshake Sneakers",
      price: 4729,
      oldprice: 10999,
      brandname: "Puma",
      offer: 57,
      size: "UK3",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767248/2023/1/31/5ed3ed8d-142a-4be7-b92b-808272d2dd1e1675145791751TRCBlazeMilkshakeUnisexSneakers1.jpg",
    },
    {
      id: 15,
      name: "Infusion One8 Training Shoes",
      price: 3599,
      oldprice: 7999,
      brandname: "Puma",
      offer: 55,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22154012/2023/3/27/90a66d37-0515-42a2-bc16-3ec0a46fb5b51679920881220InfusionOne8UnisexTrainingShoes1.jpg",
    },
  
    {
      id: 16,
      name: "Unisex Playmaker Sneakers",
      price: 3749,
      oldprice: 7499,
      brandname: "Puma",
      offer: 50,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19150502/2022/7/19/93e9f0b8-f2f0-4736-b78f-a12afeb542481658203188903PumaUnisexBlackRedColourblockedSneakers1.jpg",
    },
  
    {
      id: 17,
      name: "Unisex Future Rider Double",
      price: 4499,
      oldprice: 8999,
      brandname: "Puma",
      offer: 50,
      size: "UK4",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21497782/2023/3/24/6f42ca0c-ca98-462e-bb42-8adc44b0fa161679647677774-Future-Rider-Double-Unisex-Sneakers-5681679647677432-1.jpg",
    },
  
    {
      id: 18,
      name: "Unisex Game Sneakers",
      price: 2024,
      oldprice: 4499,
      brandname: "Puma",
      offer: 55,
      size: "UK3",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15948808/2021/10/30/10a2b820-885c-44bc-b9b2-c15d671f2eee1635578980468PumaUnisexBlueTexturedTrekkingShoes1.jpg",
    },
  
    {
      id: 19,
      name: "Unisex Urus Printed Sneakers",
      price: 1799,
      oldprice: 3999,
      brandname: "Puma",
      offer: 55,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19104402/2022/7/25/6d1e4d4f-92ce-4b74-a332-f77f0eb0b5601658751477883-Puma-Urus-Unisex-Sneakers-61658751477521-1.jpg",
    },
  
    {
      id: 20,
      name: "Disperse XT 2 Training Shoes",
      price: 2879,
      oldprice: 5999,
      brandname: "Puma",
      offer: 52,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21496326/2023/2/28/8e31a780-53a3-4243-9d6f-7b711cb9d9f91677575965083DisperseXT2MenTrainingShoes1.jpg",
    },
  
    {
      id: 21,
      name: "Men Lightweight Loafers",
      price: 626,
      oldprice: 3299,
      brandname: "Roadster",
      offer: 81,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23066062/2023/5/8/14b23b8d-21e7-4fa0-a8c4-ab79cffd404f1683527414342MenSolidLoafersSlip-OnsShoes1.jpg",
    },
  
    {
      id: 22,
      name: "Men Woven Design Sneakers",
      price: 629,
      oldprice: 2999,
      brandname: "Roadster",
      offer: 79,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21321150/2022/12/27/5f1aa9c7-ff99-41da-988b-a4d555c2dab61672139455878RoadsterNavySneakersShoesForMen1.jpg",
    },
  
    {
      id: 23,
      name: "Men Colourblocked Sneakers",
      price: 769,
      oldprice: 2199,
      brandname: "Roadster",
      offer: 65,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14769850/2022/4/26/21ae91bc-b379-4848-bd84-17b234dc083b1650947244961-Roadster-Men-Beige--Green-Colourblocked-Sneakers-81116509472-7.jpg",
    },
  
    {
      id: 24,
      name: "Men Lightweight Sneakers",
      price: 739,
      oldprice: 3695,
      brandname: "Roadster",
      offer: 80,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23066084/2023/5/8/8c5c8a1c-ad78-4201-9765-0d9ed807c63f1683524969077MenWhiteChunkyColourblockedCasualSneakersShoes1.jpg",
    },
    {
      id: 25,
      name: "Men Lightweight Sneakers",
      price: 775,
      oldprice: 3695,
      brandname: "Roadster",
      offer: 79,
      size: "UK3",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23066058/2023/5/23/38ce0893-599d-499c-a137-5ce30cfc675e1684823667813-The-Roadster-Lifestyle-Co-Men-White-Textured-Lightweight-Com-1.jpg",
    },
  
    {
      id: 26,
      name: "Men Sneakers",
      price: 759,
      oldprice: 3795,
      brandname: "Roadster",
      offer: 80,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16513992/2022/1/26/c69f37ba-a245-4a3c-b524-fd8143a1b3b41643184889115-Roadster-Men-White-Sneakers-1291643184888736-1.jpg",
    },
  
    {
      id: 27,
      name: "Men Solid Sneakers",
      price: 769,
      oldprice: 2199,
      brandname: "Roadster",
      offer: 60,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14769846/2021/8/3/702d4235-0700-41ea-8e25-2a9db6d0baaf1627967834853-Roadster-Men-White-Solid-Sneakers-9511627967834385-1.jpg",
    },
  
    {
      id: 28,
      name: "Men Solid Sneakers",
      price: 747,
      oldprice: 2199,
      brandname: "Roadster",
      offer: 66,
      size: "UK8",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14769854/2022/5/19/2434fe40-388b-4e57-a8b8-17a630139f081652962629280-Roadster-Men-Black-Solid-Sneakers-2361652962629016-1.jpg",
    },
  
    {
      id: 29,
      name: "Men Solid Sneakers",
      price: 769,
      oldprice: 2199,
      brandname: "Roadster",
      offer: 65,
      size: "UK7",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14769848/2021/8/3/94c8c2bb-0f89-4615-b4ba-b9f5a38b02c51627967616438-Roadster-Men-White-Sneakers-6211627967616141-1.jpg",
    },
  
    {
      id: 30,
      name: "Men Lightweight Sneakers",
      price: 759,
      oldprice: 3759,
      brandname: "Roadster",
      offer: 80,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14769854/2022/5/19/2434fe40-388b-4e57-a8b8-17a630139f081652962629280-Roadster-Men-Black-Solid-Sneakers-2361652962629016-1.jpg",
    },
  
    {
      id: 31,
      name: "Men Woven Design Sneakers",
      price: 645,
      oldprice: 3759,
      brandname: "Mast & Harbour",
      offer: 83,
      size: "UK8",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19185416/2022/7/20/e396eda7-ef3e-42f3-8e5a-fe2c46ccc3c61658310521026MastHarbourMensWhiteFauxLeatherCasualChunkySneakers1.jpg",
    },
  
    {
      id: 32,
      name: "Men Colourblocked PU Sneakers",
      price: 620,
      oldprice: 2299,
      brandname: "Mast & Harbour",
      offer: 73,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18300360/2022/5/17/c93af918-bd67-4b24-8d93-98dfef11acd71652782861360MastHarbourMenWhiteColourblockedPUSneakers1.jpg",
    },
  
    {
      id: 33,
      name: "Men Casual Sneakers",
      price: 599,
      oldprice: 1999,
      brandname: "Mast & Harbour",
      offer: 70,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19659148/2022/8/26/c894c1d5-fef2-4f9a-82e9-4c5db13c761c1661505014208MastHarbourMenWhiteSneakers1.jpg",
    },
  
    {
      id: 34,
      name: "Men Lightweight Loafers",
      price: 626,
      oldprice: 3299,
      brandname: "Mast & Harbour",
      offer: 81,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23066062/2023/5/8/14b23b8d-21e7-4fa0-a8c4-ab79cffd404f1683527414342MenSolidLoafersSlip-OnsShoes1.jpg",
    },
  
    {
      id: 35,
      name: "Men Colourblocked Sneakers",
      price: 574,
      oldprice: 2499,
      brandname: "Mast & Harbour",
      offer: 77,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20408970/2022/11/22/65c588bf-bc49-4ea9-b65b-7a6d08fecb1b1669105979189MastHarbourMenOrangeAndWhiteColourblockedSneakers1.jpg",
    },
  
    {
      id: 36,
      name: "Men Embellished Horsebit Mules",
      price: 749,
      oldprice: 2999,
      brandname: "Bxxy",
      offer: 75,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22770594/2023/4/14/3e0b11c1-85c8-4630-910a-2ab47a045d6d1681478054209BxxyMenBrownColourblockedLoafers1.jpg",
    },
  
    {
      id: 37,
      name: "Men Embellished Horsebit Mules",
      price: 749,
      oldprice: 2999,
      brandname: "Bxxy",
      offer: 75,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22770598/2023/4/14/81d4d873-6228-4b39-b515-db9ebe9511611681468901594MensBeigeLatestStylishCasualPunjabiJutti1.jpg",
    },
  
    {
      id: 38,
      name: "Men Lightweight Slip-On Clogs",
      price: 899,
      oldprice: 2999,
      brandname: "Bxxy",
      offer: 70,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22650852/2023/4/5/6292884a-ef19-4056-bbb9-25136bb96c161680708747232BxxyMenGreyWovenDesignSlip-OnSneakers1.jpg",
    },
  
    {
      id: 39,
      name: "Men Running Sports Shoes",
      price: 702,
      oldprice: 1899,
      brandname: "Bxxy",
      offer: 63,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14769854/2022/5/19/2434fe40-388b-4e57-a8b8-17a630139f081652962629280-Roadster-Men-Black-Solid-Sneakers-2361652962629016-1.jpg",
    },
  
    {
      id: 40,
      name: "Men Running Shoes",
      price: 719,
      oldprice: 1499,
      brandname: "Bxxy",
      offer: 52,
      size: "UK6",
      image:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18726314/2023/1/12/e00316e2-c661-44bd-ac2e-74d82d988bde1673513073872-Action-Men-Black-Mesh-Running-Shoes-9551673513073398-1.jpg",
    },
  ];

  man.map((ele)=>{
    let div1 = document.createElement("div");
    div1.setAttribute("class","div1");
    let div2 = document.createElement("div");
    div2.setAttribute("class","div2");
    let img = document.createElement("img");
    img.src=ele.image;
    let title=document.createElement("p")
    title.innerHTML=ele.name;
    let price=document.createElement("p")
    price.innerHTML=ele.price;
    let oldprice=document.createElement("p")
    oldprice.innerHTML=ele.oldprice;
    let brandname=document.createElement("h2")
    brandname.innerHTML=ele.brandname;
    let offer=document.createElement("p")
    offer.innerHTML=ele.offer;
    let size=document.createElement("p")
    size.innerHTML=ele.size;
    div2.append(img,brandname,title,size,price,oldprice)
    document.getElementById("men1").append(div1)
    document.getElementById("men2").append(div2)
  })