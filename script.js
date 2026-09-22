// ===========================
// OUR WORLD - شخصی‌سازی این قسمت
// ===========================
const CONFIG = {
  HER_NAME: "Yasna",          // فقط اسم او در لاگین نمایش داده می‌شود
  YOUR_NAME: "Amirreza",
  LOGIN_PASSWORD: "1384920138855", // تاریخ تولد هر دو؛ فقط اعداد، به همان ترتیبی که خودت انتخاب می‌کنی
  SECRET_PASSWORD: "i love you forever",     // رمز اتاق مخفی را عوض کن
  SPECIAL_DATE: "1403-04-30"
};

// نامه‌ها
const LETTERS = [
  {title:"برای وقتی دلت گرفته", icon:"☾", text:"این برای وقتیه که من نیستم و میخواستم بدونی خیلی دوست دارم حتی با وجود ر اتفاق و دعوایی"},
  {title:"برای روز تولدت", icon:"🎂", text:"خیلی زرنگی اومدی الان بخونی؟ این بخش بزودی اضافه میشه"},
  {title:"برای وقتی دلت برای من تنگ شده", icon:"♡", text:"این بخش رو گذاشتم برای وقتی که دلت تنگ شد و شاید قهر بودیم و شایدم اصلا نیازت نشه ولی باید بگم که هیچی جلوی مارو نمیگیره"},
  {title:"برای یک روز خیلی خوب", icon:"✦", text:"مظمِعنم یه روز خیلی خوب بمیگردیم و میگیم دیدی شد؟"},
  {title:"وقتی عصبانی هستی", icon:"☁", text:"بدون که من همیشه دوست دارم شاید تو عصبانیت یه حرفایی بزنیم ولی رابطه قهر و دعوا داره دیگه"},
  {title:"یک متن مخصوص تو", icon:"✧", text:"If someone takes a picture of the moon theyll say the camera didn't capture it well and thats exactly you Nothing can describe your beauty."
    }
];

// خاطرات
const MEMORIES = [
  {date:"1403-04-30", title:"روزی که داستان ما شروع شد", text:"1403-04-30،درسته اولین داستان آشناییمونو جفتمون میدونیم ولی خب یه جا باشه خیلی بهتره بگذریم یه روز خیلی رندوم که  فکرشم نمیکردم چنین اتفاقی بیوفته یکی از دوستام به صورت رندوم منو به چالش دعوت کرد و منی که عاشق چالش های سختم پس  قبول کردم و در کمال ناباوری بیشتر هم چالش رو بردم هم زندگی رو و این شد اولین داستان ما.", art:"✦"},
  {date:"1403-03-14", title:"این شد اولین خاطرمون", text:"اولین باری که بازی کردم و جفتمون فهمیدیم از همدیگه خوشمون میاد بنظرم بهترین خاطرمون بود", art:"♡"},
  {date:"یک روز خاص", title:"آن روز قشنگ", text:"بزودی پر میشه اینجا هم", art:"☾"},
  {date:"یه روزی", title:"ادامه‌ی داستان", text:"با خاطرات جدیدمون اینجا هم بروزرسانی میشه", art:"✧"}
];

// تایم‌لاین
const TIMELINE = [
  ["1403-03-5", "اولین آشنایی", "در کمال ناباوری در بهترین چالش زندگیم"],
  ["...", "اولین گفت‌وگوی خاص", "سفت بازی های دوتامون موقع بازی"],
  ["؟", "اولین خاطره", "اولین شبی که بازی کردیم کار از کارم گذشته بود"],
  ["1405-06-31", "امروز", "داستان هنوز ادامه داره..."]
];

// پیام‌های آینده
const FUTURE = [
  {date:"2030-01-01", title:"آینده نه چندان دور", text:"اینهمه نگران بودیم که میشه؟ وحالا دیدی شد؟"},
  {date:"2027-01-01", title:"اولین روز سال جدید", text:"اگه این پیامو میبینی پس یعنی کریسمس رو باهم گذروندیم"},
  {date:"2036-01-01", title:" برای ما در آینده دور", text:"احتمالا ازدواج کردیم و اینو باهم میخونیم"}
];

