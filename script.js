const birthdays = [
    // Optional fields per person:
    //   year: 1990           → shows age / "turning N"
    //   nickname: "Mo"       → shown beside the name
    //   note: "Team lead"    → small subtitle
    //   photo: "photos/x.jpg" or drop photos/{slug}.jpg
    // e.g. Mukesh → photos/mukesh.jpg, "G Priya" → photos/g-priya.jpg
    { name: "Mukesh", day: 14, month: 1 },
    { name: "Prem", day: 15, month: 1 },
    
    { name: "Mani", day: 2, month: 2 },
    { name: "Shabir", day: 7, month: 2 },
    { name: "Sivakumar", day: 13, month: 2 },
    { name: "Karthikeyan", day: 23, month: 2 },
    
    { name: "Vishwanath", day: 4, month: 3 },
    { name: "R.Vinoth", day: 8, month: 3 },
    { name: "PT Nagarajan", day: 11, month: 3 },
    { name: "Janakiraman", day: 15, month: 3 },
    { name: "Vishwanath", day: 18, month: 3 },
    
    { name: "Arasu Raja", day: 15, month: 4 },
    { name: "Allah", day: 18, month: 4 },
    { name: "Gowri", day: 18, month: 4 },
    { name: "Firoze", day: 21, month: 4 },
    { name: "Seshma", day: 27, month: 4 },
    
    { name: "Meenakshi", day: 5, month: 5 },
    { name: "Prince", day: 7, month: 5 },
    { name: "Vikram", day: 29, month: 5 },
    
    { name: "Annapoorna", day: 4, month: 6 },
    { name: "Kalpana", day: 8, month: 6 },
    { name: "Subasri", day: 18, month: 6 },
    { name: "Lokesh", day: 22, month: 6 },
    { name: "Usha Kiruthika", day: 23, month: 6 },
    
    { name: "Shalini Vikram", day: 1, month: 7 },
    { name: "Divya", day: 10, month: 7 },
    { name: "Abinesh Raja", day: 17, month: 7 },
    { name: "Narendran", day: 18, month: 7 },
    { name: "David", day: 23, month: 7 },
    { name: "MKG Gokul", day: 25, month: 7 },
    { name: "Sriram", day: 28, month: 7 },
    
    { name: "Dinesh", day: 4, month: 8 },
    { name: "Murali", day: 5, month: 8 },
    { name: "Lakshmipathy", day: 8, month: 8 },
    { name: "G.Vinoth", day: 28, month: 8 },
    
    { name: "Punitha", day: 1, month: 9 },
    { name: "Guru", day: 3, month: 9 },
    { name: "Manoj", day: 5, month: 9 },
    { name: "Priyadevi", day: 8, month: 9 },
    { name: "Rama/Rajee", day: 10, month: 9 },
    { name: "Nandini", day: 14, month: 9 },
    { name: "Anand", day: 15, month: 9 },
    
    { name: "Saravana/Kumar", day: 1, month: 10 },
    { name: "Dhana", day: 15, month: 10 },
    { name: "Geetha", day: 16, month: 10 },
    { name: "Gokulnath", day: 17, month: 10 },
    { name: "G Priya", day: 22, month: 10 },
    { name: "Devishree", day: 24, month: 10 },
    { name: "Thanagdurai", day: 26, month: 10 },
    { name: "Priyadharshini", day: 31, month: 10 },
    
    { name: "Antony Praveen", day: 7, month: 11 },
    { name: "Pavithra Dinesh", day: 13, month: 11 },
    { name: "Anadavalli", day: 13, month: 11 },
    { name: "M.Vinoth", day: 13, month: 11 },
    { name: "Sathyaraj", day: 14, month: 11 },
    { name: "Sowmya", day: 16, month: 11 },
    { name: "Chitra", day: 19, month: 11 },
    { name: "Vijayaraghavan", day: 26, month: 11 },
    
    { name: "Hari", day: 10, month: 12 },
    { name: "Govardhani", day: 18, month: 12 },
    { name: "Sandeep", day: 20, month: 12 },
    { name: "Padmanaban", day: 20, month: 12 },
    { name: "Mahendran", day: 21, month: 12 },
    { name: "V Ramesh", day: 26, month: 12 }
];

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Helper to get formatted date suffix (e.g., 1st, 2nd, 3rd)
function getOrdinalSuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

// Format date as "Month Day"
function formatDate(day, month) {
    return `${monthNames[month - 1]} ${getOrdinalSuffix(day)}`;
}

function displayName(person) {
    return person.nickname ? `${person.name} (${person.nickname})` : person.name;
}

