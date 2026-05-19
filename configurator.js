const SITE_BASE = "https://tomaslt992.github.io/Jung-parasai";
const ASSET_BASE = `${SITE_BASE}/assets`;
const IMAGE_BASE = `${ASSET_BASE}/images`;

const ICONS = {
  facebook: `${ASSET_BASE}/Ikonos_Facebook.png`,
  facebookGroup: `${ASSET_BASE}/Ikonos_Facebook_grupe.png`,
  instagram: `${ASSET_BASE}/Ikonos_Instagram.png`,
  linkedin: `${ASSET_BASE}/Ikonos_Linkedin.png`,
  website: `${ASSET_BASE}/Ikonos_Website.png`,
  youtube: `${ASSET_BASE}/youtube.png`,
  pinterest: `${ASSET_BASE}/pinterest.png`,
  telegram: `${ASSET_BASE}/telegram.png`
};

const IMAGE_OPTIONS = [
  "Adam B.png",
  "Adam K.png",
  "Artur.png",
  "Iwona Likus-01.png",
  "Julia.png",
  "Maciek.png",
  "Marcin.png",
  "Natalia Szopa.png",
  "Piotr.png",
  "Robert.png",
  "Roma.png",
  "Tomek.png"
];

const SOCIAL_TYPES = Object.keys(ICONS);