// پیام‌های تصادفی
const SURPRISES = [
  "قشنگ ترین اتفاق زندگی من تویی ♡",
  "همیشه دوست دارم وقتمو با تو بگذرونم اگه یه روز با خودت درباره این موضوع فکرکردی بهتره از الان بدونی",
  "تو بهترین از قشنگ‌ترین فصل‌های داستان منی ✦",
  "خورشید و ماه و میفروشم تا بتونم خورشید و ماه خودمو داشته باشم درسته اونا چشماتن",
  "آسمان و دریا از هم دور اند ولی د چشمانت نزدیک میبینم. ♡",
  "چطوره بهم یه پیام بدی؟"
];

const $ = id => document.getElementById(id);
const pages = [...document.querySelectorAll(".page")];

$("loginTitle").textContent = CONFIG.HER_NAME;
$("username").value = CONFIG.HER_NAME;
$("siteNames").textContent = `${CONFIG.YOUR_NAME} × ${CONFIG.HER_NAME}`;
$("specialDate").textContent = CONFIG.SPECIAL_DATE;
document.title = `OUR WORLD ✦ ${CONFIG.HER_NAME}`;

$("passwordHint").addEventListener("click", () => $("hintText").classList.toggle("show"));

$("loginBtn").addEventListener("click", login);
$("password").addEventListener("keydown", e => { if(e.key==="Enter") login(); });

function login(){
  const username = $("username").value.trim();
  const pass = $("password").value.trim();
  if(username !== CONFIG.HER_NAME){
    $("loginError").textContent = `نام کاربر باید «${CONFIG.HER_NAME}» باشد.`;
    return;
  }
  if(pass !== CONFIG.LOGIN_PASSWORD){
    $("loginError").textContent = "رمز درست نیست؛ سرنخ را دوباره بخوان ♡";
    return;
  }
  $("loginScreen").classList.add("hidden");
  $("app").classList.remove("hidden");
  toast("خوش اومدی به دنیای خودمون ✦");
}

function showPage(name){
  pages.forEach(p => p.classList.toggle("active-page", p.id === `page-${name}`));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.page===name));
  window.scrollTo({top:0,behavior:"smooth"});
  $("sidebar").classList.remove("open");
}
document.querySelectorAll(".nav-btn").forEach(b => b.addEventListener("click",()=>showPage(b.dataset.page)));
document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click",()=>showPage(el.dataset.go)));
$("menuToggle").addEventListener("click",()=> $("sidebar").classList.toggle("open"));

function renderLetters(){
  $("lettersGrid").innerHTML = LETTERS.map((l,i)=>`
    <article class="letter-card glass">
      <span class="lock-badge">✦</span>
      <div class="card-art">${l.icon}</div>
      <h3>${l.title}</h3>
      <p>یک نامه مخصوص تو، برای یک لحظه‌ی خاص.</p>
      <button class="dream-button open-letter" data-letter="${i}">باز کردن نامه</button>
    </article>`).join("");
  document.querySelectorAll("[data-letter]").forEach(b=>b.addEventListener("click",()=>{
    const l=LETTERS[+b.dataset.letter];
    openModal(`<h2>${l.icon} ${l.title}</h2><p>${l.text}</p>`);
  }));
}

function renderMemories(){
  $("memoryGrid").innerHTML = MEMORIES.map(m=>`
    <article class="memory-card glass">
      <div class="memory-image">${m.art}</div>
      <small class="time-date">${m.date}</small>
      <h3>${m.title}</h3><p>${m.text}</p>
    </article>`).join("");
}
function renderTimeline(){
  $("timeline").innerHTML = TIMELINE.map(t=>`
    <article class="time-item glass"><i class="time-dot"></i><small class="time-date">${t[0]}</small><h3>${t[1]}</h3><p>${t[2]}</p></article>`).join("");
}
function renderFuture(){
  const now = new Date();
  $("futureMessages").innerHTML = FUTURE.map(f=>{
    const d=new Date(f.date+"T00:00:00");
    const unlocked=now>=d;
    return `<article class="future-card glass ${unlocked?"":"locked"}">
      <span class="lock-badge">${unlocked?"✉":"🔒"}</span>
      <small class="time-date">${f.date}</small><h3>${f.title}</h3>
      <p>${unlocked?f.text:"این پیام هنوز زمانش نرسیده..."}</p>
      ${unlocked?'<button class="dream-button" disabled>باز شده ✦</button>':'<button class="dream-button" disabled>به‌زودی...</button>'}
    </article>`;
  }).join("");
}

