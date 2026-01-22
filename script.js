// Language translations
const translations = {
    en: {
        'nav.about': 'About the company',
        'nav.products': 'Products',
        'nav.contact': 'Contact',
        'about.subtitle': 'Vonbrun — Wholesale Distributor of European Products',
        'about.p1': 'Vonbrun operates as a wholesale distributor of a wide range of European goods, supplying partners across food, beverage and logistics sectors. Our activities are backed by the corporate strength and operational experience of Mimesis Agro Sp. z o.o., a Polish limited-liability company registered in Warsaw, Poland.',
        'about.p2': 'Mimesis Agro Sp. z o.o. was incorporated in August 2022 and is active in wholesale trade, logistics and transport support services. The company acts as an agent and intermediary in the distribution of various goods, including but not limited to consumer products and supply chain services, leveraging its network and logistics partners throughout Europe.',
        'about.p3': 'As part of the Mimesis corporate group, Vonbrun brings together market-oriented distribution capabilities, efficient warehouse operations, and trusted trading relationships, ensuring high availability of products and timely delivery.',
        'about.strengths': 'Our core strengths include:',
        'about.strength1': 'European wholesale distribution',
        'about.strength2': 'Efficient transport and logistical coordination',
        'about.strength3': 'Established presence and compliance within the Polish commercial register',
        'about.strength4': 'Professional business services and customer support',
        'btn.contact': 'Contact',
        'data.company': 'Company:',
        'data.mainOffice': 'Main office:',
        'data.warehouse': 'Warehouse:',
        'contact.title': 'Contact',
        'contact.email': 'Email:',
        'contact.phone': 'Phone:',
        'contact.whatsapp': 'WhatsApp:',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.subject': 'Subject',
        'form.message': 'Message',
        'form.submit': 'Send Message',
        'footer.copyright': '© 2026 VONBRUN. All rights reserved.',
        'products.title': 'Our Products & Brands',
        'products.subtitle': 'We distribute a wide range of popular European brands and products'
    },
    pl: {
        'nav.about': 'O firmie',
        'nav.products': 'Produkty',
        'nav.contact': 'Kontakt',
        'about.subtitle': 'Vonbrun — Hurtowy Dystrybutor Produktów Europejskich',
        'about.p1': 'Vonbrun działa jako hurtowy dystrybutor szerokiej gamy towarów europejskich, zaopatrując partnerów w sektorach żywności, napojów i logistyki. Nasze działania są wspierane przez siłę korporacyjną i doświadczenie operacyjne Mimesis Agro Sp. z o.o., polskiej spółki z ograniczoną odpowiedzialnością zarejestrowanej w Warszawie, Polska.',
        'about.p2': 'Mimesis Agro Sp. z o.o. została założona w sierpniu 2022 roku i jest aktywna w handlu hurtowym, logistyce i usługach wsparcia transportowego. Firma działa jako agent i pośrednik w dystrybucji różnych towarów, w tym, ale nie wyłącznie, produktów konsumenckich i usług łańcucha dostaw, wykorzystując swoją sieć i partnerów logistycznych w całej Europie.',
        'about.p3': 'Jako część grupy korporacyjnej Mimesis, Vonbrun łączy zorientowane na rynek możliwości dystrybucji, wydajne operacje magazynowe i zaufane relacje handlowe, zapewniając wysoką dostępność produktów i terminową dostawę.',
        'about.strengths': 'Nasze główne zalety obejmują:',
        'about.strength1': 'Europejska dystrybucja hurtowa',
        'about.strength2': 'Wydajna koordynacja transportu i logistyki',
        'about.strength3': 'Ustabilizowana obecność i zgodność z polskim rejestrem handlowym',
        'about.strength4': 'Profesjonalne usługi biznesowe i wsparcie klienta',
        'btn.contact': 'Kontakt',
        'data.company': 'Firma:',
        'data.mainOffice': 'Biuro główne:',
        'data.warehouse': 'Magazyn:',
        'contact.title': 'Kontakt',
        'contact.email': 'Email:',
        'contact.phone': 'Telefon:',
        'contact.whatsapp': 'WhatsApp:',
        'form.name': 'Imię',
        'form.email': 'Email',
        'form.subject': 'Temat',
        'form.message': 'Wiadomość',
        'form.submit': 'Wyślij wiadomość',
        'footer.copyright': '© 2026 VONBRUN. Wszelkie prawa zastrzeżone.',
        'products.title': 'Nasze Produkty i Marki',
        'products.subtitle': 'Dystrybuujemy szeroką gamę popularnych europejskich marek i produktów'
    }
};

// Get saved language or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to translate page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    translatePage(currentLang);
    
    // Language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Create mailto link
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
        const mailtoLink = `mailto:info@vonbrun.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
    });
}
