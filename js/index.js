// variables

// variables of language
const language = document.querySelector(".iran");
const very = document.querySelector(".very");

// variables of mach lick in a click on lick
const linck = document.querySelectorAll(".linck");

// variables open and close mennu
const openMenu = document.querySelector(".humber");
const closeMenu = document.querySelector(".close");
const menuAitems = document.querySelector(".menu-aitems");

// variables cheng country
const optionCountry = document.querySelectorAll(".option");

// variable map
let mapHome = document.querySelector(".map-n-home");

// event listeners
EventListener();
function EventListener() {
  // close menu language
  language.addEventListener("click", openLanguage);

  // show data lick in html
  linck.forEach((element) => {
    element.addEventListener("click", showData);
  });

  // show botton back to top
  document.addEventListener("scroll", scroller);

  // creat slide Companys in the the slider
  document.addEventListener("DOMContentLoaded", shwoSlide);

  // open menu

  openMenu.addEventListener("click", openMenuHtml);

  // close menu
  closeMenu.addEventListener("click", closeMenuHmtl);

  // cheng country
  optionCountry.forEach((e) => {
    e.addEventListener("click", chengData);
  });
}

// function

// open language from evry language
function openLanguage(e) {
  e.preventDefault();
  very.classList.toggle("very1");
}

// show data lick in html
function showData(e) {
  e.preventDefault();
  // remoeve class hover
  linck.forEach((el) => {
    el.children[1].classList = "lick-text";
  });

  // add class him to  arget tag
  e.target.classList.add("him");

  // text conetent target tag
  const textContent = e.target.textContent;
  const imgContent = document.querySelector(".click-linck-img img");

  // incudes name in tag
  textInfo(textContent, imgContent);
}

// cheng img and titel and info in the click on linck
function textInfo(textContent, imgSrc) {
  // cheking info
  if (textContent === "شبکه توزیع محتوا") {
    const info =
      "شبکه توزیع محتوای ابر آروان شبکه‎‌ای امن و گسترده برای تحویل محتوای وب‌سایت شماست تا به کمک آن برای کاربران‌تان در سراسر جهان در دسترس باشید. با راه‌اندازی سریع، پایداری بالا و امکانات کامل این محصول مانند DNS و امنیت ابری، دیگر دغدغه‌ی تامین منابع زیرساختی و امنیت سرویس خود را نخواهید داشت.";
    const img = "././img/svg/cdn-desktop.svg";

    // add to html
    addInfoToTheHtml(textContent, info, imgSrc, img);
  }

  // cheking info
  if (textContent === "سرور ابری") {
    const info =
      "با سرورهای ابری مقیاس‌پذیر و مقرون به صرفه‌ی ابر آروان در بهترین دیتاسنترهای ایران و اروپا با منابع و سیستم‌عامل دلخواه به تعداد نامحدود سرور (ابرک) بسازید و به ‌شکل آنی منابع آن را افزایش دهید. شما می‌توانید به‌کمک فایروال و شبکه‌های خصوصی و عمومی سرور ابری آروان، سطوح دسترسی متفاوتی برای سرور خود در نظر بگیرید و با گرفتن اسنپ‌شات به وضعیت قبلی آن بازگردید.";
    const img = "./img/svg/cloud-computing-desktop.svg";

    // add to html
    addInfoToTheHtml(textContent, info, imgSrc, img);
  }

  // cheking info
  if (textContent === "فضای ابری") {
    const info =
      "با فضای ابری آروان از نوع Object Storage، امکان ذخیره‌سازی هر نوع فایل یا داده‌ای را در محیط ابری، به‌شکل کاملن رمزنگاری شده خواهید داشت و از نقاط مختلف دنیا، به‌طور پایدار به یک سامانه‌ی ذخیره‌سازی امن و مقیاس‌پذیر دسترسی پیدا می‌کنید؛ بدون آن‌که نگران زیرساخت یا از دست رفتن اطلاعات باشید.";
    const img = "./img/svg/cloud-storage-desktop.svg";

    // add to html
    addInfoToTheHtml(textContent, info, imgSrc, img);
  }

  // cheking info
  if (textContent === "پلتفرم ویدیو") {
    const info =
      "پلتفرم ویدیو ابر آروان بستری امن و در دسترس برای محتوای ویدیویی و صوتی شماست. با سرویس میزبانی ویدیو، فیلم‌ها و ویدیوهای خود را در فضای ابری نامحدود نگهداری کنید و آن را با کیفیت‌ها و فرمت‌های متفاوت به دست کاربران‌تان برسانید. هم‌چنین‌ با پخش زنده‌ ابر آروان می‌توانید استریم خود را با کم‌ترین تاخیر و بهترین کیفیت، بدون اختلال در معرض دید میلیون‌ها کاربر قرار دهید.";
    const img = "./img/svg/video-platform-desktop.svg";

    // add to html
    addInfoToTheHtml(textContent, info, imgSrc, img);
  }

  // cheking info
  if (textContent === "کانتینز ابری") {
    const info =
      "کانتینر ابری یا سکوی ابری آروان مبتنی بر Container و بر اساس استانداردهای Kubernetes است. شما می‌توانید تنها با یک دستور در CLI ایده‌های نرم‌افزاری خود را توسعه دهید و آن‌ها را به محصول تبدیل کنید. فرقی نمی‌کند نرم‌افزاری ساده یا پیچیده دیپلوی کنید؛ در کانتینر ابری (PaaS) آروان تمامی نیازمندی‌های زیرساختی شما به آسانی تامین می‌شود و با کنترل مداوم وضعیت زیرساخت، نرم‌افزارتان همیشه در دسترس خواهد بود.";
    const img = "./img/svg/paas-desktop.svg";

    // add to html
    addInfoToTheHtml(textContent, info, imgSrc, img);
  }
}