function getTurningAge(person) {
    if (!person.year) return null;
    const today = new Date();
    const thisYearAge = today.getFullYear() - person.year;
    const alreadyPassed =
        today.getMonth() + 1 > person.month ||
        (today.getMonth() + 1 === person.month && today.getDate() > person.day);
    return alreadyPassed ? thisYearAge + 1 : thisYearAge;
}

function getZodiac(day, month) {
    const signs = [
        { name: 'Capricorn', m: 1, d: 19 },
        { name: 'Aquarius', m: 2, d: 18 },
        { name: 'Pisces', m: 3, d: 20 },
        { name: 'Aries', m: 4, d: 19 },
        { name: 'Taurus', m: 5, d: 20 },
        { name: 'Gemini', m: 6, d: 20 },
        { name: 'Cancer', m: 7, d: 22 },
        { name: 'Leo', m: 8, d: 22 },
        { name: 'Virgo', m: 9, d: 22 },
        { name: 'Libra', m: 10, d: 22 },
        { name: 'Scorpio', m: 11, d: 21 },
        { name: 'Sagittarius', m: 12, d: 21 },
        { name: 'Capricorn', m: 12, d: 31 }
    ];
    return signs.find(s => month < s.m || (month === s.m && day <= s.d)).name;
}

function personMeta(person, { includeDaysUntil = false } = {}) {
    const parts = [formatDate(person.day, person.month)];
    const age = getTurningAge(person);
    if (age != null) parts.push(`turning ${age}`);
    parts.push(getZodiac(person.day, person.month));
    if (person.note) parts.push(person.note);
    if (includeDaysUntil) {
        const days = getDaysUntilNext(person.day, person.month);
        if (days === 0) parts.push('Today');
        else if (days === 1) parts.push('Tomorrow');
        else if (days <= 7) parts.push(`in ${days} days`);
    }
    return parts.join(' · ');
}

function birthdayGreeting(person) {
    const nick = person.nickname || person.name;
    return `Happy Birthday ${nick}! 🎂🎉`;
}