const PRESETS = {
  lt: {
    label: "LT",
    supportOffice: true,
    allowPhoto: true,
    sections: [
      {
        title: "",
        nameLang: "primary",
        roleLang: "primary",
        companyHtml: "UAB „JUNG Vilnius“,<br>Senasis Ukmergės kel. 12, Užubalių k., LT-14302 Vilniaus r.<br>Įm. kodas: 111792793 &nbsp; PVM mokėtojo kodas: LT117929717",
        extraHtml: '<span style="font-size:10px;">Apsilankykite pas mus: <a href="https://demo.jung.lt/" style="color:#1980A0; text-decoration:underline;">JUNG SHOWROOM Vilnius</a></span><br>\n<span style="font-size:10px;">Įkvėpimo semkitės iš mūsų naujienlaiškio – <a href="https://go.jung.lt/naujienlaiskis" style="color:#1980A0; text-decoration:underline;">prisijunkite čia!</a></span>',
        disclaimer: "Šis el. laiškas ir jo priedai gauti iš UAB „JUNG Vilnius“ yra konfidencialūs ir skirti tik nurodytiems gavėjui (-ams). Jei nesate numatytas gavėjas, nekopijuokite, neplatinkite ir neatskleiskite šios informacijos. Jei neteisingai gavote šį laišką, prašome informuoti siuntėją ir ištrinti laišką. UAB „JUNG Vilnius“ turi teisę susipažinti su šios komunikacijos turiniu, siekdama užtikrinti duomenų apsaugą ir informacinių sistemų saugumą.",
        websiteLabel: "JUNG.LT",
        websiteUrl: "http://www.jung.lt/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/JUNG.Vilnius" },
          { type: "facebookGroup", enabled: true, url: "https://www.facebook.com/groups/JUNGVilniusgrupe" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-vilnius/" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_smart/" },
          { type: "website", enabled: true, url: "http://www.jung.lt/" }
        ]
      },
      {
        title: "EN versija",
        nameLang: "secondary",
        roleLang: "secondary",
        companyHtml: "JSC „JUNG Vilnius“, Senasis Ukmergės kel. 12, Užubalių k., Avižienių sen., Vilniaus r. sav., <br>LT-14302",
        extraHtml: '<span style="font-size:10px;">Visit us: <a href="https://demo.jung.lt/" style="color:#1980A0; text-decoration:underline;">JUNG SHOWROOM Vilnius</a></span><br>\n<span style="font-size:10px;">Get inspired with our newsletter – <a href="https://go.jung.lt/naujienlaiskis" style="color:#1980A0; text-decoration:underline;">join here!</a></span>',
        disclaimer: "This email and attachments from JSC JUNG Vilnius are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. JSC JUNG Vilnius reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG.LT",
        websiteUrl: "http://www.jung.lt/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/JUNG.Vilnius" },
          { type: "facebookGroup", enabled: true, url: "https://www.facebook.com/groups/JUNGVilniusgrupe" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-vilnius/" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_smart/" },
          { type: "website", enabled: true, url: "http://www.jung.lt/" }
        ]
      }
    ]
  },
  pl: {
    label: "PL",
    supportOffice: false,
    allowPhoto: true,
    sections: [
      {
        title: "",
        nameLang: "primary",
        roleLang: "primary",
        companyHtml: "JUNG POLSKA Sp. z o.o. | ul. Heliotropów 29 | 04-796 Warszawa <br>NIP: 1132995167 | KRS: 0000776033 | BDO: 000140724",
        extraHtml: "",
        disclaimer: "Przesłana wiadomość może zawierać informacje o charakterze poufnym przeznaczone wyłącznie dla adresata wiadomości. Zabrania się wykorzystywania, rozpowszechniania bądź dystrybucji przez inne osoby i/lub organizacje różne od wyszczególnionych. W przypadku omyłkowego otrzymania tej informacji, prosimy o natychmiastowe poinformowanie nadawcy i usunięcie otrzymanej poczty. Wiadomość została sprawdzona przez system antywirusowy przed wysłaniem z systemu.",
        websiteLabel: "JUNG-POLSKA.PL",
        websiteUrl: "https://www.jung-group.com/pl-PL/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/pl-PL/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/Polska.JUNG" },
          { type: "youtube", enabled: true, url: "https://www.youtube.com/@jungpolska7409" },
          { type: "linkedin", enabled: true, url: "https://pl.linkedin.com/company/jung-polska" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_polska/" },
          { type: "website", enabled: true, url: "https://www.jung-group.com/pl-PL/" }
        ]
      },
      {
        title: "EN version",
        nameLang: "secondary",
        roleLang: "secondary",
        companyHtml: "JUNG POLSKA Sp. z o.o. | Heliotropów 29 | 04-796 Warsaw <br>VAT ID: 1132995167 | KRS: 0000776033 | BDO: 000140724",
        extraHtml: "",
        disclaimer: "This email and attachments from JUNG POLSKA are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. JUNG POLSKA reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG-POLSKA.PL",
        websiteUrl: "https://www.jung-group.com/pl-PL/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/pl-PL/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/Polska.JUNG" },
          { type: "youtube", enabled: true, url: "https://www.youtube.com/@jungpolska7409" },
          { type: "linkedin", enabled: true, url: "https://pl.linkedin.com/company/jung-polska" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_polska/" },
          { type: "website", enabled: true, url: "https://www.jung-group.com/pl-PL/" }
        ]
      }
    ]
  },
  nordic: {
    label: "Nordic",
    supportOffice: false,
    allowPhoto: true,
    sections: [
      {
        title: "",
        nameLang: "primary",
        roleLang: "primary",
        companyHtml: "Orrekulla Industrigata 19-21, 425 36 Hisings Kärra <br><br>",
        extraHtml: '<span style="font-size:10px;">Visit us: <a href="https://www.jung-group.com/en-DE/The-company/Showrooms/Europe/Sweden-Gothenburg/" style="color:#1980A0; text-decoration:underline;">JUNG SHOWROOM Hisings Kärra</a></span>',
        disclaimer: "This email and attachments from Jung Nordic are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. Jung Nordic reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG NORDIC",
        websiteUrl: "https://www.jung-group.com/en-DE/Service/Language/Nordic/",
        bannerUrl: `${ASSET_BASE}/nordic_banner.jpg`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/jung.nordics" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-group/posts/?feedView=all" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jungnordic/" },
          { type: "pinterest", enabled: true, url: "https://www.pinterest.com/jung_group/" },
          { type: "youtube", enabled: true, url: "https://www.youtube.com/@JUNGGroup" }
        ]
      },
      {
        title: "EN version",
        nameLang: "secondary",
        roleLang: "secondary",
        companyHtml: "Orrekulla Industrigata 19-21, 425 36 Hisings Kärra <br><br>",
        extraHtml: '<span style="font-size:10px;">Visit us: <a href="https://www.jung-group.com/en-DE/The-company/Showrooms/Europe/Sweden-Gothenburg/" style="color:#1980A0; text-decoration:underline;">JUNG SHOWROOM Hisings Kärra</a></span>',
        disclaimer: "This email and attachments from Jung Nordic are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. Jung Nordic reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG NORDIC",
        websiteUrl: "https://www.jung-group.com/en-DE/Service/Language/Nordic/",
        bannerUrl: `${ASSET_BASE}/nordic_banner.jpg`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/jung.nordics" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-group/posts/?feedView=all" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jungnordic/" },
          { type: "pinterest", enabled: true, url: "https://www.pinterest.com/jung_group/" },
          { type: "youtube", enabled: true, url: "https://www.youtube.com/@JUNGGroup" }
        ]
      }
    ]
  },
  lv: {
    label: "LV",
    supportOffice: false,
    allowPhoto: true,
    sections: [
      {
        title: "LV version",
        nameLang: "primary",
        roleLang: "primary",
        companyHtml: "SIA „JUNG Vilnius”, Senasis Ukmergės kel. 12, Užubalių k., Avižienių sen., Vilniaus r. sav., <br>LT-14302",
        extraHtml: '<span style="font-size:10px;">Apmeklējiet mūs: <a href="https://demo.jung.lt/" style="color:#1980A0; text-decoration:underline;">JUNG SHOWROOM Vilnius</a></span>',
        disclaimer: "Šis e-pasts un pielikumi no Jung Group ir konfidenciāli un paredzēti tikai saņēmējam(-iem). Ja neesat paredzētais saņēmējs, lūdzu, nekopējiet, neizplatiet un neizpaudiet to. Nekavējoties informējiet sūtītāju un izdzēsiet ziņojumu. AS Jung Group patur tiesības piekļūt šai saziņai, lai aizsargātu uzņēmuma datus un IT sistēmas integritāti.",
        websiteLabel: "JUNG.LV",
        websiteUrl: "http://jung.lv/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/lv-LV/Uznemums/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/JUNG.Latvija" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-vilnius/" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_smart/" },
          { type: "website", enabled: true, url: "http://jung.lv/" }
        ]
      },
      {
        title: "EN version",
        nameLang: "secondary",
        roleLang: "secondary",
        companyHtml: "JSC „JUNG Vilnius”, Senasis Ukmergės kel. 12, Užubalių k., Avižienių sen., Vilniaus r. sav., <br>LT-14302",
        extraHtml: '<span style="font-size:10px;">Visit us: <a href="https://demo.jung.lt/" style="color:#1980A0; text-decoration:underline;">JUNG SHOWROOM Vilnius</a></span>',
        disclaimer: "This email and attachments from Jung GROUP are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. Jung GROUP reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG.LV",
        websiteUrl: "http://jung.lv/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/lv-LV/Uznemums/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/JUNG.Latvija" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-vilnius/" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_smart/" },
          { type: "website", enabled: true, url: "http://jung.lv/" }
        ]
      }
    ]
  },
  ee: {
    label: "EE",
    supportOffice: false,
    allowPhoto: true,
    sections: [
      {
        title: "EN version",
        nameLang: "primary",
        roleLang: "primary",
        companyHtml: "",
        extraHtml: "",
        disclaimer: "JUNG Estonia are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. JUNG Estonia reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG.EE",
        websiteUrl: "http://jung.ee/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/Jung.Estonia" },
          { type: "pinterest", enabled: true, url: "https://www.pinterest.com/jung_group/" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-group/posts/?feedView=all" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_smart/" },
          { type: "website", enabled: true, url: "http://jung.ee/" }
        ]
      },
      {
        title: "EN version",
        nameLang: "secondary",
        roleLang: "secondary",
        companyHtml: "",
        extraHtml: "",
        disclaimer: "JUNG Estonia are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. JUNG Estonia reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG.EE",
        websiteUrl: "http://jung.ee/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/Jung.Estonia" },
          { type: "pinterest", enabled: true, url: "https://www.pinterest.com/jung_group/" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jung-group/posts/?feedView=all" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_smart/" },
          { type: "website", enabled: true, url: "http://jung.ee/" }
        ]
      }
    ]
  },
  ua: {
    label: "UA",
    supportOffice: true,
    allowPhoto: true,
    sections: [
      {
        title: "",
        nameLang: "primary",
        roleLang: "primary",
        companyHtml: "ТОВ «ЮНГ Україна»<br>вул. Київська, 6в, м. Вишневе, Київська обл., 08132<br>",
        extraHtml: '<span style="font-size:10px;"><a href="https://waze.com/ul/hu8vwd7yp9" style="color:#1980A0; text-decoration:underline;">Waze</a></span><br>\n<span style="font-size:10px;"><a href="https://goo.gl/maps/XffGxKZR5aHiMw4S6" style="color:#1980A0; text-decoration:underline;">Google Maps</a></span>',
        disclaimer: "Цей електронний лист та додані файли від ТОВ Jung Україна є конфіденційними та призначені виключно для зазначених одержувачів. Якщо ви не є одним із них, будь ласка, не копіюйте, не поширюйте та не розкривайте його зміст. Негайно повідомте відправника та видаліть повідомлення. ТОВ Jung Ukraine залишає за собою право доступу до цієї кореспонденції з метою захисту даних компанії та забезпечення цілісності ІТ-систем.",
        websiteLabel: "JUNG.UA",
        websiteUrl: "https://www.jung.de/ua/7962/new-items/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/uk-UA/Kompaniya/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/jungukraine" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jungukraine" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_ukraine/" },
          { type: "telegram", enabled: true, url: "https://t.me/jungukrainenews" },
          { type: "pinterest", enabled: true, url: "https://www.pinterest.com/jung_group/" },
          { type: "youtube", enabled: true, url: "https://www.youtube.com/@JUNGGroup" },
          { type: "website", enabled: true, url: "https://www.jung.de/ua/7962/new-items/" }
        ]
      },
      {
        title: "EN version",
        nameLang: "secondary",
        roleLang: "secondary",
        companyHtml: "JUNG Ukraine <br>Kyivs'ka Str. 6B, Vyshneve Town, Kyiv Region, 08132, Ukraine",
        extraHtml: '<span style="font-size:10px;"><a href="https://waze.com/ul/hu8vwd7yp9" style="color:#1980A0; text-decoration:underline;">Waze</a></span><br>\n<span style="font-size:10px;"><a href="https://goo.gl/maps/XffGxKZR5aHiMw4S6" style="color:#1980A0; text-decoration:underline;">Google Maps</a></span>',
        disclaimer: "This email and attachments from JSC Jung Ukraine are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. JSC Jung Ukraine reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG.UA",
        websiteUrl: "https://www.jung.de/ua/7962/new-items/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/uk-UA/Kompaniya/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/jungukraine" },
          { type: "linkedin", enabled: true, url: "https://www.linkedin.com/company/jungukraine" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_ukraine/" },
          { type: "telegram", enabled: true, url: "https://t.me/jungukrainenews" },
          { type: "pinterest", enabled: true, url: "https://www.pinterest.com/jung_group/" },
          { type: "youtube", enabled: true, url: "https://www.youtube.com/@JUNGGroup" },
          { type: "website", enabled: true, url: "https://www.jung.de/ua/7962/new-items/" }
        ]
      }
    ]
  },
  kz: {
    label: "KZ",
    supportOffice: false,
    allowPhoto: true,
    sections: [
      {
        title: "",
        nameLang: "primary",
        roleLang: "primary",
        companyHtml: "Офис: г. Алматы, ул. Льва Толстого 1, кабинет 9",
        extraHtml: "",
        disclaimer: "Это письмо и вложения к нему от Jung Central Asia конфиденциальны и предназначены только получателю(ям). Если вы не являетесь предполагаемым получателем, пожалуйста, не копируйте, не распространяйте и не разглашайте его. Немедленно уведомите отправителя и удалите сообщение. Jung Central Asia оставляет за собой право доступа к этому сообщению в целях защиты данных компании и целостности ИТ-системы.",
        websiteLabel: "JUNG.KZ",
        websiteUrl: "https://www.jung-group.com/en-DE/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/JUNG.CentralAsia" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_centralasia/" },
          { type: "website", enabled: true, url: "https://www.jung-group.com/en-DE/" }
        ]
      },
      {
        title: "EN versija",
        nameLang: "secondary",
        roleLang: "secondary",
        companyHtml: "Almaty office st. Lev Tolstoy 1 room 9",
        extraHtml: "",
        disclaimer: "This email and attachments from Jung Central Asia are confidential and intended only for the recipient(s). If you are not the intended recipient, please do not copy, distribute, or disclose it. Notify the sender immediately and delete the message. Jung Central Asia reserves the right to access this communication to protect company data and IT system integrity.",
        websiteLabel: "JUNG.KZ",
        websiteUrl: "https://www.jung-group.com/en-DE/",
        bannerUrl: `${ASSET_BASE}/JUNG_Gruendervilla_Schalksmuehle_2007%201.png`,
        bannerLink: "https://www.jung-group.com/en-DE/The-company/Founder-s-villa/",
        socials: [
          { type: "facebook", enabled: true, url: "https://www.facebook.com/JUNG.CentralAsia" },
          { type: "instagram", enabled: true, url: "https://www.instagram.com/jung_centralasia/" },
          { type: "website", enabled: true, url: "https://www.jung-group.com/en-DE/" }
        ]
      }
    ]
  }
};