// content click on lick add html
function addInfoToTheHtml(textContent, info, src, img) {
  const titel = document.querySelector(".titel-linck");
  const infoLinck = document.querySelector(".info-linck");
  const imgContent = src;

  // replase info in content click on linck
  titel.innerHTML = textContent;
  infoLinck.innerHTML = info;
  imgContent.src = img;
}

// how botton  back to top with scroller
function scroller() {
  // some scroll y
  let scroll = scrollY;

  // btn back to top
  let div = `
          <a href="#head">
               <img src="./img/svg/iconmonstr-arrow-up-thin.svg" alt="back to top">
          </a>

     `;
  // choos valent back to top
  const valent = document.querySelector("#back-to-top");

  // show btn
  if (scroll >= 400) {
    valent.classList = "back-to-top";

    valent.innerHTML = div;
  }

  // remove btn
  if (scroll < 400) {
    valent.classList.remove("back-to-top");
  }
}

// creat slide Companys in the the slider
function shwoSlide() {
  // value info camoanys
  const CompanysInfo = [
    {
      logo: "./img/svg companis/zarinpal.svg",
      infoBussines:
        "آروان باعث شده تمرکز زرین‌پال روی کار فنی خودش باشد و دغدغه‌ی زیرساختی نداریم. با گذشت زمان و بهتر شدن تیم فنی آروان، محصول هم بهبود محسوسی پیدا کرده است. من همیشه CDN، DNS و امنیت ابری آروان را به دوستان و مدیران کسب‌وکارها توصیه کرده‌ام و می‌کنم.",
      menagerBussines: "مصطفی امیری؛ مدیرعامل زرین‌پال",
    },
    {
      logo: "./img/svg companis/snapp.svg",
      infoBussines:
        "تمام خدمات تیم نقشه‌ی اسنپ که نیازمند CDN‌ یا DNS است، از محصولات ابر آروان استفاده می‌کنند. روزانه میلیون‌ها کاربر تاکسی  اسنپ، اسنپ فود، اسنپ مارکت، اسنپ باکس و اسنپ‌تریپ از نقشه‌ی اسنپ استفاده می‌کنند. با Load Balancer  آروان، حدود ۹۹.۵ درصد ترافیک نقشه‌ی اسنپ صرفه‌جویی می‌شود.",
      menagerBussines: "علی کرمی؛ مدیر فنی نقشه اسنپ",
    },
    {
      logo: "./img/svg companis/pasargad.svg",
      infoBussines:
        "ما در بانک پاسارگاد، به سمت استفاده از خدمات مقابله با DDoS بر بستر CDN رفتیم تا امن‌تر شویم و سرویس‌دهی سریع‌تری داشته باشیم. «دستیابی به امنیت و کاهش سطح ریسک» مهم‌ترین ارزش افزوده‌های خدمات ابر آروان برای بانک پاسارگاد بوده است.",
      menagerBussines: "نعمت الله کلانتری؛ مدیریت زیرساخت بانک پاسارگاد",
    },
    {
      logo: "./img/svg companis/neshan.svg",
      infoBussines:
        "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود و با زیرساخت ابری آروان نگرانی زیرساختی در این مسیر توسعه نیستیم.",
      menagerBussines: "مصطفی جملبادانی؛ مدیر فنی نشان",
    },
    {
      logo: "./img/svg companis/namava.svg",
      infoBussines:
        "ما در نماوا به‌طور ناگهانی در دوران قرنطینه، نیاز به راه‌اندازی سریع پخش زنده‌ی کنسرت‌ داشتیم. تیم فنی آروان پس از شنیدن نیازمندی‌ها و برآورد ترافیک به کمک ما آمدند و در کم‌تر از نصف روز توانستیم این سرویس را با هزینه‌ی منصفانه و بدون مشکل به کاربران‌مان ارایه‌ کنیم.",
      menagerBussines: "ناصر حیدری؛ مدیر زیرساخت نماوا",
    },
    {
      logo: "./img/svg companis/lahzenegar.svg",
      infoBussines:
        "در لحظه‌نگار ترجیح می‌دهیم دغدغه‌ی مدیریت سرور و دپلوی کردن آن را نداشته باشیم. با استفاده از PaaS آروان، توسعه کلاستر داکر یا کوبرنتیز بر عهده ما نیست. ما دیگر دغدغه‌ی Maintenace کوبرنتیز نداریم و از پشتیبانی و سرعت پاسخ‌دهی تیم آروان هم رضایت داریم.",
      menagerBussines: "محمد حسین عابدین پور ؛ CTO لحظه نگار",
    },
    {
      logo: "./img/svg companis/tiwall.svg",
      infoBussines:
        "ابر آروان به‌معنای واقعی سرویس با کیفیت و در سطح روز دنیا عرضه می‌کند. در کنار فروش بلیت جشنواره‌ها، ما دو بلیت‌فروشی پرفشار را با استفاده از CDN ابر آروان، با موفقیت و بدون اختلال داشتیم و کاربران ما با مشکل یا کندی در وب‌سایت مواجه نشدند.",
      menagerBussines: "محمد عمروآبادی؛ مدیرعامل تیوال",
    },
  ];

  // create slide in silder
  creatSlide(CompanysInfo);
}