$("surpriseBtn").addEventListener("click",()=>{
  const msg=SURPRISES[Math.floor(Math.random()*SURPRISES.length)];
  $("surpriseResult").textContent=msg;
});
$("secretBtn").addEventListener("click",()=>{
  if($("secretInput").value.trim()===CONFIG.SECRET_PASSWORD){
    $("secretResult").textContent="در باز شد... ✦ اینجا جای پیام خیلی خاص توئه. ♡";
    openModal("<h2>✦ اتاق مخفی</h2><p>تبریک! به بخش مخفی رسیدی. حالا این متن را با یک پیام خیلی شخصی عوض کن.</p>");
  }else $("secretResult").textContent="رمز درست نیست... سرنخ‌ها را دنبال کن.";
});

function openModal(html){$("modalContent").innerHTML=html;$("modal").classList.remove("hidden")}
$("closeModal").addEventListener("click",()=>$("modal").classList.add("hidden"));
$("modal").addEventListener("click",e=>{if(e.target===$("modal"))$("modal").classList.add("hidden")});

function toast(t){$("toast").textContent=t;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2500)}

const audio=$("audio"), vinyl=$("vinyl");
audio.addEventListener("play",()=>vinyl.classList.add("playing"));
audio.addEventListener("pause",()=>vinyl.classList.remove("playing"));
audio.addEventListener("ended",()=>vinyl.classList.remove("playing"));
$("musicToggle").addEventListener("click",()=>{
  if(!audio.src){toast("اول یک فایل MP3 داخل assets/music قرار بده.");return}
  audio.paused?audio.play():audio.pause();
});

// فایل موسیقی پیش‌فرض: اگر فایل music.mp3 وجود داشته باشد، مرورگر آن را می‌خواند.
audio.src = "assets/music/music.mp3";
audio.onerror = () => { audio.removeAttribute("src"); };

function starField(){
  const c=$("stars"),ctx=c.getContext("2d");
  let w,h,stars=[];
  function resize(){w=c.width=innerWidth*devicePixelRatio;h=c.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);stars=Array.from({length:Math.min(260,Math.floor(innerWidth/5))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.4+.2,a:Math.random(),s:Math.random()*.02+.005}));}
  function draw(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    stars.forEach(s=>{s.a+=s.s;if(s.a>1||s.a<.15)s.s*=-1;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(235,215,255,${s.a})`;ctx.fill();});
    requestAnimationFrame(draw);
  }
  resize();addEventListener("resize",resize);draw();
}
starField();

function skyField(){
  const c=$("skyCanvas"),ctx=c.getContext("2d");
  function resize(){c.width=c.clientWidth*devicePixelRatio;c.height=c.clientHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);}
  let stars=Array.from({length:100},()=>({x:Math.random(),y:Math.random()*.8,r:Math.random()*1.4+.2,a:Math.random()}));
  function draw(){
    const w=c.clientWidth,h=c.clientHeight;ctx.clearRect(0,0,w,h);
    stars.forEach(s=>{s.a+=.01*(Math.random()>.5?1:-1);s.a=Math.max(.2,Math.min(1,s.a));ctx.beginPath();ctx.arc(s.x*w,s.y*h,s.r,0,7);ctx.fillStyle=`rgba(255,240,255,${s.a})`;ctx.fill()});
    ctx.beginPath();ctx.arc(w*.72,h*.25,55,0,Math.PI*2);ctx.fillStyle="rgba(245,225,255,.92)";ctx.fill();
    ctx.beginPath();ctx.arc(w*.75,h*.23,55,0,Math.PI*2);ctx.fillStyle="#09042a";ctx.fill();
    requestAnimationFrame(draw);
  }
  resize();addEventListener("resize",resize);draw();
}
skyField();

renderLetters();renderMemories();renderTimeline();renderFuture();