const state = {
  mode: "basic",
  presetId: "lt",
  fullNamePrimary: "",
  fullNameSecondary: "",
  positionPrimary: "",
  positionSecondary: "",
  email: "",
  mobilePhone: "",
  officePhone: "+37052361919",
  useOfficePhone: false,
  includeEnglishVersion: false,
  includePhoto: false,
  photoPreset: "",
  photoDataUrl: "",
  photoFileName: "",
  photoWidth: 68,
  photoAlt: "",
  sections: []
};

const els = {};
let statusTimer;

document.addEventListener("DOMContentLoaded", () => {
  bindEls();
  attachEvents();
  loadPreset("lt");
  render();
});

function bindEls() {
  els.modeButtons = Array.from(document.querySelectorAll("[data-mode]"));
  els.basicPanel = document.getElementById("basicPanel");
  els.advancedPanel = document.getElementById("advancedPanel");
  els.previewFrame = document.getElementById("previewFrame");
  els.htmlOutput = document.getElementById("htmlOutput");
  els.copyButton = document.getElementById("copyButton");
  els.downloadButton = document.getElementById("downloadButton");
  els.resetButton = document.getElementById("resetButton");
  els.status = document.getElementById("status");
}

function attachEvents() {
  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      render();
    });
  });

  els.copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(els.htmlOutput.value);
    setStatus("HTML copied.");
  });

  els.downloadButton.addEventListener("click", () => {
    const blob = new Blob([els.htmlOutput.value], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slugify(state.fullNamePrimary || "signature") || "signature"}.html`;
    a.click();
    URL.revokeObjectURL(url);
    setStatus("HTML file ready.");
  });

  els.resetButton.addEventListener("click", () => {
    loadPreset(state.presetId);
    render();
  });
}

function loadPreset(presetId) {
  state.presetId = presetId;
  state.sections = normalizeSections(JSON.parse(JSON.stringify(PRESETS[presetId].sections)));
  state.useOfficePhone = false;
  state.includeEnglishVersion = false;
  state.includePhoto = false;
  state.photoPreset = "";
  state.photoDataUrl = "";
  state.photoFileName = "";
  state.photoAlt = "";
  state.photoWidth = 68;
}

function render() {
  renderMode();
  renderBasicPanel();
  renderAdvancedPanel();
  updatePreview();
}

function renderMode() {
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
  els.basicPanel.hidden = state.mode !== "basic";
  els.advancedPanel.hidden = state.mode !== "advanced";
}

function renderBasicPanel() {
  const preset = PRESETS[state.presetId];
  const hasSecondary = preset.sections.length > 1;
  const inputFields = [
    field("Language / market", presetPicker()),
    field("Full name", input("fullNamePrimary", state.fullNamePrimary, "e.g. John Smith")),
    field("Job title", input("positionPrimary", state.positionPrimary, "e.g. Sales Manager")),
    field("Email", input("email", state.email, "name@jung.xx", "email")),
    field("Mobile phone", input("mobilePhone", state.mobilePhone, "+370...", "text"))
  ];

  if (hasSecondary && state.includeEnglishVersion) {
    inputFields.push(field("English version name", input("fullNameSecondary", state.fullNameSecondary, "If different from the main version")));
    inputFields.push(field("English version job title", input("positionSecondary", state.positionSecondary, "If different from the main version")));
  }

  if (preset.supportOffice && state.useOfficePhone) {
    inputFields.push(field("Office phone", input("officePhone", state.officePhone, "+370...", "text")));
  }

  const toggleFields = [
    hasSecondary ? checkbox("Include English version", "includeEnglishVersion", state.includeEnglishVersion) : "",
    preset.supportOffice ? checkbox("Use office phone", "useOfficePhone", state.useOfficePhone) : "",
    preset.allowPhoto ? checkbox("Include photo version", "includePhoto", state.includePhoto) : ""
  ].filter(Boolean);

  if (preset.allowPhoto && state.includePhoto) {
    toggleFields.push(field("Photo upload", fileInput("photoUpload", "image/*")));
    if (state.photoFileName) {
      toggleFields.push(helpText(`Selected file: ${state.photoFileName}`));
    }
  }

  els.basicPanel.innerHTML = `
    <div class="form-grid">
      ${inputFields.join("")}
      ${toggleFields.join("")}
    </div>
  `;

  bindDynamicInputs(els.basicPanel);
}

function renderAdvancedPanel() {
  const preset = PRESETS[state.presetId];
  const hasSecondary = preset.sections.length > 1;
  const generalFields = [
    field("Language / market", selectInput("presetId", state.presetId)),
    field("Primary full name", input("fullNamePrimary", state.fullNamePrimary, "")),
    field("Primary job title", input("positionPrimary", state.positionPrimary, "")),
    field("Email", input("email", state.email, "", "email")),
    field("Mobile phone", input("mobilePhone", state.mobilePhone, ""))
  ];

  if (hasSecondary && state.includeEnglishVersion) {
    generalFields.push(field("English version name", input("fullNameSecondary", state.fullNameSecondary, "")));
    generalFields.push(field("English version job title", input("positionSecondary", state.positionSecondary, "")));
  }

  if (preset.supportOffice && state.useOfficePhone) {
    generalFields.push(field("Office phone", input("officePhone", state.officePhone, "")));
  }

  const generalToggles = [
    hasSecondary ? checkbox("Include English version", "includeEnglishVersion", state.includeEnglishVersion) : "",
    preset.supportOffice ? checkbox("Use office phone", "useOfficePhone", state.useOfficePhone) : "",
    preset.allowPhoto ? checkbox("Include photo version", "includePhoto", state.includePhoto) : ""
  ].filter(Boolean);

  if (preset.allowPhoto && state.includePhoto) {
    generalFields.push(field("Photo upload", fileInput("photoUpload", "image/*")));
    if (state.photoFileName) {
      generalFields.push(helpText(`Selected file: ${state.photoFileName}`));
    }
  }

  els.advancedPanel.innerHTML = `
    <div class="advanced-layout">
      <div class="advanced-block">
        <h3>General</h3>
        <div class="form-grid">
          ${generalFields.join("")}
          ${generalToggles.join("")}
        </div>
      </div>
      ${state.sections.map((section, index) => advancedSection(section, index)).join("")}
    </div>
  `;

  bindDynamicInputs(els.advancedPanel);
}

function advancedSection(section, index) {
  const title = section.title || "";
  return `
    <div class="advanced-block">
      ${title ? `<h3>${escapeHtml(title)}</h3>` : ""}
      <div class="form-grid">
        ${field("Website label", input(`sections.${index}.websiteLabel`, section.websiteLabel, ""))}
        ${field("Website URL", input(`sections.${index}.websiteUrl`, section.websiteUrl, "", "url"))}
        ${field("Banner image", fileInput(`sections.${index}.bannerUpload`, "image/*"))}
        ${section.bannerFileName ? helpText(`Selected banner: ${section.bannerFileName}`) : ""}
        ${field("Banner link", input(`sections.${index}.bannerLink`, section.bannerLink, "", "url"))}
        ${field("Company text", textarea(`sections.${index}.companyText`, section.companyText, 4))}
        ${field("Additional links", additionalLinksEditor(index, section.additionalItems || []))}
        ${field("Disclaimer", textarea(`sections.${index}.disclaimer`, section.disclaimer, 5))}
        ${field("Social icons", socialEditor(index, section.socials))}
      </div>
    </div>
  `;
}

function bindDynamicInputs(scope) {
  scope.querySelectorAll("[data-path]").forEach((element) => {
    element.addEventListener("input", onInput);
    element.addEventListener("change", onInput);
  });

  scope.querySelectorAll("[data-file-path]").forEach((element) => {
    element.addEventListener("change", onFileChange);
  });

  scope.querySelectorAll("[data-preset-button]").forEach((button) => {
    button.addEventListener("click", () => {
      loadPreset(button.dataset.presetButton);
      render();
    });
  });
}

function onInput(event) {
  const el = event.target;
  const path = el.dataset.path;
  const value = el.type === "checkbox" ? el.checked : el.type === "number" ? Number(el.value || 0) : el.value;

  if (path.endsWith(".enabled") && el.type === "checkbox" && value) {
    const sectionMatch = path.match(/^sections\.(\d+)\.socials\.\d+\.enabled$/);
    if (sectionMatch) {
      const sectionIndex = Number(sectionMatch[1]);
      const enabledCount = state.sections[sectionIndex].socials.filter((social) => social.enabled).length;
      if (enabledCount >= 5) {
        el.checked = false;
        setStatus("You can enable up to 5 social icons.");
        render();
        return;
      }
    }
  }

  setByPath(state, path, value);

  if (path === "presetId") {
    loadPreset(value);
    render();
    return;
  }

  if (
    path === "useOfficePhone" ||
    path === "includePhoto" ||
    path === "includeEnglishVersion" ||
    path.endsWith(".enabled")
  ) {
    render();
    return;
  }

  updatePreview();
}

function onFileChange(event) {
  const input = event.target;
  const path = input.dataset.filePath;
  const file = input.files && input.files[0];

  if (!path) {
    return;
  }

  if (!file) {
    if (path === "photoUpload") {
      state.photoDataUrl = "";
      state.photoFileName = "";
    } else if (path.endsWith(".bannerUpload")) {
      const sectionPath = path.replace(".bannerUpload", "");
      setByPath(state, `${sectionPath}.bannerDataUrl`, "");
      setByPath(state, `${sectionPath}.bannerFileName`, "");
    }
    render();
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = typeof reader.result === "string" ? reader.result : "";
    if (path === "photoUpload") {
      state.photoDataUrl = dataUrl;
      state.photoFileName = file.name;
    } else if (path.endsWith(".bannerUpload")) {
      const sectionPath = path.replace(".bannerUpload", "");
      setByPath(state, `${sectionPath}.bannerDataUrl`, dataUrl);
      setByPath(state, `${sectionPath}.bannerFileName`, file.name);
    }
    render();
  };
  reader.readAsDataURL(file);
}

function updatePreview() {
  const html = buildHtml();
  els.htmlOutput.value = html;
  els.previewFrame.srcdoc = buildPreviewHtml();
}

function buildHtml() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Email Signature</title><script src="./auth.js"></script></head><body style="margin:0; padding:0; background:white; font-family:Arial, sans-serif;">${buildSectionsMarkup()}</body></html>`;
}

function buildPreviewHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Preview</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(180deg, #eff3f1 0%, #e6ece8 100%);
    }
    .preview-page {
      min-height: 100vh;
      padding: 24px;
    }
    .preview-window {
      max-width: 860px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #dfe7ea;
      box-shadow: 0 24px 48px rgba(15, 23, 32, 0.10);
    }
    .preview-window-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 42px;
      padding: 0 18px;
      background: #f8fafb;
      border-bottom: 1px solid #e1e7ea;
    }
    .preview-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #d2dde1;
    }
    .preview-dot.active {
      background: #1980A0;
    }
    .preview-body {
      padding: 36px;
      overflow: auto;
    }
    .preview-signature-wrap {
      display: inline-block;
      padding: 20px;
      background: #ffffff;
    }
    .preview-body h2 {
      margin: 0 0 16px;
      font-size: 24px;
      line-height: 1.2;
    }
    .preview-body table[width="650"] {
      width: 100%;
      max-width: 650px;
    }
  </style>
