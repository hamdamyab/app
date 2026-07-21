// ==========================================
// --- Google Analytics 4 (GA4) Injection ---
// ==========================================
const gaID = 'G-4BCMRM8MRJ';

const script1 = document.createElement('script');
script1.async = true;
script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaID;
document.head.appendChild(script1);

const script2 = document.createElement('script');
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaID}');
`;
document.head.appendChild(script2);

// ==========================================
// --- تزریق هدر، فوتر و مودال دانلود ---
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // ۱. کدهای هدر
    const headerHTML = `
        <nav class="main-nav">
            <div class="nav-container">
                <a href="/app/" class="logo">همدم یاب</a>
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </button>
                <ul class="nav-links" id="navLinks">
                    <li><a href="/app/">صفحه اصلی</a></li>
                    <li><a href="/app/radar.html">رادار افراد</a></li>
                    <li><a href="/app/dating.html">دوستیابی</a></li>
                    <li><a href="/app/sigheh.html">صیغه یابی</a></li>
                    <li><a href="/app/sigheh-text.html">متن صیغه</a></li>
                    <li><a href="/app/anonymous-chat.html">چت ناشناس</a></li>
                    <li><a href="/app/install-guide.html" style="color: #00ff88; font-weight: 700;">راهنمای نصب 📱</a></li>
                </ul>
            </div>
        </nav>
        <style>
            .main-nav { background: rgba(3, 0, 20, 0.8); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); position: sticky; top: 0; z-index: 1000; padding: 15px 0; }
            .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; padding: 0 20px; }
            .logo { color: #fff; font-weight: 900; font-size: 1.5rem; text-decoration: none; background: linear-gradient(90deg, #ff007f, #6f00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .nav-links { list-style: none; display: flex; gap: 15px; margin: 0; padding: 0; align-items: center; }
            .nav-links a { color: #aeb5cc; text-decoration: none; font-weight: 500; transition: color 0.3s; font-size: 0.95rem; }
            .nav-links a:hover { color: #fff; }
            .mobile-menu-btn { display: none; background: none; border: none; fill: #fff; cursor: pointer; width: 35px; height: 35px; }
            @media (max-width: 900px) {
                .mobile-menu-btn { display: block; }
                .nav-links { position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; background: rgba(15, 15, 25, 0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.08); padding: 0; max-height: 0; overflow: hidden; transition: max-height 0.4s ease-in-out; }
                .nav-links.active { max-height: 500px; padding: 15px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
                .nav-links li { width: 100%; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.02); }
                .nav-links li:last-child { border-bottom: none; }
                .nav-links a { display: block; padding: 15px 0; font-size: 1.1rem; }
            }
        </style>
    `;

    // ۲. کدهای فوتر
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <span class="warning-18">🔞 استفاده از خدمات این سامانه تنها برای افراد بالای ۱۸ سال مجاز است.</span>
               <div class="footer-links">
                    <a href="/app/install-guide.html">راهنمای نصب</a>
                    <a href="/app/channels.html">لیست کانال‌ها</a>
                    <a href="/app/mashhad.html" style="color: #00ff88;">صیغه مشهد (جدید)</a>
                    <a href="/app/terms.html">قوانین سایت</a>
                </div>
                <p>تمامی حقوق مادی و معنوی محفوظ می‌باشد. © 2026</p>
            </div>
        </footer>
        <style>
            footer { background: rgba(0,0,0,0.8); border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 40px 20px; text-align: center; font-size: 0.9rem; color: #666; margin-top: 50px; }
            .footer-content { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; }
            .footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; }
            .footer-links a { color: #aeb5cc; text-decoration: none; transition: color 0.3s; }
            .footer-links a:hover { color: #fff; }
            .warning-18 { display: inline-block; background: rgba(255,0,0,0.1); color: #ff4d4d; padding: 5px 15px; border-radius: 5px; border: 1px solid rgba(255,0,0,0.2); font-weight: 900; margin: 10px auto; }
        </style>
    `;

    // ۳. کدهای مودال لودینگ و استایل‌های آن (جدید)
    const modalHTML = `
        <style>
            .api-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px); z-index: 9999; display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: all 0.3s ease; }
            .api-modal-overlay.active { opacity: 1; visibility: visible; }
            .api-modal-content { background: rgba(20, 20, 30, 0.9); border: 1px solid #ff007f; padding: 40px 30px; border-radius: 25px; text-align: center; max-width: 90%; width: 400px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); transform: translateY(20px); transition: transform 0.3s ease; }
            .api-modal-overlay.active .api-modal-content { transform: translateY(0); }
            .api-spinner { width: 60px; height: 60px; border: 5px solid rgba(255, 0, 127, 0.2); border-top-color: #ff007f; border-radius: 50%; animation: api-spin 1s linear infinite; margin: 0 auto 20px; }
            @keyframes api-spin { 100% { transform: rotate(360deg); } }
            .api-modal-title { font-size: 1.4rem; font-weight: 900; color: #fff; margin-bottom: 10px; }
            .api-modal-desc { font-size: 0.95rem; color: #aeb5cc; line-height: 1.6; }
            .api-error-btn { background: #ff007f; color: white; border: none; padding: 10px 25px; border-radius: 10px; margin-top: 20px; font-family: inherit; font-weight: bold; cursor: pointer; display: none; }
        </style>
        <div id="apiModal" class="api-modal-overlay">
            <div class="api-modal-content">
                <div id="apiSpinner" class="api-spinner"></div>
                <div id="apiTitle" class="api-modal-title">در حال آماده‌سازی اپلیکیشن...</div>
                <div id="apiDesc" class="api-modal-desc">لطفاً چند لحظه صبر کنید، در حال ساخت نسخه اختصاصی و امن شما هستیم.</div>
                <button id="apiErrorBtn" class="api-error-btn" onclick="closeModal()">متوجه شدم</button>
            </div>
        </div>
    `;

    // تزریق به صفحه
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");
    
    if(headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
    
    // تزریق مودال به انتهای body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // فعال‌سازی منوی موبایل
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if(mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});


// ==========================================
// --- توابع گلوبال ارتباط با API سرور ---
// ==========================================
window.closeModal = function() {
    const modal = document.getElementById('apiModal');
    if(modal) modal.classList.remove('active');
}

window.requestCustomApk = async function(packageName) {
    // ارسال رویداد دانلود به گوگل آنالیتیکس
    if (typeof gtag === 'function') {
        gtag('event', 'download_apk', {
            'event_category': 'Downloads',
            'event_label': window.location.pathname
        });
    }

    const modal = document.getElementById('apiModal');
    const title = document.getElementById('apiTitle');
    const desc = document.getElementById('apiDesc');
    const spinner = document.getElementById('apiSpinner');
    const errorBtn = document.getElementById('apiErrorBtn');

    title.innerText = "در حال آماده‌سازی...";
    title.style.color = "#fff";
    desc.innerText = "لطفاً چند لحظه صبر کنید، در حال ساخت نسخه اختصاصی و امن شما هستیم.";
    spinner.style.display = "block";
    errorBtn.style.display = "none";
    modal.classList.add('active');

    try {
        const response = await fetch(`https://sysbase.online/api/sign?packagename=${packageName}`);
        const data = await response.json();

        if (response.ok && data.success && data.download_url) {
            title.innerText = "آماده شد!";
            title.style.color = "#00ff88";
            desc.innerText = "فایل شما با موفقیت ساخته شد. دانلود به طور خودکار شروع می‌شود...";
            spinner.style.borderColor = "rgba(0, 255, 136, 0.2)";
            spinner.style.borderTopColor = "#00ff88";

            window.location.href = data.download_url;
            setTimeout(closeModal, 3000);
        } else {
            throw new Error(data.error || "خطای نامشخص از سمت سرور");
        }
    } catch (error) {
        console.error("API Error:", error);
        title.innerText = "خطا در ارتباط!";
        title.style.color = "#ff4d4d";
        desc.innerText = "متأسفانه در ساخت فایل اختصاصی مشکلی پیش آمد. لطفاً دوباره تلاش کنید.";
        spinner.style.display = "none";
        errorBtn.style.display = "inline-block";
    }
}
