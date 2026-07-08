document.addEventListener("DOMContentLoaded", function() {
    // کدهای هدر (نویگیشن ریسپانسیو)
    const headerHTML = `
        <nav class="main-nav">
            <div class="nav-container">
                <a href="/app/" class="logo">همدم یاب</a>
                
                <!-- دکمه همبرگر منو برای موبایل -->
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </button>

                <!-- لیست لینک‌ها -->
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
            
            /* استایل دسکتاپ */
            .nav-links { list-style: none; display: flex; gap: 15px; margin: 0; padding: 0; align-items: center; }
            .nav-links a { color: #aeb5cc; text-decoration: none; font-weight: 500; transition: color 0.3s; font-size: 0.95rem; }
            .nav-links a:hover { color: #fff; }
            .mobile-menu-btn { display: none; background: none; border: none; fill: #fff; cursor: pointer; width: 35px; height: 35px; }

            /* استایل موبایل (همبرگر منو) */
            @media (max-width: 900px) {
                .mobile-menu-btn { display: block; }
                .nav-links { 
                    position: absolute; 
                    top: 100%; left: 0; right: 0; 
                    flex-direction: column; 
                    background: rgba(15, 15, 25, 0.95); 
                    backdrop-filter: blur(20px); 
                    border-bottom: 1px solid rgba(255,255,255,0.08); 
                    padding: 0; 
                    max-height: 0; /* مخفی در حالت عادی */
                    overflow: hidden; 
                    transition: max-height 0.4s ease-in-out; 
                }
                .nav-links.active { max-height: 500px; padding: 15px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
                .nav-links li { width: 100%; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.02); }
                .nav-links li:last-child { border-bottom: none; }
                .nav-links a { display: block; padding: 15px 0; font-size: 1.1rem; }
            }
        </style>
    `;

    // کدهای فوتر
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <span class="warning-18">🔞 استفاده از خدمات این سامانه تنها برای افراد بالای ۱۸ سال مجاز است.</span>
                <div class="footer-links">
                    <a href="/app/install-guide.html">راهنمای نصب و دسترسی‌ها</a>
                    <a href="/app/terms.html">قوانین سایت</a>
                    <a href="/app/privacy.html">حریم خصوصی</a>
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

    // تزریق HTML به صفحات
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");
    
    if(headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // فعال‌سازی کلیک منوی موبایل
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if(mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});