</head>
<body>
  <div class="preview-page">
    <div class="preview-window">
      <div class="preview-window-bar">
        <span class="preview-dot active"></span>
        <span class="preview-dot"></span>
        <span class="preview-dot"></span>
      </div>
      <div class="preview-body"><div class="preview-signature-wrap">${buildSectionsMarkup()}</div></div>
    </div>
  </div>
</body>
</html>`;
}

function buildSectionsMarkup() {
  const activeSections = state.includeEnglishVersion && state.sections.length > 1
    ? [state.sections[1]]
    : [state.sections[0]];
  const parts = [];

  activeSections.forEach((section) => {
    if (state.includePhoto && (state.photoDataUrl || state.photoPreset) && PRESETS[state.presetId].allowPhoto) {
      parts.push(renderSection(section, true));
    } else {
      parts.push(renderSection(section, false));
    }
  });

  return parts.join("\n");
}

function renderSection(section, photoMode) {
  const name = section.nameLang === "secondary" && state.fullNameSecondary ? state.fullNameSecondary : state.fullNamePrimary;
  const role = section.roleLang === "secondary" && state.positionSecondary ? state.positionSecondary : state.positionPrimary;
  const leftTop = photoMode
    ? renderPhotoHeader(name, role)
    : `<span style="font-size:13px; font-weight:bold;">${escapeHtml(name)}</span><br><span style="font-size:12px;">${escapeHtml(role)}</span>`;
  const contacts = renderContacts();
  const rightTopPrefix = photoMode ? "<br>" : "";
  const sectionTitle = section.title ? `<h2>${escapeHtml(section.title)}</h2>` : "";
  const leftWidth = photoMode ? " width: 60%;" : "";
  const rightWidth = photoMode ? " width: 40%;" : "";
  const websiteBreaks = photoMode ? "<br><br>" : "<br><br><br>";
  const bannerSrc = section.bannerDataUrl || section.bannerUrl;
  const companyHtml = plainTextToHtml(section.companyText || "");
  const additionalHtml = renderAdditionalItems(section.additionalItems || []);

  return `
