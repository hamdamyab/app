// فایل: layout.js
document.addEventListener("DOMContentLoaded", function() {
    // کدهای هدر (نویگیشن)
    const headerHTML = `
        <nav class="main-nav">
            <div class="nav-container">
                <a href="/app" class="logo">همدم یاب</a>
                <ul class="nav-links">
                    <li><a href="/app">صفحه اصلی</a></li>
                    <li><a href="/app/radar.html" style="color: #ff007f;">رادار افراد نزدیک</a></li>
                    <li><a href="/app/anonymous-chat.html">چت ناشناس</a></li>
                </ul>
            </div>
        </nav>
        <style>
            .main-nav { background: rgba(3, 0, 20, 0.8); backdrop-filter: blur(15px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); position: sticky; top: 0; z-index: 1000; padding: 15px 0; }
            .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; padding: 0 20px; }
            .logo { color: #fff; font-weight: 900; font-size: 1.5rem; text-decoration: none; background: linear-gradient(90deg, #ff007f, #6f00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .nav-links { list-style: none; display: flex; gap: 20px; margin: 0; padding: 0; }
            .nav-links a { color: #aeb5cc; text-decoration: none; font-weight: 500; transition: color 0.3s; font-size: 0.95rem; }
            .nav-links a:hover { color: #fff; }
            @media (max-width: 768px) {
                .nav-links { gap: 10px; }
                .nav-links a { font-size: 0.85rem; }
            }
        </style>
    `;

    // کدهای فوتر
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <span class="warning-18">🔞 استفاده از خدمات این سامانه تنها برای افراد بالای ۱۸ سال مجاز است.</span>
                <div class="footer-links">
                    <a href="/app/terms.html">قوانین سایت</a>
                    <a href="/app/privacy.html">حریم خصوصی</a>
                    
                </div>
                <p>تمامی حقوق مادی و معنوی محفوظ می‌باشد. © ۲۰۲۴</p>
            </div>
        </footer>
        <style>
            footer { background: rgba(0,0,0,0.8); border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 40px 20px; text-align: center; font-size: 0.9rem; color: #666; margin-top: 50px; }
            .footer-content { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; }
            .footer-links a { color: #aeb5cc; margin: 0 10px; text-decoration: none; }
            .footer-links a:hover { color: #fff; }
            .warning-18 { display: inline-block; background: rgba(255,0,0,0.1); color: #ff4d4d; padding: 5px 15px; border-radius: 5px; border: 1px solid rgba(255,0,0,0.2); font-weight: 900; margin: 10px auto; }
        </style>
    `;

    // تزریق به المان‌های تعیین شده در HTML
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");
    
    if(headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
});
