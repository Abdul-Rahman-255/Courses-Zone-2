document.addEventListener('DOMContentLoaded', function () {
    // الترجمات الكاملة
    const translations = {
        ar: {
            students: "طالب مسجل",
            rate: "تقييم",
            graduate: "خريج",
            title: "منصة كورسيزون | مصر",
            home: "الرئيسية",
            why: "لماذا نحن",
            courses: "الكورسات",
            certificates: "الشهادات",
            contact: "اتصل بنا",
            loading: "جاري تحميل المنصة...",
            empty_cart: "سلة التسوق فارغة",
            total: "المجموع:",
            currency: "ج.م",
            checkout: "إتمام الشراء",
            hero_title: "طور مهاراتك مع أفضل الكورسات التعليمية",
            hero_subtitle: "انضم إلى آلاف الطلاب الذين طوروا مسيرتهم المهنية من خلال منصتنا التعليمية المتكاملة",
            start_learning: "ابدأ التعلم الآن",
            browse_courses: "تصفح الكورسات",
            why_title: "لماذا تختار <span class='highlight'>كورسيزون؟</span>",
            why_subtitle: "نقدم لك تجربة تعليمية فريدة تلبي جميع احتياجاتك التعليمية والمهنية",
            feature1_title: "مدربون خبراء",
            feature1_desc: "تعلم من أفضل المدربين المعتمدين ذوي الخبرة الواسعة في مجالاتهم",
            feature2_title: "شهادات معتمدة",
            feature2_desc: "احصل على شهادات معتمدة يمكنك إضافتها لسيرتك الذاتية بعد إتمام كل كورس",
            feature3_title: "تعلم عملي",
            feature3_desc: "تدريبات عملية ومشاريع حقيقية لتطبيق ما تتعلمه مباشرة",
            feature4_title: "دعم وظيفي",
            feature4_desc: "خدمات التوجيه الوظيفي ومساعدتك في الحصول على فرص عمل مناسبة",
            feature5_title: "مرونة في التعلم",
            feature5_desc: "تعلم في أي وقت ومن أي مكان حسب جدولك الخاص",
            feature6_title: "مجتمع تفاعلي",
            feature6_desc: "انضم إلى مجتمع من المتعلمين وتبادل الخبرات والمعرفة",
            courses_title: "اكتشف <span class='highlight'>كورساتنا</span>",
            courses_subtitle: "اختر من بين مجموعة واسعة من الكورسات المصممة لمساعدتك في تحقيق أهدافك",
            add_to_cart: "أضف للسلة",
            courses_title: "اكتشف",
            our_courses: "كورساتنا",
            courses_subtitle: "اختر من بين مجموعة واسعة من الكورسات المصممة لمساعدتك في تحقيق أهدافك",
            course1_title: "تطوير واجهات الويب (Frontend)",
            course1_desc: "تعلم HTML, CSS, JavaScript و React لبناء مواقع ويب تفاعلية",
            course2_title: "تطوير الواجهات الخلفية (Backend)",
            course2_desc: "تعلم Node.js, Express, MongoDB لبناء تطبيقات ويب كاملة",
            course3_title: "تصميم الجرافيك",
            course3_desc: "إتقان أدوات التصميم مثل Photoshop و Illustrator",
            course4_title: "تطوير تطبيقات الموبايل",
            course4_desc: "تعلم Flutter لبناء تطبيقات Android و iOS ونشرها والربح منها",
            course5_title: "الذكاء الاصطناعي",
            course5_desc: "أساسيات الذكاء الاصطناعي وتعلم الآلة باستخدام Python",
            course6_title: "التسويق الرقمي",
            course6_desc: "تعلم استراتيجيات التسويق عبر وسائل التواصل الاجتماعي",
            currency: "ج.م",
            add_to_cart: "أضف للسلة",
            follow_us: "تابعنا على",
            payment_methods: "وسائل الدفع المتاحة",
            courses_list: "الكورسات",
            web_dev: "تطوير الويب",
            mobile_dev: "برمجة الموبايل",
            data_science: "علم البيانات",
            graphic_design: "التصميم الجرافيكي",
            digital_marketing: "التسويق الرقمي",
            important_links: "روابط مهمة",
            about: "عن المنصة",
            faq: "الأسئلة الشائعة",
            privacy: "سياسة الخصوصية",
            terms: "شروط الاستخدام",
            contact_us: "اتصل بنا",
            copyright: `
            © 2025 منصة كورسيزون. جميع الحقوق محفوظة.
            <br>
            تصميم م/ عبد الرحمن البنا
            <br>
            01022090863
            `
        },
        en: {
            students: "Students",
            rate: "Rating",
            graduate: "Graduate",
            title: "Courses Zone | Egypt",
            home: "Home",
            why: "Why Us",
            courses: "Courses",
            certificates: "Certificates",
            contact: "Contact Us",
            loading: "Loading Platform...",
            empty_cart: "Cart is Empty",
            total: "Total:",
            currency: "EGP",
            checkout: "Proceed to Checkout",
            hero_title: "Develop Your Skills with Top Courses",
            hero_subtitle: "Join thousands of students who have advanced their careers through our integrated learning platform",
            start_learning: "Start Learning Now",
            browse_courses: "Browse Courses",
            why_title: "Why Choose <span class='highlight'>Courses Zone?</span>",
            why_subtitle: "We provide a unique learning experience that meets all your educational and professional needs",
            feature1_title: "Expert Instructors",
            feature1_desc: "Learn from the best certified trainers with extensive experience in their fields",
            feature2_title: "Certified Certificates",
            feature2_desc: "Get accredited certificates to add to your CV after completing each course",
            feature3_title: "Practical Learning",
            feature3_desc: "Hands-on exercises and real projects to apply what you learn immediately",
            feature4_title: "Career Support",
            feature4_desc: "Career guidance services and help in getting suitable job opportunities",
            feature5_title: "Learning Flexibility",
            feature5_desc: "Learn anytime, anywhere according to your own schedule",
            feature6_title: "Interactive Community",
            feature6_desc: "Join a community of learners and exchange experiences and knowledge",
            courses_title: "Discover Our <span class='highlight'>Courses</span>",
            courses_subtitle: "Choose from a wide range of courses designed to help you achieve your goals",
            add_to_cart: "Add to Cart",
            courses_title: "Discover",
            our_courses: "Our Courses",
            courses_subtitle: "Choose from a wide range of courses designed to help you achieve your goals",
            course1_title: "Frontend Web Development",
            course1_desc: "Learn HTML, CSS, JavaScript and React to build interactive websites",
            course2_title: "Backend Development",
            course2_desc: "Learn Node.js, Express, MongoDB to build complete web applications",
            course3_title: "Graphic Design",
            course3_desc: "Master design tools like Photoshop and Illustrator",
            course4_title: "Mobile App Development",
            course4_desc: "Learn Flutter to build Android and iOS apps, publish and monetize them",
            course5_title: "Artificial Intelligence",
            course5_desc: "Fundamentals of AI and Machine Learning using Python",
            course6_title: "Digital Marketing",
            course6_desc: "Learn social media marketing strategies",
            currency: "EGP",
            add_to_cart: "Add to Cart",
            follow_us: "Follow Us",
            payment_methods: "Available Payment Methods",
            courses_list: "Courses",
            web_dev: "Web Development",
            mobile_dev: "Mobile Development",
            data_science: "Data Science",
            graphic_design: "Graphic Design",
            digital_marketing: "Digital Marketing",
            important_links: "Important Links",
            about: "About Us",
            faq: "FAQ",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            contact_us: "Contact Us",
            copyright: `
            © 2025 Courses Zone. All rights reserved.
            <br>
            Design by/ Abdul Rahman Elbanna
            <br>
            01022090863`
        }
    };

    // متغيرات التطبيق
    let currentLang = 'ar';
    let cart = [];
    const translateElements = document.querySelectorAll('[data-translate]');
    const themeToggle = document.querySelector('.theme-toggle');
    const languageToggle = document.querySelector('.language-toggle');
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');

    // تطبيق الترجمات
    function applyTranslations(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        translateElements.forEach(el => {
            const key = el.dataset.translate;
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // تحديث اتجاه الأسعار
        document.querySelectorAll('.course-price').forEach(price => {
            price.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
        });
    }

    // تبديل اللغة
    languageToggle.addEventListener('click', () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('preferredLang', newLang);
        applyTranslations(newLang);
    });

    // النظام المظلم التلقائي
    function handleDarkMode() {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

        const setDarkMode = (isDark) => {
            document.body.classList.toggle('dark-mode', isDark);
            themeToggle.innerHTML = isDark ?
                '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        };

        // التهيئة الأولية
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'enabled' || (savedMode === null && darkMode.matches)) {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        // التبديل اليدوي
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode',
                document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');

            themeToggle.innerHTML = document.body.classList.contains('dark-mode') ?
                '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        // الاستماع لتغيرات النظام
        darkMode.addListener(e => {
            if (localStorage.getItem('darkMode') === null) {
                setDarkMode(e.matches);
            }
        });
    }

    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // تحكم القائمة المنسدلة
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // إدارة السلة
    function setupCart() {
        // تحميل السلة من localStorage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCart();
        }

        // إظهار/إخفاء السلة
        cartIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            cartDropdown.classList.toggle('active');
        });

        // إغلاق السلة عند النقر خارجها
        document.addEventListener('click', () => {
            cartDropdown.classList.remove('active');
        });

        // إضافة عناصر للسلة
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', addToCart);
        });

        // إتمام الشراء
        checkoutBtn.addEventListener('click', checkout);
    }

    // إضافة عنصر للسلة
    function addToCart(e) {
        const courseCard = e.target.closest('.course-card');
        const courseId = e.target.getAttribute('data-id');
        const courseName = e.target.getAttribute('data-name');
        const coursePrice = parseFloat(e.target.getAttribute('data-price'));
        const courseImage = courseCard.querySelector('img').src;

        // التحقق من وجود العنصر في السلة
        const existingItem = cart.find(item => item.id === courseId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: courseId,
                name: courseName,
                price: coursePrice,
                image: courseImage,
                quantity: 1
            });
        }

        updateCart();
        showNotification(currentLang === 'ar' ? 'تمت إضافة الكورس إلى السلة' : 'Course added to cart');
    }

    // تحديث السلة
    function updateCart() {
        // حفظ السلة في localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // تحديث العداد
        updateCartCount();

        // تحديث العناصر
        updateCartItems();

        // تحديث السعر الإجمالي
        updateTotalPrice();
    }

    // تحديث عداد السلة
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }

    // تحديث عناصر السلة
    function updateCartItems() {
        if (cart.length === 0) {
            cartItems.innerHTML = `<div class="empty-cart" data-translate="empty_cart">${translations[currentLang].empty_cart}</div>`;
            return;
        }

        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.quantity} × ${item.price} ${translations[currentLang].currency}</p>
                    <p class="cart-item-price">${item.quantity * item.price} ${translations[currentLang].currency}</p>
                    <button class="remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i> ${currentLang === 'ar' ? 'حذف' : 'Remove'}
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        // إضافة event listeners لأزرار الحذف
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', removeFromCart);
        });
    }

    // حذف عنصر من السلة
    function removeFromCart(e) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        updateCart();
        showNotification(currentLang === 'ar' ? 'تم حذف الكورس من السلة' : 'Course removed from cart');
    }

    // تحديث السعر الإجمالي
    function updateTotalPrice() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice.textContent = total;
    }

    // إتمام عملية الشراء
    function checkout() {
        if (cart.length === 0) {
            showNotification(currentLang === 'ar' ? 'السلة فارغة' : 'Cart is empty');
            return;
        }

        showNotification(currentLang === 'ar' ? 'جاري توجيهك إلى صفحة الدفع' : 'Redirecting to checkout page');
        // هنا يمكنك إضافة التوجيه إلى صفحة الدفع
        setTimeout(() => {
            console.log('Checkout:', cart);
            // window.location.href = '/checkout';
        }, 1500);
    }

    // إظهار الإشعارات
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Animation on Scroll
    function setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }

    // تهيئة Loader
    function initLoader() {
        setTimeout(() => {
            document.querySelector('.page-loader').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.page-loader').style.display = 'none';
                document.querySelector('.page-content').style.display = 'block';
                setTimeout(() => {
                    document.querySelector('.page-content').style.opacity = '1';
                }, 50);
            }, 500);
        }, 2000);
    }

    // تهيئة التطبيق
    function initApp() {
        // تحميل اللغة المحفوظة
        const savedLang = localStorage.getItem('preferredLang') || 'ar';
        applyTranslations(savedLang);

        // تهيئة المكونات
        handleDarkMode();
        setupCart();
        setupAnimations();
        initLoader();
    }

    // بدء التطبيق
    initApp();
});
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    function startCounter(element) {
        const target = +element.getAttribute('data-target');
        const startTime = Date.now();
        const duration = Math.min(animationDuration, target * 20);

        function updateCounter() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * target);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(updateCounter);
    }
}

document.addEventListener('DOMContentLoaded', initializeCounters);