// Slug for photo filenames: "R.Vinoth" → "r-vinoth", "Rama/Rajee" → "rama-rajeee"
function photoSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Initials from name: "Mukesh" → "M", "G Priya" → "GP", "R.Vinoth" → "RV"
function getInitials(name) {
    const cleaned = name.replace(/[./]/g, ' ').trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '?';
    if (parts.length === 1) {
        const word = parts[0];
        return word.length >= 2 ? (word[0] + word[1]).toUpperCase() : word[0].toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Stable warm hue from name for initials background
function avatarHue(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 360;
}

// Photo src: optional person.photo, else photos/{slug}.jpg
function getPhotoSrc(person) {
    if (person.photo) return person.photo;
    return `photos/${photoSlug(person.name)}.jpg`;
}

// Avatar markup — photo covers initials when it loads; onerror falls back to initials
function avatarHTML(person, sizeClass = '') {
    const initials = getInitials(person.name);
    const hue = avatarHue(person.name);
    const src = getPhotoSrc(person);
    const size = sizeClass ? ` ${sizeClass}` : '';
    return `
        <div class="avatar${size}" style="--avatar-hue: ${hue}" aria-hidden="true">
            <span class="avatar-initials">${initials}</span>
            <img class="avatar-photo" src="${src}" alt="" loading="lazy"
                 onerror="this.remove()">
        </div>
    `;
}

// Calculate days until next birthday
function getDaysUntilNext(day, month) {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    let bday = new Date(currentYear, month - 1, day);
    
    // If birthday has passed this year, look at next year
    if (today.getTime() > bday.getTime() + (24 * 60 * 60 * 1000)) {
        bday = new Date(currentYear + 1, month - 1, day);
    }
    
    const diffTime = bday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    return diffDays;
}

const pad = n => String(n).padStart(2, '0');

// Build a single VEVENT block for a birthday (shared by single + multi .ics)
function buildVEVENT(person) {
    const name = person.name;
    const day = person.day;
    const month = person.month;
    const year = new Date().getFullYear();
    const startDate = `${year}${pad(month)}${pad(day)}`;
    const endDateObj = new Date(year, month - 1, day + 1);
    const endDate = `${endDateObj.getFullYear()}${pad(endDateObj.getMonth() + 1)}${pad(endDateObj.getDate())}`;
    const uid = `birthday-${name.replace(/\s+/g, '-').toLowerCase()}-${month}-${day}@birthday-dashboard`;
    const age = getTurningAge(person);
    const descBits = [`Happy Birthday ${displayName(person)}! 🎉`, getZodiac(day, month)];
    if (age != null) descBits.push(`Turning ${age}`);
    if (person.note) descBits.push(person.note);

    return [
        'BEGIN:VEVENT',
        `DTSTART;VALUE=DATE:${startDate}`,
        `DTEND;VALUE=DATE:${endDate}`,
        'RRULE:FREQ=YEARLY',
        `SUMMARY:🎂 ${displayName(person)}'s Birthday`,
        `DESCRIPTION:${descBits.join(' — ')}`,
        `UID:${uid}`,
        'BEGIN:VALARM',
        'TRIGGER:-PT0M',
        'ACTION:DISPLAY',
        `DESCRIPTION:🎂 ${name}'s Birthday is today!`,
        'END:VALARM',
        'END:VEVENT'
    ].join('\r\n');
}

// Wrap VEVENT(s) in a VCALENDAR envelope
function wrapICS(...events) {
    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Birthday Dashboard//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        ...events,
        'END:VCALENDAR'
    ].join('\r\n');
}

// Generate .ics file content for a single birthday
function generateICS(person) {
    return wrapICS(buildVEVENT(person));
}

// Generate a combined .ics with multiple events
function generateMultiICS(people) {
    return wrapICS(...people.map(p => buildVEVENT(p)));
}

// Download an .ics file — same path on iOS, Android, and desktop
function downloadICS(filename, icsContent) {
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Add a single birthday — .ics works on Apple Calendar, Google Calendar, and others
function addToCalendar(person) {
    const ics = generateICS(person);
    downloadICS(`${person.name.replace(/\s+/g, '_')}_birthday.ics`, ics);
}

// Add all birthdays in a month — same .ics download on every platform
function addAllToCalendar(monthBirthdays) {
    const ics = generateMultiICS(monthBirthdays);
    const monthName = monthNames[monthBirthdays[0].month - 1];
    downloadICS(`${monthName}_birthdays.ics`, ics);
}

// Find today's birthdays
function getTodayBirthdays() {
    const today = new Date();
    return birthdays.filter(b => b.day === today.getDate() && b.month === (today.getMonth() + 1));
}

// Render Today's Birthday Banner
function renderTodayBanner() {
    const todayPeople = getTodayBirthdays();
    if (todayPeople.length === 0) return;

    const section = document.getElementById('upcoming-section');
    const banner = document.createElement('div');
    banner.className = 'today-banner fade-in-up';

    const names = todayPeople.map(p => `<span class="today-name">${displayName(p)}</span>`).join(', ');
    const label = todayPeople.length === 1 ? 'birthday' : 'birthdays';

    const avatars = todayPeople.map(p => avatarHTML(p, 'avatar-lg')).join('');
    const wishText = todayPeople.map(p => birthdayGreeting(p)).join('\n');

    banner.innerHTML = `
        <div class="today-banner-avatars">${avatars}</div>
        <div class="today-banner-content">
            <h3>Today's ${label}!</h3>
            <p>Wish ${names} a happy birthday — ${formatDate(todayPeople[0].day, todayPeople[0].month)}</p>
            <button type="button" class="toolbar-btn copy-wish-btn">Copy wish</button>
        </div>
    `;
    banner.querySelector('.copy-wish-btn').addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(wishText);
            const btn = banner.querySelector('.copy-wish-btn');
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = 'Copy wish'; }, 1600);
        } catch (_) {
            banner.querySelector('.copy-wish-btn').textContent = 'Copy failed';
        }
    });

    section.insertBefore(banner, section.firstChild.nextSibling);
    launchConfetti();
}