${sectionTitle}
<table border="0" cellpadding="0" cellspacing="0" width="650" style="font-family:Arial,sans-serif; font-size:12px; color:#000; background:#fff;${state.presetId === "nordic" ? " margin-top:10px;" : ""}">
<tr>
  <td valign="top" style="padding:10px 0;${leftWidth}">
    ${leftTop}
  </td>
  <td valign="top" align="right" style="padding:10px 0;${rightWidth}">
    ${rightTopPrefix}${contacts}
  </td>
</tr>
<tr><td colspan="2" style="border-top:1px solid #ccc;"></td></tr>
<tr>
  <td valign="top" style="padding:10px 0;${leftWidth}">
    <span style="font-size:11px; line-height:16px;">
      ${companyHtml}
    </span>${additionalHtml ? `<br><br>\n${additionalHtml}` : "<br><br>"}
  </td>
  <td valign="top" align="right" style="padding:10px 0;${rightWidth}">
    ${photoMode ? "<br>" : ""}<a href="${escapeAttr(section.websiteUrl)}" style="display:block; font-size:12px; font-weight:bold; color:#1980A0; text-decoration:none; margin-bottom:8px;">${escapeHtml(section.websiteLabel)}</a>${websiteBreaks}
    ${renderSocials(section.socials)}
  </td>