// create slide in silder
function creatSlide(CInfo) {
  let sliderContents = document.querySelectorAll(".slider-content");

  //read value
  sliderContents.forEach((silderContent) => {
    CInfo.forEach((CIn) => {
      let div = document.createElement("div");
      div.classList = "slide";

      let img = document.createElement("img");
      img.src = CIn.logo;
      img.classList = "img-bussines";
      img.alt = "logo";
      div.appendChild(img);

      let infoBussines = document.createElement("p");
      infoBussines.appendChild(document.createTextNode(CIn.infoBussines));
      infoBussines.classList = "info-bussines";
      div.appendChild(infoBussines);

      let menagr = document.createElement("p");
      menagr.appendChild(document.createTextNode(CIn.menagerBussines));
      menagr.classList = "menager-bussines";
      div.appendChild(menagr);

      silderContent.appendChild(div);
    });
  });
}

//open menu
function openMenuHtml() {
  menuAitems.classList.add("activ");
}

// close menu
function closeMenuHmtl() {
  menuAitems.classList.remove("activ");
}

// cheng country
function chengData(e) {
  very.classList.remove("very1");
  if (e.target.classList.contains("option")) {
    let nameCountry = e.target.children[0].textContent;
    let imgCountry = e.target.children[1].children[0].src;

    // add to the last one country
    goToLastOne(nameCountry, imgCountry);
  } else if (
    e.target.classList.contains("text-language") ||
    e.target.classList.contains("img-language")
  ) {
    let nameCountry = e.target.parentElement.children[0].textContent;
    let imgCountry = e.target.parentElement.children[1].children[0].src;

    // add to the last one country
    goToLastOne(nameCountry, imgCountry);
  }
}

// add to the last one
function goToLastOne(nameCountry, imgCountry) {
  const lastOne = document.querySelector(".iran");
  const textLastOne = lastOne.children[0];
  const imgLastOne = lastOne.children[1].children[0];

  //replas now info in the old info
  textLastOne.textContent = nameCountry;
  imgLastOne.src = imgCountry;
}
