function changeLanguage(lang) {
    const body = document.body;
    if (lang === 'en') {
        body.classList.remove('lang-ar');
        body.classList.add('lang-en');
    } else {
        body.classList.remove('lang-en');
        body.classList.add('lang-ar');
    }
}

function triggerPulse(bt) {
    if (bt === 'sr') {   
        const servicesSection = document.getElementById('services');

        // إزالة الأنيميشن إذا كان موجوداً مسبقاً
        servicesSection.style.animation = 'none';
    
        // إجبار المتصفح على إعادة الحساب (Reflow)
        servicesSection.offsetHeight; 
    
        // إعادة تشغيل الأنيميشن
        servicesSection.style.animation = 'pulse-animation 1s ease-in-out';
    }else if (bt === 'cn') {
        const contactSection = document.getElementById('contact');
        contactSection.style.animation = 'none';
        contactSection.offsetHeight; 
        contactSection.style.animation = 'pulse-animation 1s ease-in-out';
    }else if (bt === 'ln') {
        const linksSection = document.getElementById('links');
        linksSection.style.animation = 'none';
        linksSection.offsetHeight; 
        linksSection.style.animation = 'pulse-animation 1s ease-in-out';
    }else if (bt === 'sr-ar') {
        const servicesSection = document.getElementById('services-ar');
        servicesSection.style.animation = 'none';
        servicesSection.offsetHeight; 
        servicesSection.style.animation = 'pulse-animation 1s ease-in-out';
    }else if (bt === 'cn-ar') {
        const contactSection = document.getElementById('contact-ar');
        contactSection.style.animation = 'none';
        contactSection.offsetHeight; 
        contactSection.style.animation = 'pulse-animation 1s ease-in-out';
    }else if (bt === 'ln-ar') {
        const linksSection = document.getElementById('links-ar');
        linksSection.style.animation = 'none';
        linksSection.offsetHeight; 
        linksSection.style.animation = 'pulse-animation 1s ease-in-out';
    }
}