</tr>
<tr><td colspan="2" style="border-top:1px solid #ccc;"></td></tr>
<tr>
  <td colspan="2" style="padding-top:15px;">
    <a href="${escapeAttr(section.bannerLink)}" target="_blank">
      <img src="${escapeAttr(bannerSrc)}" width="100%" style="display:block; border:0;">
    </a>
  </td>
</tr>
<tr>
  <td colspan="2" style="padding:10px 0;">
    <span style="font-size:9px; color:#000;">
${escapeHtml(section.disclaimer)}
    </span>
  </td>
</tr>
</table>`;
}

function renderPhotoHeader(name, role) {
  const src = state.photoDataUrl || `${IMAGE_BASE}/${encodeURIComponent(state.photoPreset)}`;
  const alt = state.photoAlt || name || "Profile photo";
  return `<table border="0" cellpadding="0" cellspacing="0" style="width:auto;"><tr><td valign="middle"><img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" width="${escapeAttr(String(state.photoWidth || 68))}"></td><td valign="middle" style="padding-left:4px;"><span style="font-size:13px; font-weight:bold;">${escapeHtml(name)}</span><br><span style="font-size:12px;">${escapeHtml(role)}</span></td></tr></table>`;
}

function renderContacts() {
  const lines = [];

  if (state.useOfficePhone && state.officePhone) {
    lines.push(anchor(`tel:${normalizePhone(state.officePhone)}`, state.officePhone));
  }
  if (state.email) {
    lines.push(anchor(`mailto:${state.email}`, state.email));
  }
  if (state.mobilePhone) {
    lines.push(anchor(`tel:${normalizePhone(state.mobilePhone)}`, state.mobilePhone));
  }

  return lines.join("<br>");
}

