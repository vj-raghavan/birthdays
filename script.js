const birthdays = [
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
    
    { name: "shalini vikram", day: 1, month: 7 },
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
    { name: "Pavithra dinesh", day: 13, month: 11 },
    { name: "Anadavalli", day: 13, month: 11 },
    { name: "M.Vinoth", day: 13, month: 11 },
    { name: "Sathya", day: 14, month: 11 },
    { name: "Sowmya", day: 16, month: 11 },
    { name: "chitra", day: 19, month: 11 },
    { name: "Vijaya ragavan", day: 26, month: 11 },
    
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

    const names = todayPeople.map(p => `<span class="today-name">${p.name}</span>`).join(', ');
    const label = todayPeople.length === 1 ? 'birthday' : 'birthdays';

    banner.innerHTML = `
        <div class="today-banner-icon">🎂</div>
        <div class="today-banner-content">
            <h3>Today's ${label}!</h3>
            <p>Wish ${names} a happy birthday — ${formatDate(todayPeople[0].day, todayPeople[0].month)}</p>
        </div>
    `;

    section.insertBefore(banner, section.firstChild.nextSibling);
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
        
        card.innerHTML = `
            <div class="date-badge${isToday ? ' badge-today' : ''}">${badgeText}</div>
            <h3>${person.name}</h3>
            <p>${formatDate(person.day, person.month)}</p>
        `;
        
        container.appendChild(card);
    });
}

// Render All Months
function renderMonths() {
    const container = document.getElementById('months-grid');
    
    // Group by month
    const grouped = {};
    for (let i = 1; i <= 12; i++) {
        grouped[i] = [];
    }
    
    birthdays.forEach(person => {
        grouped[person.month].push(person);
    });
    
    // Create cards for each month
    for (let month = 1; month <= 12; month++) {
        const monthBirthdays = grouped[month];
        
        // Skip months with no birthdays just in case, although here all have them
        if (monthBirthdays.length === 0) continue;
        
        // Sort by day inside month
        monthBirthdays.sort((a, b) => a.day - b.day);
        
        const card = document.createElement('div');
        card.className = 'glass-card month-card fade-in-up';
        card.style.animationDelay = `${month * 0.05}s`;
        
        const header = document.createElement('div');
        header.className = 'month-header';
        header.innerHTML = `
            <h3>${monthNames[month - 1]}</h3>
            <span class="count">${monthBirthdays.length}</span>
        `;
        card.appendChild(header);
        
        const list = document.createElement('ul');
        list.className = 'birthday-list';
        
        monthBirthdays.forEach(person => {
            const li = document.createElement('li');
            
            // Check if it's today
            const today = new Date();
            const isToday = today.getDate() === person.day && (today.getMonth() + 1) === person.month;
            
            li.className = `birthday-item${isToday ? ' birthday-today' : ''}`;
            
            li.innerHTML = `
                <span class="name">${isToday ? '🎂 ' : ''}${person.name}</span>
                <span class="date">${getOrdinalSuffix(person.day)}${isToday ? ' — Today!' : ''}</span>
            `;
            
            list.appendChild(li);
        });
        
        card.appendChild(list);
        container.appendChild(card);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTodayBanner();
    renderUpcoming();
    renderMonths();
});
