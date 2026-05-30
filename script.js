// script.js - Neural Nexus Portfolio Full Functionality

(function() {
    // ============ BOOT SEQUENCE ============
    const bootLog = ["> NEURAL CORE BOOT SEQUENCE INITIATED", "> Loading quantum memory banks... OK", "> Calibrating synaptic pathways... OK", "> DHRΔVΔN neural matrix online... OK", "> Establishing nexus connection... OK", "> Decrypting innovation matrix... OK", "> Achievement vault unlocked... OK", "> Digital universe mapping... 98%", "> ALL SYSTEMS NOMINAL — WELCOME"];
    const logContainer = document.getElementById('log-container');
    const bootBar = document.getElementById('boot-bar');
    const bootPercent = document.getElementById('boot-percent');
    const bootScreen = document.getElementById('boot-sequence');
    let progress = 0, logIndex = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 5;
        if (progress >= 100) { progress = 100; clearInterval(interval); setTimeout(() => { bootScreen.style.opacity = '0'; bootScreen.style.visibility = 'hidden'; document.body.style.overflow = 'auto'; }, 1000); }
        bootBar.style.width = progress + '%';
        bootPercent.innerText = Math.floor(progress) + '%';
        if (logIndex < bootLog.length && progress > (logIndex + 1) * (100 / bootLog.length)) { const line = document.createElement('div'); line.innerText = bootLog[logIndex]; logContainer.appendChild(line); logIndex++; }
    }, 100);

    // ============ DATA ============
    const achievementsData = [
        { title: "First position in Hackathon @IIT ROPAR ", desc: "Secure First position in National level hackathon Ai for social good organized by IIT Ropar ", image: "/photos/IIT ropar.jpg", icon: "fa-building" },
        { title: "First Position in Stack Sprint 1.0 Hackathon", desc: "Eligible for second level in International olympiad of mathematics organized by silverzone ", image: "/photos/Stack.jpeg", icon: "fa-certificate" },
        { title: "12th Position in Intellactathon", desc: "Secure 12 position in Intellactathon a university level patent based competition  ", image: "/photos/intellactathon.jpg", icon: "fa-trophy" },
        { title: "IOM rank 418", desc: "Eligible for second level in International olympiad of mathematics organized by silverzone ", image: "/photos/math-olympiad.jpg", icon: "fa-trophy" },
        { title: "2nd prize in photograph day", desc: "Won 2nd place in a photography competition.", image: "/photos/Photograph.jpeg", icon: "fa-award" },
        { title: "Acheievers award 2026 ", desc: " Received achievers award for securing 1st position in Hackathon organized by IIT Ropar ", image: "/photos/achievers.jpeg", icon: "fa-star" },
        { title: "Under top 20 in enigma quest", desc: "Surpass over 100 students in Enigma quest organize by Brainstromers Club.", image: "/photos/enigma.jpeg", icon: "fa-graduation-cap" },
        { title: "2 time award winner in group singing competition", desc: "Participated in district level singing competion organized in Bal Bhawan Jind", image: "/photos/singing.jpg", icon: "fa-user-tie" },
        { title: "Runner up in Peace of code Hackathon IIT Ropar", desc: "Secure Runner up position in Peace of code Hackathon organized by IIT Ropar ", image: "/photos/peace.jpeg", icon: "fa-moon" }
    ];
    const patents = [
        { id: "#202511122602", title: "ConneCX : Smart Storage Device with Network Storage Capability", desc: "Advanced smart storage ecosystem with secure network-based data access and intelligent synchronization.", status: "VERIFIED" },
        { id: "#202611020405", title: "Energy Distribution and Regeneration System", desc: "Innovative system for intelligent power distribution, regenerative recovery, and adaptive energy management.", status: "VERIFIED" },
        { id: "#202611065622", title: "Fan-less Auto-Cooling Laptop Stand Using Passive Thermal Management", desc: "Passive thermal dissipation laptop stand engineered for silent and efficient cooling performance.", status: "VERIFIED" },
        { id: "#202511126806", title: "Intelligent Dustbin System for Waste Sorting, Hygienic Processing and Optimized Collection Routing", desc: "AI-powered waste management system with automated segregation and optimized collection routing.", status: "VERIFIED" },
        { id: "#202611021600", title: "Kinetic Neuro-Adaptive Footwear (KNAF): Intelligent Energy-Harvesting and Emotion-Synchronized Smart Shoes for Human Neuro-Energetic Optimization", desc: "Smart footwear integrating kinetic energy harvesting, adaptive sensing, and intelligent mobility analytics.", status: "VERIFIED" },
        { id: "#202511132517", title: "Lumo Intelligence : Smart Light Ventilation and Mobile Detection System", desc: "Intelligent automation system combining smart lighting, ventilation control, and mobile-based occupancy detection.", status: "VERIFIED" },
        { id: "#202611007559", title: "Smart Tire with Integrated Auto-Braking, Energy Generation, Balance Control, and Speed Limiting System", desc: "Advanced smart tire featuring automatic braking, energy generation, and adaptive balance control.", status: "VERIFIED" }
    ];
    const certs = [
        "FULL_STACK_ENGINEERING_PRO", "AI_RESEARCH_SPECIALIST", "PATENT_INNOVATOR_CERTIFIED", "CLOUD_COMPUTING_ENGINEER",
        "AWS_SOLUTIONS_ARCHITECT", "ADVANCED_WEB_ARCHITECT", "HACKATHON_CHAMPION_SERIES", "SOFTWARE_INNOVATION_EXPERT",
        "MERN_STACK_MASTERY", "NEXTJS_APPLICATION_ENGINEER", "ARTIFICIAL_INTELLIGENCE_PRO", "TECHNICAL_RESEARCH_FELLOW",
        "SYSTEM_DESIGN_ASSOCIATE", "OPEN_SOURCE_CONTRIBUTOR", "DATA_STRUCTURES_EXPERT", "PROBLEM_SOLVING_ELITE",
        "DEVOPS_FOUNDATION_CERTIFIED", "PATENT_RESEARCH_ASSOCIATE", "MACHINE_LEARNING_PRACTITIONER", "GENAI_APPLICATION_DEVELOPER"
    ];
    const endorsements = [
        { name: "Abhilasha Nanda", title: "Assistant Professor • IIT Ropar", text: "Deven demonstrated impressive technical knowledge, strong problem-solving ability, and a research-oriented mindset. He quickly analyzes challenges, explores innovative solutions, and effectively applies research to achieve practical outcomes under tight deadlines." },
        { name: "Nishant Malhotra", title: "AI Summer Resident • IIM Ahmedabad", text: "Deven showcased strong technical understanding, creativity, and dedication toward problem-solving. His research skills, quick learning ability, and confidence in working on innovative ideas make him a promising developer and researcher." },
        { name: "Aditya Singh", title: "Programmer & DSA Enthusiast", text: "An outstanding teammate with strong leadership and collaboration skills. Deven consistently contributes technical expertise, research acumen, and reliability, helping teams stay focused and deliver successful outcomes." },
        { name: "Dr. Vijay Mohan Shrimal", title: "Associate Professor • Chandigarh University", text: "Deven stands out for his technical expertise, dedication, and innovative mindset. His involvement in projects, hackathons, and patent filings reflects his commitment to creating impactful real-world solutions." },
        { name: "Heet Sheth", title: "C++ Developer • Ex-Intel Intern", text: "Deven is persistent, hardworking, and highly proactive in learning new technologies. His ability to solve practical developer challenges and perform under pressure demonstrates strong engineering potential." },
        { name: "Dr. Arbaaz Khan", title: "Scientific Editor & Research Mentor", text: "A talented and disciplined student with exceptional commitment to projects and extracurricular activities. Deven combines passion, punctuality, and determination, making him a valuable asset to any organization." },
        { name: "Yash Jain", title: "Student • Navar Rachna Educational Institutions", text: "Deven consistently demonstrates professionalism, technical excellence, and a strong work ethic. His collaborative approach, problem-solving ability, and eagerness to learn set him apart from his peers." },
        { name: "Dr. Ankit Garg", title: "Faculty Advisor • Chandigarh University", text: "A sincere and dedicated student with excellent academic attitude and analytical thinking skills. Deven frequently generates innovative ideas and approaches engineering challenges with creativity and logic." },
        { name: "Ridhi Bansal", title: "Frontend Web Developer", text: "Working with Deven on patent-related projects highlighted his dedication, deep research capabilities, and strong problem-solving skills. His contributions consistently improved the quality of team outcomes." },
        { name: "Deepti Sharma", title: "Program Leader • Cloud Computing & DevOps", text: "Deven is an exceptional researcher with a strong innovation mindset. His ability to identify opportunities where others see obstacles led to impactful research contributions, including successful patent work." }
    ];

    // Render Functions
    function renderAchievements() {
        const grid = document.getElementById('achievements-grid');
        achievementsData.forEach((a, idx) => {
            const card = document.createElement('div');
            card.className = 'achievement-card';
            card.dataset.achievementIndex = idx;
            card.innerHTML = `<div class="text-3xl text-primary mb-3"><i class="fas ${a.icon}"></i></div><h3 class="font-headline-lg text-xl text-white mb-2">${a.title}</h3><p class="text-sm text-on-surface-variant/70">${a.desc}</p>`;
            grid.appendChild(card);
        });
    }

    // Modal logic
    const modal = document.getElementById('achievementModal');
    const modalImg = document.getElementById('modalAchievementImage');
    const modalTitle = document.getElementById('modalAchievementTitle');
    const modalDesc = document.getElementById('modalAchievementDesc');
    const closeModalBtn = document.getElementById('closeModalBtn');
    function openAchievementModal(index) { const a = achievementsData[index]; if (a) { modalImg.src = a.image; modalTitle.innerText = a.title; modalDesc.innerText = a.desc; modal.classList.add('active'); } }
    function closeModal() { modal.classList.remove('active'); }
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.getElementById('achievements-grid')?.addEventListener('click', (e) => { const card = e.target.closest('.achievement-card'); if (card && card.dataset.achievementIndex !== undefined) openAchievementModal(parseInt(card.dataset.achievementIndex)); });

    function renderPatents() {
        const container = document.getElementById('patents-list');
        patents.forEach(p => {
            const div = document.createElement('div');
            div.className = 'group flex flex-col md:flex-row items-center justify-between p-6 bg-hologram-glass border border-outline-variant/20 rounded-xl';
            div.innerHTML = `<div class="flex items-center gap-6 flex-1 min-w-0"><span class="font-mono text-primary text-sm flex-shrink-0">${p.id}</span><div class="min-w-0"><h4 class="font-body-lg text-white">${p.title}</h4><p class="text-xs text-outline truncate">${p.desc}</p></div></div><div class="px-3 py-1 bg-primary/10 border border-primary/20 text-[10px] text-primary flex-shrink-0 mt-3 md:mt-0 ml-0 md:ml-4 rounded-full">${p.status}</div>`;
            container.appendChild(div);
        });
    }

    function renderCertMarquee() {
        const marquee = document.getElementById('cert-marquee');
        certs.forEach(c => {
            const badge = document.createElement('div');
            badge.className = 'inline-block glass-panel px-8 py-4 rounded-full border-primary/20 flex items-center gap-4 mx-2 flex-shrink-0';
            badge.innerHTML = `<div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><span class="material-symbols-outlined text-primary text-sm">verified_user</span></div><span class="font-label-sm text-white tracking-widest">${c}</span>`;
            marquee.appendChild(badge);
        });
    }

    function renderEndorsements() {
        const slider = document.getElementById('endorsements-slider');
        endorsements.forEach(e => {
            const card = document.createElement('div');
            card.className = 'w-[450px] flex-shrink-0 bg-surface-container/40 backdrop-blur-xl border border-white/10 rounded-xl p-8';
            card.innerHTML = `<div class="flex items-center gap-4 mb-6"><div class="w-12 h-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center"><span class="material-symbols-outlined text-primary">person</span></div><div><h4 class="text-white font-bold">${e.name}</h4><p class="text-[10px] text-on-surface-variant">${e.title}</p></div></div><p class="text-on-surface-variant italic text-sm">${e.text}</p><div class="mt-6 flex justify-between text-[10px] opacity-40"><span>VERIFIED_ENDORSEMENT</span><span>2026</span></div>`;
            slider.appendChild(card);
        });
    }

    renderAchievements();
    renderPatents();
    renderCertMarquee();
    renderEndorsements();

    // Project click
    document.querySelectorAll('[data-project-link]').forEach(el => { el.addEventListener('click', (e) => { e.stopPropagation(); const link = el.getAttribute('data-project-link'); if (link && link !== '#') window.open(link, '_blank'); }); });

    // Typewriter
    const texts = ["Full Stack Innovator", "Android Developer", "IoT and AI Enthusiast", "Patent Holder", "Published Author"];
    let idx = 0, ch = 0, del = false, twEl = document.getElementById('typewriter');
    function typeWrite() {
        let cur = texts[idx];
        if (del) { twEl.innerText = cur.substring(0, ch - 1); ch--; } else { twEl.innerText = cur.substring(0, ch + 1); ch++; }
        if (!del && ch === cur.length) { del = true; setTimeout(typeWrite, 1500); return; }
        if (del && ch === 0) { del = false; idx = (idx + 1) % texts.length; setTimeout(typeWrite, 500); return; }
        setTimeout(typeWrite, del ? 50 : 100);
    }
    setTimeout(typeWrite, 500);

    // Circular Collage
    function initCircularCollage() {
        const segments = document.querySelectorAll('.ring-segment');
        const numSegments = segments.length;
        let angle = 0;
        const speed = 0.006;
        function getRadius() { const w = window.innerWidth; if (w <= 768) return 130; if (w <= 1200) return 170; return 210; }
        function getSegmentSize() { const w = window.innerWidth; if (w <= 768) return 75; if (w <= 1200) return 100; return 130; }
        function animate() {
            angle += speed;
            const radius = getRadius();
            const size = getSegmentSize();
            const halfSize = size / 2;
            segments.forEach((segment, i) => {
                const startAngle = (i * 2 * Math.PI) / numSegments;
                const currentAngle = startAngle + angle;
                const x = radius * Math.cos(currentAngle);
                const y = radius * Math.sin(currentAngle);
                segment.style.left = `calc(50% + ${x}px - ${halfSize}px)`;
                segment.style.top = `calc(50% + ${y}px - ${halfSize}px)`;
                segment.style.width = size + 'px';
                segment.style.height = size + 'px';
            });
            requestAnimationFrame(animate);
        }
        const initRadius = getRadius();
        const initSize = getSegmentSize();
        const initHalfSize = initSize / 2;
        segments.forEach((segment, i) => {
            const startAngle = (i * 2 * Math.PI) / numSegments;
            const x = initRadius * Math.cos(startAngle);
            const y = initRadius * Math.sin(startAngle);
            segment.style.left = `calc(50% + ${x}px - ${initHalfSize}px)`;
            segment.style.top = `calc(50% + ${y}px - ${initHalfSize}px)`;
            segment.style.width = initSize + 'px';
            segment.style.height = initSize + 'px';
        });
        requestAnimationFrame(animate);
    }
    initCircularCollage();

    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.achievement-card').forEach(el => { gsap.from(el, { scrollTrigger: { trigger: el, start: "top 85%" }, opacity: 0, y: 30, duration: 0.6 }); });
    const projectSets = document.querySelectorAll('.project-set');
    projectSets.forEach((set) => { const cards = set.querySelectorAll('.hologram-card'); gsap.from(cards, { scrollTrigger: { trigger: set, start: "top 78%" }, opacity: 0, y: 40, duration: 0.7, stagger: 0.15 }); });

    // Navigation highlight
    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('section[id]');
        let links = document.querySelectorAll('nav a');
        let cur = "";
        sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 200) cur = sec.getAttribute('id'); });
        links.forEach(link => {
            link.classList.remove('text-primary', 'bg-primary-container/10', 'border-l-4', 'border-primary', 'shadow-[inset_8px_0_12px_-6px_rgba(0,219,231,0.3)]');
            link.classList.add('text-on-surface-variant/60');
            if (link.getAttribute('href') && link.getAttribute('href').includes(cur)) {
                link.classList.add('text-primary', 'bg-primary-container/10', 'border-l-4', 'border-primary', 'shadow-[inset_8px_0_12px_-6px_rgba(0,219,231,0.3)]');
                link.classList.remove('text-on-surface-variant/60');
            }
        });
    });

    document.querySelector('.scroll-down')?.addEventListener('click', () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }));

    // Resume Envelope Logic
    const envelope = document.getElementById('resumeEnvelope');
    const envelopeInner = document.getElementById('envelopeInner');
    const viewResumeBtn = document.getElementById('viewResumeBtn');
    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    if (envelope && envelopeInner) {
        envelope.addEventListener('click', (e) => { if (e.target !== viewResumeBtn && e.target !== downloadResumeBtn && !viewResumeBtn?.contains(e.target) && !downloadResumeBtn?.contains(e.target)) { envelopeInner.classList.toggle('open'); } });
    }
    if (viewResumeBtn) viewResumeBtn.addEventListener('click', (e) => { e.stopPropagation(); window.open('Deven_resume.pdf', '_blank'); });
    if (downloadResumeBtn) downloadResumeBtn.addEventListener('click', (e) => { e.stopPropagation(); const link = document.createElement('a'); link.href = 'Deven_resume.pdf'; link.download = 'Deven_Goyal_Resume.pdf'; link.click(); });

    // ============ DHRΔVΔN VOICE ASSISTANT ============
    const dhravanKnowledge = [
        { keywords: ['who are you', 'your name', 'what are you'], response: "I am DHRΔVΔN, the AI assistant of Deven Goyal. I serve as the neural interface for his portfolio. Deven is a Full Stack Developer, AI Enthusiast, Innovator, Patent Holder, and B.Tech CSE student at Chandigarh University." },
        { keywords: ['tell me about deven', 'who is deven', 'deven goyal'], response: "Deven Goyal is a Computer Science Engineering student at Chandigarh University. He specializes in Full Stack Development, Artificial Intelligence, IoT systems, and Android Development. He has won national-level hackathons, holds multiple patents, and is a published author." },
        { keywords: ['skills', 'technologies', 'tech stack', 'what can deven do'], response: "Deven is proficient in HTML, CSS, JavaScript, React, Node.js, Python, Java, C++, MongoDB, SQL, AI/ML frameworks, IoT platforms, Git, and Android Development." },
        { keywords: ['achievements', 'awards', 'hackathon'], response: "Deven's notable achievements include: Winner of Hackathon at IIT Ropar, Winner of Stack Sprint 1.0, 12th rank in Intellactathon, International Mathematics Olympiad Rank 418, Published Kindle Author, and Top 9% Learner on Duolingo." },
        { keywords: ['patents', 'patent'], response: "Yes, Deven has worked on multiple patents covering domains like Decentralized Neural Fabric Architecture, Autonomous Quantum Conflict Resolution, Bio-Sensing Cryptographic Validation, and several others across AI, IoT, and healthcare." },
        { keywords: ['projects', 'what has deven built'], response: "Deven has developed numerous projects including Bharat Intelligence (localized LLM), MailIQ, Neuro-Scan Alpha, EcoSense AI, FinVis, SmartGrid Controller, MedChain, AeroSim Pro, and EdNova." },
        { keywords: ['contact', 'how to reach', 'email'], response: "You can contact Deven through LinkedIn, GitHub, or email at devenxcelerate@gmail.com. All his social media profiles and contact links are available in the contact section of this portfolio." },
        { keywords: ['hello', 'hi', 'hey'], response: "Hello! I'm DHRΔVΔN, Deven Goyal's AI assistant. I can tell you about Deven's skills, projects, achievements, patents, education, or how to contact him. What would you like to know?" }
    ];
    function getDhravanResponse(query) {
        if (!query || query.trim() === '') return "I didn't catch that. Please tap the orb and ask me about Deven's skills, projects, or achievements.";
        const q = query.toLowerCase();
        for (const item of dhravanKnowledge) for (const kw of item.keywords) if (q.includes(kw)) return item.response;
        if (q.includes('skill') || q.includes('tech')) return dhravanKnowledge.find(k => k.keywords.includes('skills')).response;
        if (q.includes('project')) return dhravanKnowledge.find(k => k.keywords.includes('projects')).response;
        if (q.includes('patent')) return dhravanKnowledge.find(k => k.keywords.includes('patents')).response;
        return "I'm not sure I understood that. You can ask me about Deven's skills, projects, achievements, patents, education, or how to contact him.";
    }

    const dhravanTriggerBtn = document.getElementById('dhravanTriggerBtn');
    const dhravanBackdrop = document.getElementById('dhravanBackdrop');
    const dhravanOverlay = document.getElementById('dhravanOverlay');
    const dhravanLightOrb = document.getElementById('dhravanLightOrb');
    const dhravanOrbIcon = document.getElementById('dhravanOrbIcon');
    const dhravanStatus = document.getElementById('dhravanStatus');
    const dhravanTranscript = document.getElementById('dhravanTranscript');
    const dhravanCloseBtn = document.getElementById('dhravanCloseBtn');
    const dhravanWaveform = document.getElementById('dhravanWaveform');
    const dhravanManualListenBtn = document.getElementById('dhravanManualListenBtn');
    const waveformBars = dhravanWaveform.querySelectorAll('.bar');
    let dhravanActive = false, recognition = null, synth = window.speechSynthesis, speaking = false, listening = false, waveformInterval = null;

    function startWaveformAnimation() { if (waveformInterval) clearInterval(waveformInterval); waveformInterval = setInterval(() => { waveformBars.forEach(bar => { bar.style.height = Math.random() * 32 + 4 + 'px'; }); }, 120); }
    function stopWaveformAnimation() { if (waveformInterval) clearInterval(waveformInterval); waveformBars.forEach(bar => { bar.style.height = '8px'; }); }

    function speakResponse(text) {
        if (speaking) synth.cancel();
        speaking = true;
        dhravanStatus.textContent = 'DHRΔVΔN SPEAKING...';
        dhravanTranscript.textContent = '';
        dhravanOrbIcon.classList.remove('listening');
        startWaveformAnimation();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.95;
        utterance.onend = () => { speaking = false; dhravanStatus.textContent = 'TAP THE ORB TO SPEAK'; stopWaveformAnimation(); dhravanOrbIcon.classList.remove('listening'); };
        utterance.onerror = () => { speaking = false; dhravanStatus.textContent = 'TAP THE ORB TO SPEAK'; stopWaveformAnimation(); dhravanOrbIcon.classList.remove('listening'); };
        synth.speak(utterance);
    }

    function startListening() {
        if (speaking) { synth.cancel(); speaking = false; }
        if (!recognition) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) { dhravanStatus.textContent = 'SPEECH NOT SUPPORTED'; speakResponse("Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari."); return; }
            recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.onresult = (event) => { listening = false; dhravanOrbIcon.classList.remove('listening'); stopWaveformAnimation(); const transcript = event.results[0][0].transcript; dhravanTranscript.textContent = 'You said: "' + transcript + '"'; dhravanStatus.textContent = 'PROCESSING...'; const response = getDhravanResponse(transcript); setTimeout(() => { dhravanTranscript.textContent = ''; speakResponse(response); }, 500); };
            recognition.onerror = () => { listening = false; dhravanOrbIcon.classList.remove('listening'); stopWaveformAnimation(); dhravanStatus.textContent = 'TAP THE ORB TO SPEAK'; };
            recognition.onend = () => { listening = false; dhravanOrbIcon.classList.remove('listening'); if (!speaking) stopWaveformAnimation(); };
        }
        if (!listening && !speaking) { listening = true; dhravanStatus.textContent = 'LISTENING...'; dhravanTranscript.textContent = ''; dhravanOrbIcon.classList.add('listening'); startWaveformAnimation(); try { recognition.start(); } catch(e) { listening = false; dhravanOrbIcon.classList.remove('listening'); stopWaveformAnimation(); } }
    }

    function openDhravan() { if (dhravanActive) return; dhravanActive = true; document.body.style.overflow = 'hidden'; dhravanBackdrop.classList.add('active'); dhravanOverlay.classList.add('active'); dhravanLightOrb.classList.add('active'); dhravanStatus.textContent = 'INITIALIZING...'; setTimeout(() => { dhravanStatus.textContent = 'TAP THE ORB TO SPEAK'; speakResponse("Greetings. I am DHRΔVΔN, the neural interface of Deven Goyal's portfolio. Tap the orb and ask me anything about Deven's skills, projects, or achievements."); }, 1000); }
    function closeDhravan() { if (!dhravanActive) return; dhravanActive = false; if (speaking) synth.cancel(); if (listening && recognition) try { recognition.stop(); } catch(e) {} stopWaveformAnimation(); dhravanOrbIcon.classList.remove('listening'); document.body.style.overflow = 'auto'; dhravanBackdrop.classList.remove('active'); dhravanOverlay.classList.remove('active'); dhravanLightOrb.classList.remove('active'); }

    dhravanTriggerBtn.addEventListener('click', openDhravan);
    dhravanCloseBtn.addEventListener('click', closeDhravan);
    dhravanBackdrop.addEventListener('click', (e) => { if (e.target === dhravanBackdrop) closeDhravan(); });
    dhravanOrbIcon.addEventListener('click', () => { if (dhravanActive && !speaking) startListening(); });
    dhravanManualListenBtn.addEventListener('click', () => { if (dhravanActive && !speaking) startListening(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && dhravanActive) closeDhravan(); });

    // More projects indicator
    const moreIndicator = document.getElementById('moreProjectsIndicator');
    const allProjectSets = document.querySelectorAll('.project-set');
    if (moreIndicator && allProjectSets.length > 1) { const lastSet = allProjectSets[allProjectSets.length - 1]; const observer = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) { moreIndicator.style.opacity = '0'; setTimeout(() => moreIndicator.style.display = 'none', 600); observer.unobserve(lastSet); } }, { threshold: 0.3 }); observer.observe(lastSet); }

    console.log('%c🧠 NEURAL NEXUS ONLINE | DHRΔVΔN v2.084 | ALL SYSTEMS NOMINAL', 'color:#00dbe7;font-size:14px;');
})();