function renderSocials(socials) {
  return socials
    .filter((social) => social.enabled && social.url)
    .map((social) => `<a href="${escapeAttr(social.url)}"><img src="${escapeAttr(ICONS[social.type])}" width="16" height="16"></a>`)
    .join("\n    ");
}

function normalizeSections(sections) {
  return sections.map((section) => ({
    ...section,
    companyText: htmlToPlainText(section.companyHtml || ""),
    additionalItems: parseAdditionalItems(section.extraHtml || ""),
    bannerDataUrl: section.bannerDataUrl || "",
    bannerFileName: section.bannerFileName || "",
    socials: normalizeSocials(section.socials || [])
  }));
}

function parseAdditionalItems(extraHtml) {
  const html = String(extraHtml || "").trim();
  if (!html) {
    return defaultAdditionalItems();
  }

  const segments = html
    .split(/<br\s*\/?>\s*\n?/i)
    .map((segment) => segment.trim())
    .filter(Boolean)
    .map((segment) => segment.replace(/^<span[^>]*>/i, "").replace(/<\/span>$/i, "").trim());

  const items = segments.map((segment) => {
    const match = segment.match(/^(.*?)<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>(.*)$/i);
    if (!match) {
      return {
        prefix: htmlToPlainText(segment),
        linkLabel: "",
        linkUrl: ""
      };
    }

    return {
      prefix: htmlToPlainText(match[1] || "").trim(),
      linkLabel: htmlToPlainText(match[3] || "").trim(),
      linkUrl: match[2] || ""
    };
  });

  return items.length ? items : defaultAdditionalItems();
}

function defaultAdditionalItems() {
  return [
    { prefix: "", linkLabel: "", linkUrl: "" },
    { prefix: "", linkLabel: "", linkUrl: "" }
  ];
}

function renderAdditionalItems(items) {
  const activeItems = items.filter((item) => item.prefix || item.linkLabel || item.linkUrl);
  if (!activeItems.length) {
    return "";
  }

  return activeItems
    .map((item) => {
      const prefix = item.prefix ? `${escapeHtml(item.prefix)} ` : "";
      const link = item.linkLabel && item.linkUrl
        ? `<a href="${escapeAttr(item.linkUrl)}" style="color:#1980A0; text-decoration:underline;">${escapeHtml(item.linkLabel)}</a>`
        : escapeHtml(item.linkLabel || "");
      return `<span style="font-size:10px;">${prefix}${link}</span>`;
    })
    .join("<br>\n");
}

function normalizeSocials(socials) {
  return SOCIAL_TYPES.map((type) => {
    const existing = socials.find((social) => social.type === type);
    return {
      type,
      enabled: existing ? Boolean(existing.enabled) : false,
      url: existing ? existing.url || "" : ""
    };
  });
}

function field(label, control) {
  return `<label class="field"><span class="field-label">${escapeHtml(label)}</span>${control}</label>`;
}