// Render Upcoming Birthdays
function renderUpcoming() {
    const container = document.getElementById('upcoming-grid');
    const todayPeople = getTodayBirthdays();
    
    // Add distance info to all birthdays
    const withDistance = birthdays.map(b => ({
        ...b,
        daysUntil: getDaysUntilNext(b.day, b.month)
    }));
    
    // Sort by closest
    withDistance.sort((a, b) => a.daysUntil - b.daysUntil);
    
    // Get top 3 upcoming
    const upcoming = withDistance.slice(0, 3);
    
    upcoming.forEach((person, index) => {
        const card = document.createElement('div');
        const isToday = person.daysUntil === 0;
        card.className = `glass-card upcoming-card fade-in-up${isToday ? ' today-highlight' : ''}`;
        card.style.animationDelay = `${index * 0.15}s`;
        
        let badgeText = isToday ? '🎂 TODAY' : (person.daysUntil === 1 ? 'Tomorrow' : `In ${person.daysUntil} days`);
        const age = getTurningAge(person);
        const subtitle = [
            formatDate(person.day, person.month),
            age != null ? `turning ${age}` : null,
            getZodiac(person.day, person.month)
        ].filter(Boolean).join(' · ');
        
        card.innerHTML = `
            <div class="date-badge${isToday ? ' badge-today' : ''}">${badgeText}</div>
            <div class="upcoming-person">
                ${avatarHTML(person, 'avatar-lg')}
                <div class="upcoming-person-text">
                    <h3>${displayName(person)}</h3>
                    <p>${subtitle}</p>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Months in wheel order: current month first, then wrap (Aug → … → Jul)
function getMonthOrder() {
    const current = new Date().getMonth() + 1; // 1–12
    return Array.from({ length: 12 }, (_, i) => ((current - 1 + i) % 12) + 1);
}

function renderMonthPanel(month, grouped) {
    const panel = document.getElementById('month-panel');
    const monthBirthdays = [...(grouped[month] || [])].sort((a, b) => a.day - b.day);
    const isCurrentMonth = month === new Date().getMonth() + 1;

    panel.innerHTML = '';

    const card = document.createElement('div');
    card.className = `glass-card month-card${isCurrentMonth ? ' month-card-current' : ''}`;

    const header = document.createElement('div');
    header.className = 'month-header';
    header.innerHTML = `
        <div class="month-title-group">
            <h3>${monthNames[month - 1]}</h3>
            ${isCurrentMonth ? '<span class="month-now-badge">This month</span>' : ''}
        </div>
        <div class="month-header-actions">
            <button class="add-all-btn" title="Add all ${monthNames[month - 1]} birthdays to your calendar">📅 Add All</button>
            <span class="count">${monthBirthdays.length}</span>
        </div>
    `;
    header.querySelector('.add-all-btn').addEventListener('click', () => {
        addAllToCalendar(monthBirthdays);
    });
    card.appendChild(header);

    if (monthBirthdays.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'month-empty';
        empty.textContent = 'No birthdays this month';
        card.appendChild(empty);
        panel.appendChild(card);
        return;
    }

    const list = document.createElement('ul');
    list.className = 'birthday-list';

    monthBirthdays.forEach(person => {
        const li = document.createElement('li');
        const today = new Date();
        const isToday = today.getDate() === person.day && (today.getMonth() + 1) === person.month;
        const daysUntil = getDaysUntilNext(person.day, person.month);

        li.className = `birthday-item${isToday ? ' birthday-today' : ''}${daysUntil > 0 && daysUntil <= 7 ? ' birthday-soon' : ''}`;
        li.innerHTML = `
            <span class="birthday-person">
                ${avatarHTML(person, 'avatar-sm')}
                <span class="person-text">
                    <span class="name">${isToday ? '🎂 ' : ''}${displayName(person)}</span>
                    ${person.note ? `<span class="person-note">${person.note}</span>` : ''}
                </span>
            </span>
            <span class="item-actions">
                <button class="cal-btn" title="Add ${person.name}'s birthday to calendar">📅</button>
                <span class="date">${getOrdinalSuffix(person.day)}${isToday ? ' — Today!' : daysUntil === 1 ? ' — Tomorrow' : daysUntil <= 7 ? ` — in ${daysUntil}d` : ''}</span>
            </span>
        `;
        li.querySelector('.cal-btn').addEventListener('click', (e) => {
            e.preventDefault();
            addToCalendar(person);
        });
        list.appendChild(li);
    });

    card.appendChild(list);
    panel.appendChild(card);
}

function selectMonth(month, grouped, scrollIntoView = false) {
    const wheel = document.getElementById('month-wheel');
    wheel.querySelectorAll('.month-wheel-item').forEach(btn => {
        const active = Number(btn.dataset.month) === month;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
        if (active && scrollIntoView) {
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
    renderMonthPanel(month, grouped);
}

// iOS-style month wheel — current month first, snap-scroll to pick a month
function renderMonths() {
    const wheel = document.getElementById('month-wheel');
    wheel.innerHTML = '';

    const grouped = {};
    for (let i = 1; i <= 12; i++) grouped[i] = [];
    birthdays.forEach(person => grouped[person.month].push(person));

    const order = getMonthOrder();
    const currentMonth = order[0];

    order.forEach(month => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'month-wheel-item';
        btn.dataset.month = String(month);
        btn.setAttribute('role', 'option');
        btn.setAttribute('aria-selected', 'false');
        btn.innerHTML = `
            <span class="month-wheel-name">${monthNames[month - 1]}</span>
            <span class="month-wheel-count">${grouped[month].length}</span>
        `;
        btn.addEventListener('click', () => selectMonth(month, grouped, true));
        wheel.appendChild(btn);
    });

    // Snap selection while scrolling the wheel
    let scrollTimer;
    wheel.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const center = wheel.scrollLeft + wheel.clientWidth / 2;
            let closest = null;
            let closestDist = Infinity;
            wheel.querySelectorAll('.month-wheel-item').forEach(btn => {
                const mid = btn.offsetLeft + btn.offsetWidth / 2;
                const dist = Math.abs(mid - center);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = btn;
                }
            });
            if (closest) {
                selectMonth(Number(closest.dataset.month), grouped, false);
            }
        }, 80);
    }, { passive: true });

    selectMonth(currentMonth, grouped, false);

    // Center current month after layout
    requestAnimationFrame(() => {
        const active = wheel.querySelector('.month-wheel-item.is-active');
        if (active) {
            active.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
        }
    });
}

function renderStats() {
    const el = document.getElementById('header-stats');
    const now = new Date();
    const thisMonth = birthdays.filter(b => b.month === now.getMonth() + 1).length;
    const ranked = birthdays
        .map(b => ({ ...b, daysUntil: getDaysUntilNext(b.day, b.month) }))
        .sort((a, b) => a.daysUntil - b.daysUntil);
    const next = ranked[0];
    const nextLabel = !next
        ? 'No upcoming birthdays'
        : next.daysUntil === 0
            ? `${next.name} today`
            : next.daysUntil === 1
                ? `${next.name} tomorrow`
                : `${next.name} in ${next.daysUntil} days`;
    el.innerHTML = `
        <span>${birthdays.length} people</span>
        <span>${thisMonth} this month</span>
        <span>Next: ${nextLabel}</span>
    `;
}

function matchesQuery(person, query) {
    const hay = [person.name, person.nickname, person.note, monthNames[person.month - 1], getZodiac(person.day, person.month)]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
    return hay.includes(query);
}

function renderSearch(query) {
    const section = document.getElementById('search-section');
    const list = document.getElementById('search-results');
    const upcoming = document.getElementById('upcoming-section');
    const calendar = document.querySelector('.all-months-section');
    const q = query.trim().toLowerCase();

    if (!q) {
        section.classList.add('hidden');
        upcoming.classList.remove('hidden');
        calendar.classList.remove('hidden');
        list.innerHTML = '';
        return;
    }

    upcoming.classList.add('hidden');
    calendar.classList.add('hidden');
    section.classList.remove('hidden');

    const hits = birthdays
        .filter(p => matchesQuery(p, q))
        .sort((a, b) => getDaysUntilNext(a.day, a.month) - getDaysUntilNext(b.day, b.month));

    list.innerHTML = '';
    if (hits.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'month-empty';
        empty.textContent = `No matches for “${query.trim()}”`;
        list.appendChild(empty);
        return;
    }

    hits.forEach(person => {
        const li = document.createElement('li');
        const daysUntil = getDaysUntilNext(person.day, person.month);
        const isToday = daysUntil === 0;
        li.className = `birthday-item${isToday ? ' birthday-today' : ''}`;
        li.innerHTML = `
            <span class="birthday-person">
                ${avatarHTML(person, 'avatar-sm')}
                <span class="person-text">
                    <span class="name">${isToday ? '🎂 ' : ''}${displayName(person)}</span>
                    <span class="person-note">${personMeta(person, { includeDaysUntil: true })}</span>
                </span>
            </span>
            <span class="item-actions">
                <button class="cal-btn" title="Add ${person.name}'s birthday to calendar">📅</button>
            </span>
        `;
        li.querySelector('.cal-btn').addEventListener('click', (e) => {
            e.preventDefault();
            addToCalendar(person);
        });
        list.appendChild(li);
    });
}

function launchConfetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.createElement('div');
    root.className = 'confetti-root';
    root.setAttribute('aria-hidden', 'true');
    const colors = ['#c8956c', '#bfa67a', '#b87878', '#eaeaef', '#d4a574'];
    for (let i = 0; i < 36; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = colors[i % colors.length];
        piece.style.animationDelay = `${Math.random() * 0.6}s`;
        piece.style.animationDuration = `${1.8 + Math.random()}s`;
        root.appendChild(piece);
    }
    document.body.appendChild(root);
    setTimeout(() => root.remove(), 3200);
}

function bindToolbar() {
    document.getElementById('add-year-cal').addEventListener('click', () => {
        downloadICS('all_birthdays.ics', generateMultiICS(birthdays));
    });
    document.getElementById('birthday-search').addEventListener('input', (e) => {
        renderSearch(e.target.value);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderTodayBanner();
    renderUpcoming();
    renderMonths();
    bindToolbar();
});
