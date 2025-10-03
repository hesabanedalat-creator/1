document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------------
    // 1. منطق منوی همبرگری
    // ------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // با هر کلیک، کلاس 'active' را فعال یا غیرفعال می‌کند
            navLinks.classList.toggle('active');
            
            // تغییر آیکون همبرگر (سه خط) به ضربدر
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // آیکون ضربدر
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // آیکون همبرگر
            }
        });
        
        // بستن منو پس از کلیک روی لینک‌ها در حالت موبایل
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // چک می‌کند که آیا در حالت موبایل هستیم (با استفاده از کلاس active)
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }

    // ------------------------------------------
    // 2. منطق اسکرول خودکار (اسلایدر) خدمات (اختیاری)
    // ------------------------------------------
    // اگر می‌خواهید خدمات به صورت خودکار حرکت کنند، کد زیر را فعال کنید.
    // در غیر این صورت، کاربران می‌توانند آن را به صورت دستی اسکرول کنند.
    
    /*
    const servicesSlider = document.querySelector('.services-slider-wrapper');
    if(servicesSlider) {
        const scrollAmount = 1; // مقدار اسکرول در هر فریم
        const scrollDelay = 20; // تاخیر بین هر اسکرول (میلی‌ثانیه)
        let direction = 1; // 1 برای راست به چپ، -1 برای چپ به راست

        function autoScroll() {
            if (servicesSlider.scrollLeft + servicesSlider.clientWidth >= servicesSlider.scrollWidth) {
                // رسیدن به انتهای راست، جهت را تغییر می‌دهد
                direction = -1;
            } else if (servicesSlider.scrollLeft <= 0) {
                // رسیدن به انتهای چپ، جهت را تغییر می‌دهد
                direction = 1;
            }

            servicesSlider.scrollLeft += direction * scrollAmount;
        }

        let scrollInterval = setInterval(autoScroll, scrollDelay);
        
        // توقف اسکرول هنگام هاور کردن روی اسلایدر
        servicesSlider.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        servicesSlider.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, scrollDelay);
        });
    }
    */
});