function input(path, value, placeholder = "", type = "text") {
  return `<input class="text-input" type="${type}" data-path="${escapeAttr(path)}" value="${escapeAttr(value || "")}" placeholder="${escapeAttr(placeholder)}">`;
}

function fileInput(path, accept) {
  return `<input class="text-input" type="file" data-file-path="${escapeAttr(path)}" accept="${escapeAttr(accept)}">`;
}

function textarea(path, value, rows) {
  return `<textarea class="text-area" rows="${rows}" data-path="${escapeAttr(path)}">${escapeHtml(value || "")}</textarea>`;
}

function socialEditor(sectionIndex, socials) {
  const enabledCount = socials.filter((social) => social.enabled).length;
  return `<div class="social-grid">${helpText(`Select up to 5 icons. Currently selected: ${enabledCount}/5`)}${socials.map((social, socialIndex) => socialRow(sectionIndex, social, socialIndex, enabledCount)).join("")}</div>`;
}

function additionalLinksEditor(sectionIndex, items) {
  return `<div class="social-grid">${helpText("Use each line for one short sentence with one optional clickable link.")}${items.map((item, itemIndex) => additionalLinkRow(sectionIndex, item, itemIndex)).join("")}</div>`;
}

function additionalLinkRow(sectionIndex, item, itemIndex) {
  return `
    <div class="social-row">
      <span class="social-name">Line ${itemIndex + 1}</span>
      <div class="form-grid">
        ${field(`Line ${itemIndex + 1} text`, input(`sections.${sectionIndex}.additionalItems.${itemIndex}.prefix`, item.prefix || "", "Text before the link"))}
        ${field(`Line ${itemIndex + 1} link label`, input(`sections.${sectionIndex}.additionalItems.${itemIndex}.linkLabel`, item.linkLabel || "", "Link label"))}
        ${field(`Line ${itemIndex + 1} link URL`, input(`sections.${sectionIndex}.additionalItems.${itemIndex}.linkUrl`, item.linkUrl || "", "https://...", "url"))}
      </div>
      <span></span>
    </div>
  `;
}

function socialRow(sectionIndex, social, socialIndex, enabledCount) {
  const disableUnchecked = !social.enabled && enabledCount >= 5;
  return `
    <div class="social-row">
      <span class="social-name">${escapeHtml(social.type)}</span>
      <input class="text-input" type="url" data-path="sections.${sectionIndex}.socials.${socialIndex}.url" value="${escapeAttr(social.url || "")}" placeholder="https://..." ${social.enabled ? "" : 'style="opacity:0.72;"'}>
      <label class="switch">
        <input type="checkbox" data-path="sections.${sectionIndex}.socials.${socialIndex}.enabled" ${social.enabled ? "checked" : ""} ${disableUnchecked ? "disabled" : ""}>
        <span class="switch-ui"></span>
      </label>
    </div>
  `;
}

function checkbox(label, path, checked) {
  return `<div class="field checkbox-field"><span class="field-label">${escapeHtml(label)}</span><label class="switch"><input type="checkbox" data-path="${escapeAttr(path)}" ${checked ? "checked" : ""}><span class="switch-ui"></span></label></div>`;
}

function selectInput(path, value) {
  return `<select class="select-input" data-path="${escapeAttr(path)}">${Object.keys(PRESETS).map((key) => `<option value="${key}" ${key === value ? "selected" : ""}>${escapeHtml(PRESETS[key].label)}</option>`).join("")}</select>`;
}

function imageSelect(path, value) {
  return `<select class="select-input" data-path="${escapeAttr(path)}"><option value="">Choose photo</option>${IMAGE_OPTIONS.map((name) => `<option value="${escapeAttr(name)}" ${name === value ? "selected" : ""}>${escapeHtml(name)}</option>`).join("")}</select>`;
}

function helpText(text) {
  return `<div class="field"><span class="field-label" style="font-weight:500; opacity:0.84;">${escapeHtml(text)}</span></div>`;
}

function presetPicker() {
  return `<div class="language-grid">${Object.keys(PRESETS).map((key) => `<button class="language-card ${key === state.presetId ? "active" : ""}" type="button" data-preset-button="${escapeAttr(key)}">${escapeHtml(PRESETS[key].label)}</button>`).join("")}</div>`;
}

function anchor(href, text) {
  return `<a href="${escapeAttr(href)}" style="font-size:12px; color:#1980A0; text-decoration:none;">${escapeHtml(text)}</a>`;
}

function setByPath(target, path, value) {
  const parts = path.split(".");
  let ref = target;

  for (let i = 0; i < parts.length - 1; i += 1) {
    const key = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i];
    ref = ref[key];
  }

  const last = /^\d+$/.test(parts[parts.length - 1]) ? Number(parts[parts.length - 1]) : parts[parts.length - 1];
  ref[last] = value;
}

function normalizePhone(value) {
  return String(value || "").replace(/[^\d+]/g, "");
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function htmlToPlainText(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "$2")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
}

function plainTextToHtml(value) {
  return escapeHtml(String(value || "")).replace(/\n/g, "<br>");
}

function setStatus(text) {
  clearTimeout(statusTimer);
  els.status.textContent = text;
  statusTimer = setTimeout(() => {
    els.status.textContent = "";
  }, 2000);
}
