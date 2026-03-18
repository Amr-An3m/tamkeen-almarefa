document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const servicesData = {
        strategic: {
            icon: "fa-chess-king",
            title: "البناء الاستراتيجي",
            description: "هو الإطار الشامل الذي تنطلق منه المنظمة لترجمة رؤيتها ورسالتها إلى واقع عملي مستدام يراعي الظروف الداخلية والخارجية وتطلعات أصحاب المصلحة. يتم من خلاله صياغة التوجهات والأهداف، وتطوير الهياكل التنظيمية، وتصميم الخطط والبرامج، وتحديد المؤشرات. مما يضمن انسجام الجهود، وتحقيق الكفاءة، وتعزيز القدرة على التكيف مع التغيرات، بما يقود المنظمة نحو التميز والأثر العميق على مستفيديها ومجتمعها.",
            components: ["الوثيقة الاستراتيجية", "الخارطة الاستراتيجية", "الخطة الاستراتيجية", "مؤشرات الأداء", "الهيكل التنظيمي", "الخطة التشغيلية"],
            outputs: ["جلسات استشارية", "وثيقة استراتيجية شاملة", "خارطة استراتيجية بتوجهات ونسب تركيز واضحة", "خطة استراتيجية تربط بين الأهداف والبرامج والمؤشرات", "هيكل تنظيمي منسجم مع الخطة الاستراتيجية", "بطاقات أداء متوازن", "خطة تشغيلية"]
        },
        operations: {
            icon: "fa-cogs",
            title: "تطوير العمليات والإجراءات",
            description: "في تمكين المعرفة، نساعد المنظمات على أتمتة عملياتها وتبسيط إجراءاتها بتحليل الأنشطة والممارسات، حيث نضمن الكفاءة، وسرعة الإنجاز، ورفع جودة المخرجات، ونظام أتمتة شامل ومميز بكفاءة أعلى وجودة أفضل ووقت أقل.",
            components: ["تحليل شامل لأنشطة المنظمة واكتشاف الفجوات والمعوقات", "نماذج لتحليل الأنشطة", "جداول تتابع مسار العمليات"],
            outputs: ["جلسات استشارية", "نماذج عمل موثقة", "دليل تتبع لجميع عمليات المنظمة", "نظام شامل"]
        },
        governance: {
            icon: "fa-balance-scale",
            title: "السياسات والإدارة",
            description: "في تمكين المعرفة نساعدكم على بناء نظام إداري عصري يحول رؤيتكم إلى واقع عملي منظم، نؤسس معكم حوكمة فعالة تضمن العدالة، والشفافية، وكفاءة الأداء، وترسي قواعد واضحة للعمل، مما يعزز بيئة محفزة للأفراد والمنظمة على حد سواء.",
            components: ["سلم الرواتب والأجور", "اللوائح والسياسات الداخلية", "الأوصاف الوظيفية الدقيقة", "الهيكل التنظيمي الأمثل"],
            outputs: ["حزمة متكاملة من السياسات واللوائح الإدارية والمالية", "هيكل تنظيمي واضح يحدد خطوط السلطة والمسؤولية", "أوصاف وظيفية شاملة لمختلف الوظائف", "نظام عادل وشفاف للرواتب والأجور"]
        },
        projects: {
            icon: "fa-project-diagram",
            title: "إدارة البرامج والمشاريع",
            description: "نحول أفكاركم الطموحة إلى مشاريع واقعية وملموسة. عبر تقديم حزمة متكاملة من المبادرات تبدأ من التخطيط وحتى الإغلاق، لضمان تنفيذ خططكم ضمن الجدول الزمني والميزانية المحددة، وبالمواصفات والجودة المطلوبة. لتحقيق الأثر المجتمعي المستدام.",
            components: ["إعداد دراسة الجدوى والميزانيات التقديرية", "تخطيط وتصميم المبادرات والمشاريع", "متابعة وتنفيذ المشاريع", "إعداد تقارير الإغلاق والتسليم"],
            outputs: ["دراسات جدوى مفصلة للمبادرات الجديدة", "خطط مشاريع واضحة المعالم والأهداف", "نظام متابعة لمتابعة تقدم المشاريع", "تقارير إغلاق مشاريع توضح الإنجازات والدروس المستفادة"]
        },
        impact: {
            icon: "fa-chart-line",
            title: "قياس أثر البرامج والمشاريع",
            description: "لا نكتفي بتنفيذ المشاريع، بل نضمن لكم قياس فعاليتها وعائدها الحقيقي. نقدم لكم أدلة ملموسة على الأثر الذي تحدثه برامجكم، مما يمكنكم من اتخاذ قرارات مستنيرة لتحسين الأداء وتبرير الاستثمار.",
            components: ["تصميم مؤشرات قياس الأثر (KPIs)", "تطبيق المقاييس القبلية والبعدية", "تحليل الفجوات بين الأداء الفعلي والمستهدف", "إعداد تقارير قياس الأثر الشاملة"],
            outputs: ["إطار متكامل لقياس الأداء والأثر", "تقارير قبلية وبعدية توضح التغير الذي أحدثه المشروع", "تحليلات بيانات داعمة لاتخاذ القرار", "تقرير نهائي يلخص أثر البرنامج أو المشروع"]
        },
        training: {
            icon: "fa-graduation-cap",
            title: "بناء خطط التدريب وتقييم المهارات",
            description: "نتطلع لكم فريقًا قادرًا على إدارة مهامكم بكفاءة عالية. نبدأ بتقييم دقيق للمهارات الحالية والمطلوبة، لنصمم بناءً عليه خطط تدريب نوعية تلبي الاحتياجات الفعلية، وتعزز القدرات التنافسية لفريقكم ومنظمتكم.",
            components: ["تقييم واختبار المهارات الحالية للفريق (اختبار الممارس/اختبار الفريق)", "تحليل الفجوات التدريبية", "تصميم خطة تدريبية مخصصة", "تقييم المتابعة لقياس فعالية التدريب"],
            outputs: ["تقرير تقييم المهارات والفجوات التدريبية", "خطة تدريبية شاملة تركز على المجالات الرئيسية ذات الأولوية", "جلسات تدريبية وتنمية مهارية مخصصة", "تقرير متابعة يقيس تطور المهارات بعد التدريب"]
        }
    };

    // --- Loading Screen Logic ---
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // --- Header & Navigation Logic ---
    const header = document.getElementById('header');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                // Scrolled state for header only
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Intersection Observer for Active section tracking
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Mobile Menu Toggle
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth Scroll for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');

            if (targetElement) {
                const headerHeight = header.clientHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Hero Section Navigation (الروابط داخل الهيرو) ---
    const heroLinks = document.querySelectorAll('.hero-cta a'); // تم تعديل المحدد
    heroLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerHeight = header.clientHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Services Modal Logic ---
    const serviceModal = document.getElementById('service-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const readMoreBtns = document.querySelectorAll('.btn-read-more');
    const modalRequestBtn = document.getElementById('modal-request-btn');

    const openModal = (serviceKey) => {
        const data = servicesData[serviceKey];
        if (!data) return;

        document.getElementById('modal-service-icon').className = `fas ${data.icon}`;
        document.getElementById('modal-service-title').textContent = data.title;
        document.getElementById('modal-service-description').textContent = data.description;

        const componentsList = document.getElementById('modal-service-components');
        componentsList.innerHTML = '';
        data.components.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            componentsList.appendChild(li);
        });

        const outputsList = document.getElementById('modal-service-outputs');
        outputsList.innerHTML = '';
        data.outputs.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            outputsList.appendChild(li);
        });

        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-service-key');
            openModal(key);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
            closeModal();
        }
    });

    modalRequestBtn.addEventListener('click', () => {
        closeModal();
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = header.clientHeight;
                window.scrollTo({
                    top: contactSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        }, 300);
    });

    // --- Video Section Logic ---
    const video = document.getElementById('intro-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playButton = document.getElementById('play-button');

    const handlePlay = () => {
        videoOverlay.classList.add('hidden');
        video.play().catch(err => {
            console.log('Error playing video:', err);
            videoOverlay.classList.remove('hidden');
        });
    };

    if (videoOverlay) {
        videoOverlay.addEventListener('click', handlePlay);
    }
    if (playButton) {
        playButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handlePlay();
        });
    }

    if (video) {
        video.addEventListener('ended', () => {
            setTimeout(() => {
                videoOverlay.classList.remove('hidden');
            }, 1000);
        });

        video.addEventListener('play', () => {
            videoOverlay.classList.add('hidden');
        });
    }

    // --- Stats Counter Logic ---
    const statsSection = document.getElementById('stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateStats = () => {
        statNumbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    num.textContent = target;
                    clearInterval(timer);
                } else {
                    num.textContent = Math.floor(current);
                }
            }, 16);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateStats();
        }
    }, { threshold: 0.5 });

    if (statsSection) observer.observe(statsSection);

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const organization = document.getElementById('organization').value;
            const service = document.getElementById('service').value;
            const messageText = document.getElementById('message').value;

            // Validation
            let isValid = true;
            const errorName = document.getElementById('error-name');
            const errorEmail = document.getElementById('error-email');
            
            if (errorName) errorName.textContent = '';
            if (errorEmail) errorEmail.textContent = '';
            document.getElementById('name')?.classList.remove('error');
            document.getElementById('email')?.classList.remove('error');

            if (!name.trim() || name.trim().split(/\s+/).length < 3) {
                if (errorName) errorName.textContent = 'الرجاء إدخال الاسم الثلاثي الكامل';
                document.getElementById('name')?.classList.add('error');
                isValid = false;
            }

            if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                if (errorEmail) errorEmail.textContent = 'الرجاء إدخال بريد إلكتروني صحيح';
                document.getElementById('email')?.classList.add('error');
                isValid = false;
            }

            if (!isValid) return;

            const servicesMap = { 
                strategic: 'البناء الاستراتيجي', 
                operations: 'تطوير العمليات', 
                governance: 'السياسات والحوكمة', 
                projects: 'إدارة المشاريع', 
                impact: 'قياس الأثر', 
                training: 'التدريب والتطوير' 
            };

            let whatsappMsg = `🎯 *طلب استشارة جديد من موقع تمكين المعرفة*\n\n👤 *الاسم:* ${name}\n📧 *البريد:* ${email}\n`;
            if (phone) whatsappMsg += `📞 *الهاتف:* ${phone}\n`;
            if (organization) whatsappMsg += `🏢 *المنظمة:* ${organization}\n`;
            if (service) whatsappMsg += `🎯 *الخدمة:* ${servicesMap[service] || service}\n`;
            if (messageText) whatsappMsg += `\n📝 *التفاصيل:*\n${messageText}`;

            window.open(`https://wa.me/966569181272?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
        });
    }

    // --- Back to Top Logic ---
    const backToTopBtn = document.getElementById('back-to-top');
    let isBackToTopScrolling = false;
    
    window.addEventListener('scroll', () => {
        if (!isBackToTopScrolling) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
                isBackToTopScrolling = false;
            });
            isBackToTopScrolling = true;
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});