// ================================================================
// Language System
// ================================================================
let currentLang = localStorage.getItem('lang') || 'bn';

const i18n = {
    en: {},
    bn: {
        'Smart City': 'স্মার্ট সিটি',
        'Management Platform': 'ম্যানেজমেন্ট প্ল্যাটফর্ম',
        'Email': 'ইমেইল',
        'Password': 'পাসওয়ার্ড',
        'Login': 'লগইন',
        "Don't have an account?": 'অ্যাকাউন্ট নেই?',
        'Register now': 'এখনই নিবন্ধন করুন',
        'Full Name': 'পুরো নাম',
        'Confirm Password': 'পাসওয়ার্ড নিশ্চিত করুন',
        'Register as': 'নিবন্ধন করুন',
        'Citizen': 'নাগরিক',
        'Business': 'ব্যবসা',
        'Admin': 'অ্যাডমিন',
        'Register': 'নিবন্ধন',
        'Already have an account?': 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
        'Dashboard': 'ড্যাশবোর্ড',
        'Healthcare': 'স্বাস্থ্যসেবা',
        'Education': 'শিক্ষা',
        'Transportation': 'পরিবহন',
        'Real Estate': 'রিয়েল এস্টেট',
        'E-Commerce': 'ই-কমার্স',
        'Courier': 'কুরিয়ার',
        'Payments': 'পেমেন্ট',
        'Parking': 'পার্কিং',
        'Emergency': 'জরুরি',
        'Complaints': 'অভিযোগ',
        'Booking': 'বুকিং',
        'Documents': 'নথিপত্র',
        'Notifications': 'বিজ্ঞপ্তি',
        'Chat': 'চ্যাট',
        'Smart Map': 'স্মার্ট ম্যাপ',
        'Finance': 'আর্থিক',
        'Registration': 'নিবন্ধন',
        'Profile': 'প্রোফাইল',
        'Products': 'পণ্য',
        'Orders': 'অর্ডার',
        'Delivery': 'ডেলিভারি',
        'Customers': 'গ্রাহক',
        'Sales Analytics': 'বিক্রয় বিশ্লেষণ',
        'User Management': 'ব্যবহারকারী ব্যবস্থাপনা',
        'Business Management': 'ব্যবসা ব্যবস্থাপনা',
        'Analytics': 'বিশ্লেষণ',
        'System Settings': 'সিস্টেম সেটিংস',
        'Logout': 'লগআউট',
        'Citizen Portal': 'নাগরিক পোর্টাল',
        'Business Portal': 'ব্যবসা পোর্টাল',
        'Admin Portal': 'অ্যাডমিন পোর্টাল',
        'Overview': 'ওভারভিউ',
        'Search...': 'অনুসন্ধান...',
        'Hospital': 'হাসপাতাল',
        'Doctor': 'ডাক্তার',
        'Speciality': 'বিশেষত্ব',
        'Available': 'উপলব্ধ',
        'Actions': 'অ্যাকশন',
        'Institution': 'প্রতিষ্ঠান',
        'Type': 'ধরন',
        'Location': 'অবস্থান',
        'Courses': 'কোর্স',
        'Route': 'রুট',
        'Departure': 'প্রস্থান',
        'Arrival': 'আগমন',
        'Fare': 'ভাড়া',
        'Property': 'সম্পত্তি',
        'Price': 'মূল্য',
        'Status': 'অবস্থা',
        'Product': 'পণ্য',
        'Category': 'ক্যাটাগরি',
        'Stock': 'স্টক',
        'Parcel ID': 'পার্সেল আইডি',
        'Sender': 'প্রেরক',
        'Receiver': 'প্রাপক',
        'Bill #': 'বিল নং',
        'Amount': 'পরিমাণ',
        'Date': 'তারিখ',
        'Slot': 'স্লট',
        'Fee': 'ফি',
        'User': 'ব্যবহারকারী',
        'Role': 'ভূমিকা',
        'Owner': 'মালিক',
        'Name': 'নাম',
        'Joined': 'যোগদান',
        'Book Appointment': 'অ্যাপয়েন্টমেন্ট বুক করুন',
        'Apply Online': 'অনলাইনে আবেদন করুন',
        'Book Ride': 'যাত্রা বুক করুন',
        'List Property': 'সম্পত্তি তালিকাভুক্ত করুন',
        'Add Product': 'পণ্য যোগ করুন',
        'Book Parcel': 'পার্সেল বুক করুন',
        'Make Payment': 'পেমেন্ট করুন',
        'Book Slot': 'স্লট বুক করুন',
        'Emergency Services': 'জরুরি সেবা',
        'Request Ambulance': 'অ্যাম্বুলেন্স অনুরোধ করুন',
        'New Complaint': 'নতুন অভিযোগ',
        'New Booking': 'নতুন বুকিং',
        'Upload Document': 'নথি আপলোড করুন',
        'Mark all read': 'সব পঠিত চিহ্নিত করুন',
        'Recent Complaints': 'সাম্প্রতিক অভিযোগ',
        'Upcoming Appointments': 'আসন্ন অ্যাপয়েন্টমেন্ট',
        'Last 5': 'শেষ ৫টি',
        'Next 3': 'পরবর্তী ৩টি',
        'Recent Orders': 'সাম্প্রতিক অর্ডার',
        'Top Products': 'শীর্ষ পণ্য',
        'Total Users': 'মোট ব্যবহারকারী',
        'Service Usage': 'সেবা ব্যবহার',
        'Citizens': 'নাগরিক',
        'Hospitals': 'হাসপাতাল',
        'Transport Routes': 'পরিবহন রুট',
        'Revenue': 'রাজস্ব',
        'Deliveries': 'ডেলিভারি',
        'Other': 'অন্যান্য',
        'User Growth': 'ব্যবহারকারী বৃদ্ধি',
        'Complaint Statistics': 'অভিযোগ পরিসংখ্যান',
        'Submitted': 'জমা দেওয়া',
        'Under Review': 'পর্যালোচনায়',
        'Assigned': 'নিযুক্ত',
        'Processing': 'প্রক্রিয়াধীন',
        'Resolved': 'সমাধান',
        'Pending': 'অপেক্ষমাণ',
        'Active': 'সক্রিয়',
        'Inactive': 'নিষ্ক্রিয়',
        'Paid': 'পরিশোধিত',
        'Delivered': 'ডেলিভারি সম্পন্ন',
        'In Transit': 'পথে',
        'Confirmed': 'নিশ্চিত',
        'Completed': 'সম্পন্ন',
        'Verified': 'যাচাইকৃত',
        'Call Now': 'এখনই কল করুন',
        'Report': 'রিপোর্ট',
        'Call': 'কল করুন',
        'Ambulance': 'অ্যাম্বুলেন্স',
        'Police': 'পুলিশ',
        'Fire Service': 'ফায়ার সার্ভিস',
        'Report an incident': 'ঘটনা রিপোর্ট করুন',
        'Fire & rescue': 'অগ্নি ও উদ্ধার',
        'Send': 'পাঠান',
        'Online': 'অনলাইন',
        'Offline': 'অফলাইন',
        'Support Team': 'সাপোর্ট টিম',
        'Hospital A': 'হাসপাতাল এ',
        'Transport Service': 'পরিবহন সেবা',
        'Interactive Map': 'ইন্টারঅ্যাকটিভ ম্যাপ',
        'Save Settings': 'সেটিংস সংরক্ষণ করুন',
        'Save': 'সংরক্ষণ করুন',
        'Add User': 'ব্যবহারকারী যোগ করুন',
        'City Name': 'শহরের নাম',
        'Timezone': 'টাইমজোন',
        'Currency': 'মুদ্রা',
        'Description': 'বিবরণ',
        'Service': 'সেবা',
        'Emergency #': 'জরুরি নং',
        'Booking #': 'বুকিং নং',
        'Document': 'নথি',
        'Uploaded': 'আপলোড',
        'Message': 'বার্তা',
        'Time': 'সময়',
        'Field 1': 'ফিল্ড ১',
        'Field 2': 'ফিল্ড ২',
        'Priority': 'অগ্রাধিকার',
        'Low': 'কম',
        'Medium': 'মাঝারি',
        'High': 'উচ্চ',
        'Password must be at least 1 character.': 'পাসওয়ার্ড কমপক্ষে ১ অক্ষরের হতে হবে।',
        'Unread': 'অপঠিত',
        'Info': 'তথ্য',
        'Success': 'সফল',
        'Alert': 'সতর্কতা',
        'For Sale': 'বিক্রয়ের জন্য',
        'For Rent': 'ভাড়ার জন্য',
        'Yes': 'হ্যাঁ',
        'No': 'না',
        'occupied': 'অধিকৃত',
        'available': 'উপলব্ধ',
        'Show': 'দেখান',
        'Hide': 'লুকান',
        'Add Hospital': 'হাসপাতাল যোগ করুন',
        'Add Institution': 'প্রতিষ্ঠান যোগ করুন',
        'Add Route': 'রুট যোগ করুন',
        'Add Property': 'সম্পত্তি যোগ করুন',
        'Add Parcel': 'পার্সেল যোগ করুন',
        'Add Payment': 'পেমেন্ট যোগ করুন',
        'Add Slot': 'স্লট যোগ করুন',
        'Add Emergency': 'জরুরি যোগ করুন',
        'Add Complaint': 'অভিযোগ যোগ করুন',
        'Add Booking': 'বুকিং যোগ করুন',
        'Register Business': 'ব্যবসা নিবন্ধন করুন',
        'Add Business': 'ব্যবসা যোগ করুন',
        'Healthcare Management': 'স্বাস্থ্যসেবা ব্যবস্থাপনা',
        'Education Management': 'শিক্ষা ব্যবস্থাপনা',
        'Transport Management': 'পরিবহন ব্যবস্থাপনা',
        'Property Management': 'সম্পত্তি ব্যবস্থাপনা',
        'E-Commerce Management': 'ই-কমার্স ব্যবস্থাপনা',
        'Courier Management': 'কুরিয়ার ব্যবস্থাপনা',
        'Payment Management': 'পেমেন্ট ব্যবস্থাপনা',
        'Parking Management': 'পার্কিং ব্যবস্থাপনা',
        'Emergency Management': 'জরুরি ব্যবস্থাপনা',
        'Complaint Management': 'অভিযোগ ব্যবস্থাপনা',
        'Booking Management': 'বুকিং ব্যবস্থাপনা',
        'Chat Management': 'চ্যাট ব্যবস্থাপনা',
        'Document Management': 'নথি ব্যবস্থাপনা',
        'Wallet': 'ওয়ালেট',
        'Balance': 'বর্তমান ব্যালেন্স',
        'Recent Transactions': 'সাম্প্রতিক লেনদেন',
        'Business Name': 'ব্যবসার নাম',
        'Update Profile': 'প্রোফাইল আপডেট করুন',
        'Total': 'মোট',
        'Invoice': 'ইনভয়েস',
        'Address': 'ঠিকানা',
        'New Delivery': 'নতুন ডেলিভারি',
        'Revenue Trend': 'রাজস্ব প্রবণতা',
        'Top Categories': 'শীর্ষ ক্যাটাগরি',
        'Add Product': 'পণ্য যোগ করুন',
        'Update Wallet': 'ওয়ালেট আপডেট করুন',
        'Add Transaction': 'লেনদেন যোগ করুন',
        'New Balance': 'নতুন ব্যালেন্স',
        'Wallet updated!': 'ওয়ালেট আপডেট হয়েছে!',
        'Transaction added!': 'লেনদেন যুক্ত হয়েছে!',
        'Please enter a valid positive number.': 'দয়া করে একটি বৈধ ধনাত্মক সংখ্যা দিন।',
        'Please fill description and amount.': 'দয়া করে বিবরণ ও পরিমাণ পূরণ করুন।',
        'Amount must start with + or - (e.g., +5000 or -2000)': 'পরিমাণ + বা - দিয়ে শুরু করুন (যেমন: +5000 বা -2000)',
        'Choose Dashboard': 'ড্যাশবোর্ড নির্বাচন করুন',
        'Select a role to continue': 'চালিয়ে যেতে একটি ভূমিকা নির্বাচন করুন',
        'Citizen Dashboard': 'নাগরিক ড্যাশবোর্ড',
        'Business Dashboard': 'ব্যবসা ড্যাশবোর্ড',
        'Admin Dashboard': 'অ্যাডমিন ড্যাশবোর্ড',
        'Back': 'পেছনে',
        'Light Mode': 'লাইট মোড',
        'Dark Mode': 'ডার্ক মোড',
        'No transactions yet. Add your first transaction!': 'এখনও কোনো লেনদেন নেই। আপনার প্রথম লেনদেন যোগ করুন!',
        'Transaction deleted!': 'লেনদেন মুছে ফেলা হয়েছে!',
        'All transactions cleared!': 'সব লেনদেন মুছে ফেলা হয়েছে!',
        'No transactions to clear.': 'মুছে ফেলার মতো কোনো লেনদেন নেই।',
        'Are you sure you want to delete this transaction?': 'আপনি কি এই লেনদেনটি মুছে ফেলতে চান?',
        'Are you sure you want to delete all transactions? This action cannot be undone!': 'আপনি কি সব লেনদেন মুছে ফেলতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না!',
        'Transaction Date': 'লেনদেনের তারিখ'
    }
};

function t(text) {
    if (!text) return text;
    if (currentLang === 'en') return text;
    return i18n.bn[text] || text;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = currentLang === 'bn' ? 'বাং' : 'EN';
    const langLabelRole = document.getElementById('langLabelRole');
    if (langLabelRole) langLabelRole.textContent = currentLang === 'bn' ? 'বাং' : 'EN';
    document.documentElement.lang = currentLang;
    if (modalContext.type) updateModalLabels(modalContext.type);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    if (currentModule && renderMap[currentModule]) renderMap[currentModule]();
    if (currentModule === 'citizen-dashboard') renderCitizenDashboard();
    if (currentModule === 'business-dashboard') renderBusinessDashboard();
    if (currentModule === 'admin-dashboard') renderAdminDashboard();
    const title = document.getElementById('pageTitle');
    if (title) {
        const label = moduleMap[currentModule] || currentModule;
        title.innerHTML = `${t(label)} <small>${t('Overview')}</small>`;
    }
}

// Language toggle for both places
document.querySelectorAll('.lang-toggle, #langToggleRole').forEach(el => {
    if (el) {
        el.addEventListener('click', () => {
            setLanguage(currentLang === 'bn' ? 'en' : 'bn');
        });
    }
});

// ================================================================
// Password Show/Hide Toggle
// ================================================================
function togglePasswordVisibility(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        iconElement.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        input.type = 'password';
        iconElement.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// ================================================================
// Auth System
// ================================================================
function getUsers() {
    try {
        const data = localStorage.getItem('smartcity_users');
        return data ? JSON.parse(data) : [];
    } catch { return []; }
}

function saveUsers(users) {
    localStorage.setItem('smartcity_users', JSON.stringify(users));
}

function seedDefaultAdmin() {
    const users = getUsers();
    const exists = users.some(u => u.email === 'admin@smartcity.com');
    if (!exists) {
        users.push({
            id: Date.now() + 1,
            name: 'Admin User',
            email: 'admin@smartcity.com',
            password: 'admin123',
            role: 'admin',
            status: 'active',
            created: new Date().toISOString()
        });
        saveUsers(users);
        console.log('✅ Default admin created: admin@smartcity.com / admin123');
    }
}

let currentUser = null;

function getSession() {
    try {
        const data = localStorage.getItem('smartcity_session');
        return data ? JSON.parse(data) : null;
    } catch { return null; }
}

function setSession(user) {
    localStorage.setItem('smartcity_session', JSON.stringify(user));
    currentUser = user;
}

function clearSession() {
    localStorage.removeItem('smartcity_session');
    currentUser = null;
}

function initAuth() {
    seedDefaultAdmin();
    const session = getSession();
    if (session) {
        const users = getUsers();
        const user = users.find(u => u.email === session.email && u.password === session.password);
        if (user && user.status === 'active') {
            currentUser = user;
            showApp();
            return;
        } else {
            clearSession();
        }
    }
    showAuth();
}

function showAuth() {
    const overlay = document.getElementById('authOverlay');
    if (overlay) overlay.classList.remove('hidden');
    const app = document.getElementById('appContainer');
    if (app) {
        app.classList.remove('show');
        app.style.display = 'none';
    }
    const roleSel = document.getElementById('roleSelection');
    if (roleSel) roleSel.style.display = 'none';
    applyTranslations();
}

function showApp() {
    const overlay = document.getElementById('authOverlay');
    if (overlay) overlay.classList.add('hidden');
    const app = document.getElementById('appContainer');
    if (app) {
        app.style.display = 'flex';
        app.classList.add('show');
    }
    const roleSel = document.getElementById('roleSelection');
    if (roleSel) roleSel.style.display = 'none';
    if (currentUser) {
        const sidebarName = document.getElementById('sidebarName');
        if (sidebarName) sidebarName.textContent = currentUser.name || 'User';
        const sidebarRole = document.getElementById('sidebarRole');
        if (sidebarRole) sidebarRole.textContent = currentUser.role === 'admin' ? 'Admin' : 'User';
        const avatar = document.getElementById('sidebarAvatar');
        if (avatar) avatar.textContent = (currentUser.name || 'U')[0].toUpperCase();
        document.querySelectorAll('.role-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.role === currentUser.role);
        });
        setRole(currentUser.role);
    }
    initDataAndRender();
    applyTranslations();
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    const err = document.getElementById('authError');
    if (err) err.classList.remove('show');
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    const err = document.getElementById('authError');
    if (err) err.classList.remove('show');
}

const roleSelect = document.getElementById('roleSelect');
if (roleSelect) {
    roleSelect.querySelectorAll('.role-option').forEach(opt => {
        opt.addEventListener('click', function() {
            roleSelect.querySelectorAll('.role-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorEl = document.getElementById('authError');
    if (!email || !password) {
        errorEl.textContent = t('Please fill in all fields.');
        errorEl.classList.add('show');
        return;
    }
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        errorEl.textContent = t('Invalid email or password.');
        errorEl.classList.add('show');
        return;
    }
    if (user.status !== 'active') {
        errorEl.textContent = t('Your account is inactive. Contact admin.');
        errorEl.classList.add('show');
        return;
    }
    setSession(user);
    currentUser = user;
    errorEl.classList.remove('show');
    showApp();
}

function handleRegister() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const confirm = document.getElementById('regConfirm').value.trim();
    const errorEl = document.getElementById('authError');
    const role = document.querySelector('#roleSelect .role-option.active')?.dataset?.role || 'citizen';

    if (!name || !email || !password || !confirm) {
        errorEl.textContent = t('Please fill in all fields.');
        errorEl.classList.add('show');
        return;
    }
    if (password.length < 1) {
        errorEl.textContent = t('Password must be at least 1 character.');
        errorEl.classList.add('show');
        return;
    }
    if (password !== confirm) {
        errorEl.textContent = t('Passwords do not match.');
        errorEl.classList.add('show');
        return;
    }
    const users = getUsers();
    if (users.some(u => u.email === email)) {
        errorEl.textContent = t('Email already registered. Please login.');
        errorEl.classList.add('show');
        return;
    }
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        role: role,
        status: 'active',
        created: new Date().toISOString()
    };
    users.push(newUser);
    saveUsers(users);
    setSession(newUser);
    currentUser = newUser;
    errorEl.classList.remove('show');
    showApp();
}

function handleLogout() {
    clearSession();
    showAuth();
    showLogin();
}

// ================================================================
// Role Selection
// ================================================================
function showRoleSelection() {
    const roleSel = document.getElementById('roleSelection');
    if (roleSel) roleSel.style.display = 'flex';
    const app = document.getElementById('appContainer');
    if (app) {
        app.style.display = 'none';
        app.classList.remove('show');
    }
}

function selectDashboardRole(role) {
    if (currentUser) {
        currentUser.role = role;
        setSession(currentUser);
        showApp();
    } else {
        showAuth();
    }
}

// ================================================================
// Data Store
// ================================================================
let nextId = 1000;
function loadData(key, defaults) {
    try {
        const data = localStorage.getItem('smartcity_' + key);
        return data ? JSON.parse(data) : defaults;
    } catch { return defaults; }
}
function saveData(key, data) {
    localStorage.setItem('smartcity_' + key, JSON.stringify(data));
}

let healthcareData = loadData('healthcare', [
    { id: 1, hospital: 'City General', doctor: 'Dr. Rahman', speciality: 'Cardiology', available: 'Yes' },
    { id: 2, hospital: 'Apollo Hospital', doctor: 'Dr. Khan', speciality: 'Neurology', available: 'No' },
    { id: 3, hospital: 'Dhaka Medical', doctor: 'Dr. Sultana', speciality: 'Pediatrics', available: 'Yes' },
]);
let educationData = loadData('education', [
    { id: 1, name: 'Dhaka University', type: 'University', location: 'Dhaka', courses: '50+' },
    { id: 2, name: 'Notre Dame College', type: 'College', location: 'Dhaka', courses: '20+' },
    { id: 3, name: 'Ideal School', type: 'School', location: 'Chittagong', courses: 'N/A' },
]);
let transportData = loadData('transport', [
    { id: 1, route: 'Dhaka - Chittagong', type: 'Bus', departure: '08:00', arrival: '14:00', fare: '500' },
    { id: 2, route: 'Dhaka - Sylhet', type: 'Train', departure: '10:30', arrival: '17:00', fare: '650' },
    { id: 3, route: 'Airport - City Center', type: 'Taxi', departure: 'On Demand', arrival: 'Flexible', fare: '300' },
]);
let realestateData = loadData('realestate', [
    { id: 1, property: 'Green Villa', type: 'House', location: 'Uttara', price: '৳85L', status: 'For Sale' },
    { id: 2, property: 'Lake View Apartment', type: 'Flat', location: 'Gulshan', price: '৳45L', status: 'For Rent' },
    { id: 3, property: 'Commercial Plot', type: 'Land', location: 'Mirpur', price: '৳1.2Cr', status: 'For Sale' },
]);
let ecommerceData = loadData('ecommerce', [
    { id: 1, product: 'Smartphone', category: 'Electronics', price: '৳25,000', stock: '50' },
    { id: 2, product: 'Laptop', category: 'Electronics', price: '৳55,000', stock: '30' },
    { id: 3, product: 'T-Shirt', category: 'Clothing', price: '৳600', stock: '200' },
]);
let courierData = loadData('courier', [
    { id: 1, parcel: 'PK-001', sender: 'A. Rahman', receiver: 'S. Ahmed', status: 'In Transit' },
    { id: 2, parcel: 'PK-002', sender: 'M. Ali', receiver: 'F. Khan', status: 'Delivered' },
    { id: 3, parcel: 'PK-003', sender: 'N. Sultana', receiver: 'R. Hasan', status: 'Pending' },
]);
let paymentData = loadData('payment', [
    { id: 1, bill: 'BILL-001', type: 'Utility', amount: '৳2,500', date: '2026-08-28', status: 'Paid' },
    { id: 2, bill: 'BILL-002', type: 'Tax', amount: '৳5,000', date: '2026-08-27', status: 'Pending' },
    { id: 3, bill: 'BILL-003', type: 'Parking', amount: '৳300', date: '2026-08-26', status: 'Paid' },
]);
let parkingData = loadData('parking', [
    { id: 1, location: 'Gulshan 1', slot: 'A12', status: 'Available', fee: '৳100/hr' },
    { id: 2, location: 'Mohakhali', slot: 'B5', status: 'Occupied', fee: '৳80/hr' },
    { id: 3, location: 'Uttara', slot: 'C9', status: 'Available', fee: '৳70/hr' },
]);
let complaintData = loadData('complaint', [
    { id: 1, type: 'Road Issue', description: 'Pothole on Main Street', date: '2026-08-30', status: 'Under Review' },
    { id: 2, type: 'Water Problem', description: 'No water supply in sector 3', date: '2026-08-29', status: 'Assigned' },
    { id: 3, type: 'Street Light', description: 'Light not working at corner', date: '2026-08-28', status: 'Resolved' },
]);
let bookingData = loadData('booking', [
    { id: 1, service: 'Doctor Appointment', date: '2026-09-05', status: 'Confirmed' },
    { id: 2, service: 'Transport Ride', date: '2026-09-03', status: 'Pending' },
    { id: 3, service: 'Parking Slot', date: '2026-09-02', status: 'Completed' },
]);
let documentData = loadData('document', [
    { id: 1, name: 'Birth Certificate', type: 'Personal', uploaded: '2026-08-25', status: 'Verified' },
    { id: 2, name: 'Tax Invoice', type: 'Financial', uploaded: '2026-08-20', status: 'Pending' },
    { id: 3, name: 'Property Deed', type: 'Legal', uploaded: '2026-08-15', status: 'Verified' },
]);
let notificationData = loadData('notification', [
    { time: '2026-09-01 10:30', message: 'Your complaint #3 has been resolved.', type: 'Info' },
    { time: '2026-08-31 16:45', message: 'Parking booking confirmed for slot A12.', type: 'Success' },
    { time: '2026-08-31 09:20', message: 'New government notice regarding tax payment.', type: 'Alert' },
]);
let businessData = loadData('business', [
    { id: 1, name: 'Tech Solutions', owner: 'Mr. Karim', type: 'IT', status: 'Active' },
    { id: 2, name: 'City Mart', owner: 'Ms. Akhter', type: 'Retail', status: 'Active' },
    { id: 3, name: 'Green Energy', owner: 'Mr. Rahman', type: 'Energy', status: 'Pending' },
]);
let productData = loadData('product', [
    { id: 1, name: 'Smart TV', price: '৳45,000', stock: '20', status: 'Active' },
    { id: 2, name: 'Headphones', price: '৳2,500', stock: '100', status: 'Active' },
    { id: 3, name: 'Charger', price: '৳800', stock: '50', status: 'Inactive' },
]);
let businessOrderData = loadData('businessOrder', [
    { id: 1, customer: 'Mr. Ali', total: '৳4,500', status: 'Processing' },
    { id: 2, customer: 'Ms. Sultana', total: '৳2,300', status: 'Delivered' },
    { id: 3, customer: 'Mr. Hasan', total: '৳7,200', status: 'Pending' },
]);
let businessBookingData = loadData('businessBooking', [
    { id: 1, service: 'Product Demo', date: '2026-09-06', status: 'Confirmed' },
    { id: 2, service: 'Maintenance', date: '2026-09-04', status: 'Pending' },
]);
let businessPaymentData = loadData('businessPayment', [
    { id: 1, invoice: 'INV-001', amount: '৳12,000', date: '2026-08-30', status: 'Paid' },
    { id: 2, invoice: 'INV-002', amount: '৳5,500', date: '2026-08-28', status: 'Pending' },
]);
let deliveryData = loadData('delivery', [
    { id: 1, order: 'ORD-1001', address: 'Gulshan 2, Dhaka', status: 'In Transit' },
    { id: 2, order: 'ORD-1002', address: 'Uttara, Dhaka', status: 'Delivered' },
    { id: 3, order: 'ORD-1003', address: 'Mohakhali, Dhaka', status: 'Pending' },
]);
let customerData = loadData('customer', [
    { name: 'Mr. Rahman', email: 'rahman@email.com', orders: 5, joined: '2026-01-15' },
    { name: 'Ms. Sultana', email: 'sultana@email.com', orders: 3, joined: '2026-02-10' },
    { name: 'Mr. Hasan', email: 'hasan@email.com', orders: 7, joined: '2026-03-05' },
]);

// ================================================================
// FINANCE DATA
// ================================================================
let financeTransactions = [];
let walletBalance = 0;

function loadFinanceData() {
    const saved = localStorage.getItem('smartcity_finance');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // চেক করুন ডিফল্ট লেনদেন কিনা
            const defaultTransactions = [
                { id: 1, description: 'Utility Bill Payment', amount: '-৳2,500', date: '2026-08-30' },
                { id: 2, description: 'Salary Received', amount: '+৳15,000', date: '2026-08-28' },
                { id: 3, description: 'Parking Fee', amount: '-৳300', date: '2026-08-27' }
            ];
            const isDefault = parsed.length === 3 &&
                parsed.every((tx, index) => 
                    tx.id === defaultTransactions[index].id &&
                    tx.description === defaultTransactions[index].description &&
                    tx.amount === defaultTransactions[index].amount &&
                    tx.date === defaultTransactions[index].date
                );
            if (isDefault) {
                financeTransactions = [];
                saveData('finance', financeTransactions);
            } else {
                financeTransactions = parsed;
            }
        } catch(e) {
            financeTransactions = [];
        }
    } else {
        financeTransactions = [];
    }
    walletBalance = loadData('wallet', 0);
}
loadFinanceData();

// ================================================================
// Render Functions
// ================================================================
function renderHealthcare() {
    const tbody = document.getElementById('healthcareTableBody') || document.getElementById('adminHealthcareTableBody');
    if (!tbody) return;
    tbody.innerHTML = healthcareData.map(h =>
        `<tr><td>${t(h.hospital)}</td><td>${t(h.doctor)}</td><td>${t(h.speciality)}</td><td><span class="badge-status ${h.available === 'Yes' ? 'active' : 'inactive'}">${t(h.available)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('healthcare',${h.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('healthcare',${h.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderEducation() {
    const tbody = document.getElementById('educationTableBody') || document.getElementById('adminEducationTableBody');
    if (!tbody) return;
    tbody.innerHTML = educationData.map(e =>
        `<tr><td>${t(e.name)}</td><td>${t(e.type)}</td><td>${t(e.location)}</td><td>${e.courses}</td><td><button class="btn btn-primary btn-xs" onclick="openModal('education',${e.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('education',${e.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderTransport() {
    const tbody = document.getElementById('transportTableBody') || document.getElementById('adminTransportTableBody');
    if (!tbody) return;
    tbody.innerHTML = transportData.map(td =>
        `<tr><td>${t(td.route)}</td><td>${t(td.type)}</td><td>${td.departure}</td><td>${td.arrival}</td><td>${td.fare}</td><td><button class="btn btn-primary btn-xs" onclick="openModal('transport',${td.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('transport',${td.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderRealEstate() {
    const tbody = document.getElementById('realestateTableBody') || document.getElementById('adminPropertyTableBody');
    if (!tbody) return;
    tbody.innerHTML = realestateData.map(r =>
        `<tr><td>${t(r.property)}</td><td>${t(r.type)}</td><td>${t(r.location)}</td><td>${r.price}</td><td><span class="badge-status ${r.status.includes('Sale') ? 'active' : 'pending'}">${t(r.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('realestate',${r.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('realestate',${r.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderEcommerce() {
    const tbody = document.getElementById('ecommerceTableBody') || document.getElementById('adminEcommerceTableBody');
    if (!tbody) return;
    tbody.innerHTML = ecommerceData.map(e =>
        `<tr><td>${t(e.product)}</td><td>${t(e.category)}</td><td>${e.price}</td><td>${e.stock}</td><td><button class="btn btn-primary btn-xs" onclick="openModal('ecommerce',${e.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('ecommerce',${e.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderCourier() {
    const tbody = document.getElementById('courierTableBody') || document.getElementById('adminCourierTableBody');
    if (!tbody) return;
    tbody.innerHTML = courierData.map(c =>
        `<tr><td>${c.parcel}</td><td>${t(c.sender)}</td><td>${t(c.receiver)}</td><td><span class="badge-status ${c.status === 'Delivered' ? 'completed' : 'processing'}">${t(c.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('courier',${c.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('courier',${c.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderPayments() {
    const tbody = document.getElementById('paymentTableBody') || document.getElementById('adminPaymentTableBody');
    if (!tbody) return;
    tbody.innerHTML = paymentData.map(p =>
        `<tr><td>${p.bill}</td><td>${t(p.type)}</td><td>${p.amount}</td><td>${p.date}</td><td><span class="badge-status ${p.status === 'Paid' ? 'completed' : 'pending'}">${t(p.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('payment',${p.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('payment',${p.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderParking() {
    const tbody = document.getElementById('parkingTableBody') || document.getElementById('adminParkingTableBody');
    if (!tbody) return;
    tbody.innerHTML = parkingData.map(p =>
        `<tr><td>${t(p.location)}</td><td>${p.slot}</td><td><span class="badge-status ${p.status === 'Available' ? 'active' : 'inactive'}">${t(p.status)}</span></td><td>${p.fee}</td><td><button class="btn btn-primary btn-xs" onclick="openModal('parking',${p.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('parking',${p.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderComplaints() {
    const tbody = document.getElementById('complaintTableBody') || document.getElementById('adminComplaintTableBody');
    if (!tbody) return;
    tbody.innerHTML = complaintData.map(c =>
        `<tr><td>#${c.id}</td><td>${t(c.type)}</td><td>${t(c.description)}</td><td>${c.date}</td><td><span class="badge-status ${c.status.replace(' ', '-').toLowerCase()}">${t(c.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('complaint',${c.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('complaint',${c.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderBooking() {
    const tbody = document.getElementById('bookingTableBody') || document.getElementById('adminBookingTableBody');
    if (!tbody) return;
    tbody.innerHTML = bookingData.map(b =>
        `<tr><td>#${b.id}</td><td>${t(b.service)}</td><td>${b.date}</td><td><span class="badge-status ${b.status.toLowerCase()}">${t(b.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('booking',${b.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('booking',${b.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderDocuments() {
    const tbody = document.getElementById('documentTableBody') || document.getElementById('adminDocumentTableBody');
    if (!tbody) return;
    tbody.innerHTML = documentData.map(d =>
        `<tr><td>${t(d.name)}</td><td>${t(d.type)}</td><td>${d.uploaded}</td><td><span class="badge-status ${d.status === 'Verified' ? 'completed' : 'pending'}">${t(d.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('document',${d.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('document',${d.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderNotifications() {
    const tbody = document.getElementById('notificationTableBody');
    if (!tbody) return;
    tbody.innerHTML = notificationData.map(n =>
        `<tr><td>${n.time}</td><td>${t(n.message)}</td><td><span class="badge-status ${n.type === 'Alert' ? 'pending' : 'active'}">${t(n.type)}</span></td><td><span class="badge-status active">${t('Unread')}</span></td></tr>`
    ).join('');
}

function renderAdminNotifications() {
    const tbody = document.getElementById('adminNotificationTableBody');
    if (!tbody) return;
    tbody.innerHTML = notificationData.map(n =>
        `<tr><td>${n.time}</td><td>${t(n.message)}</td><td><span class="badge-status ${n.type === 'Alert' ? 'pending' : 'active'}">${t(n.type)}</span></td></tr>`
    ).join('');
}

function renderBusinessNotifications() {
    const tbody = document.getElementById('businessNotificationTableBody');
    if (!tbody) return;
    tbody.innerHTML = notificationData.slice(0, 3).map(n =>
        `<tr><td>${n.time}</td><td>${t(n.message)}</td><td><span class="badge-status ${n.type === 'Alert' ? 'pending' : 'active'}">${t(n.type)}</span></td></tr>`
    ).join('');
}

// ================================================================
// FINANCE RENDER - ডিলিট বাটন সহ
// ================================================================
function renderFinance() {
    // ডেটা রিলোড করুন
    loadFinanceData();
    
    const balanceEl = document.getElementById('walletBalance');
    if (balanceEl) balanceEl.textContent = '৳' + walletBalance.toLocaleString();
    
    const div = document.getElementById('financeTransactions');
    if (!div) return;
    if (financeTransactions.length === 0) {
        div.innerHTML = `<div class="text-muted" style="text-align:center;padding:20px;">${t('No transactions yet. Add your first transaction!')}</div>`;
    } else {
        div.innerHTML = financeTransactions.slice(0, 10).map(tx =>
            `<div class="list-item">
                <span style="flex:1;">${t(tx.description)}</span>
                <span style="font-weight:600;color:${tx.amount.startsWith('+') ? 'var(--success)' : 'var(--danger)'};">${tx.amount}</span>
                <span class="text-muted" style="font-size:12px;margin:0 10px;">${tx.date}</span>
                <button class="btn btn-danger btn-xs" onclick="window.deleteTransaction(${tx.id})" title="${t('Delete')}"><i class="fas fa-trash"></i></button>
            </div>`
        ).join('');
    }
}

// ================================================================
// DELETE A SINGLE TRANSACTION
// ================================================================
function deleteTransaction(id) {
    console.log('🗑️ deleteTransaction called with ID:', id);
    console.log('Current transactions:', financeTransactions);
    
    if (!id) {
        console.error('❌ No ID provided');
        return;
    }
    
    // লেনদেন খুঁজে বের করুন
    const txToDelete = financeTransactions.find(tx => tx.id === id);
    if (!txToDelete) {
        console.warn('⚠️ Transaction not found with ID:', id);
        alert('Transaction not found!');
        return;
    }
    
    if (!confirm(t('Are you sure you want to delete this transaction?'))) {
        console.log('❌ Delete cancelled by user');
        return;
    }
    
    // ফিল্টার করে মুছে ফেলুন
    const before = financeTransactions.length;
    financeTransactions = financeTransactions.filter(tx => tx.id !== id);
    
    if (financeTransactions.length === before) {
        console.warn('⚠️ Transaction not found with ID:', id);
        alert('Transaction not found!');
        return;
    }
    
    console.log(`✅ Deleted transaction ID: ${id}. Remaining: ${financeTransactions.length}`);
    saveData('finance', financeTransactions);
    renderFinance();
    alert(t('Transaction deleted!'));
}

// ================================================================
// CLEAR ALL TRANSACTIONS
// ================================================================
function clearAllTransactions() {
    console.log('🧹 clearAllTransactions called');
    console.log('Current transactions count:', financeTransactions.length);
    
    if (financeTransactions.length === 0) {
        alert(t('No transactions to clear.'));
        return;
    }
    
    if (!confirm(t('Are you sure you want to delete all transactions? This action cannot be undone!'))) {
        console.log('❌ Clear all cancelled by user');
        return;
    }
    
    financeTransactions = [];
    saveData('finance', financeTransactions);
    renderFinance();
    console.log('✅ All transactions cleared');
    alert(t('All transactions cleared!'));
}

// ================================================================
// ফাংশনগুলো গ্লোবাল স্কোপে অ্যাসাইন করুন - HTML onclick কাজ করার জন্য
// ================================================================
window.deleteTransaction = deleteTransaction;
window.clearAllTransactions = clearAllTransactions;

function renderEmergency() {
    const tbody = document.getElementById('emergencyTableBody') || document.getElementById('adminEmergencyTableBody');
    if (!tbody) return;
    const data = [
        { id: 1, type: 'Ambulance', location: 'Gulshan', status: 'Dispatched' },
        { id: 2, type: 'Fire', location: 'Mohakhali', status: 'Responded' },
    ];
    tbody.innerHTML = data.map(e =>
        `<tr><td>#${e.id}</td><td>${t(e.type)}</td><td>${t(e.location)}</td><td><span class="badge-status active">${t(e.status)}</span></td><td><button class="btn btn-primary btn-xs"><i class="fas fa-edit"></i></button></td></tr>`
    ).join('');
}

// ================================================================
// USER MANAGEMENT
// ================================================================
function renderUsers() {
    const users = getUsers();
    const tbody = document.getElementById('userTableBody');
    if (!tbody) return;
    tbody.innerHTML = users.map(u => {
        const masked = '••••••••';
        return `<tr>
            <td><span class="avatar-sm" style="background:#8b5cf6;margin-right:8px;">${(u.name||'U')[0]}</span> ${u.name||'User'}</td>
            <td>${u.email}</td>
            <td>
                <span class="pw-text masked" id="pw_${u.id}">${masked}</span>
                <span class="pw-toggle" onclick="togglePw('${u.id}')" title="${t('Show')}"><i class="fas fa-eye"></i></span>
            </td>
            <td>${t(u.role || 'citizen')}</td>
            <td><span class="badge-status ${u.status === 'active' ? 'active' : 'inactive'}">${t(u.status || 'active')}</span></td>
            <td>
                <button class="btn btn-primary btn-xs" onclick="openModal('user',${u.id})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-xs" onclick="deleteUser(${u.id})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    }).join('');
    window._pwStore = {};
    users.forEach(u => { window._pwStore[u.id] = u.password || '••••••••'; });
}

function togglePw(uid) {
    const span = document.getElementById('pw_' + uid);
    if (!span) return;
    const plain = window._pwStore[uid] || '••••••••';
    const isMasked = span.classList.contains('masked');
    if (isMasked) {
        span.textContent = plain;
        span.classList.remove('masked');
        span.classList.add('plain');
    } else {
        span.textContent = '••••••••';
        span.classList.remove('plain');
        span.classList.add('masked');
    }
}

function deleteUser(id) {
    if (!confirm(t('Are you sure you want to delete this user?'))) return;
    let users = getUsers();
    users = users.filter(u => u.id !== id);
    saveUsers(users);
    renderUsers();
    document.getElementById('adminTotalUsers').textContent = users.length;
    if (currentUser && currentUser.id === id) {
        handleLogout();
    }
}

function deleteItem(collection, id) {
    if (!confirm(t('Are you sure?'))) return;
    const collections = {
        healthcare: healthcareData, education: educationData, transport: transportData,
        realestate: realestateData, ecommerce: ecommerceData, courier: courierData,
        payment: paymentData, parking: parkingData, complaint: complaintData,
        booking: bookingData, document: documentData, business: businessData,
        product: productData, businessOrder: businessOrderData,
        businessBooking: businessBookingData, businessPayment: businessPaymentData,
        delivery: deliveryData, customer: customerData
    };
    const col = collections[collection];
    if (!col) return;
    const idx = col.findIndex(i => i.id === id);
    if (idx !== -1) col.splice(idx, 1);
    // রেন্ডার করুন
    if (renderMap[currentModule]) renderMap[currentModule]();
    if (currentModule === 'citizen-dashboard') renderCitizenDashboard();
    if (currentModule === 'business-dashboard') renderBusinessDashboard();
    if (currentModule === 'admin-dashboard') renderAdminDashboard();
    if (currentModule === 'users') renderUsers();
}

function renderBusinesses() {
    const tbody = document.getElementById('businessRegTableBody') || document.getElementById('adminBusinessTableBody');
    if (!tbody) return;
    tbody.innerHTML = businessData.map(b =>
        `<tr><td>${t(b.name)}</td><td>${t(b.owner)}</td><td>${t(b.type)}</td><td><span class="badge-status ${b.status.toLowerCase()}">${t(b.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('business',${b.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('business',${b.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderProducts() {
    const tbody = document.getElementById('productTableBody');
    if (!tbody) return;
    tbody.innerHTML = productData.map(p =>
        `<tr><td>${t(p.name)}</td><td>${p.price}</td><td>${p.stock}</td><td><span class="badge-status ${p.status.toLowerCase()}">${t(p.status)}</span></td><td><button class="btn btn-primary btn-xs" onclick="openModal('product',${p.id})"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('product',${p.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderBusinessOrders() {
    const tbody = document.getElementById('businessOrderTableBody');
    if (!tbody) return;
    tbody.innerHTML = businessOrderData.map(o =>
        `<tr><td>#${o.id}</td><td>${t(o.customer)}</td><td>${o.total}</td><td><span class="badge-status ${o.status.toLowerCase()}">${t(o.status)}</span></td><td><button class="btn btn-primary btn-xs"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('businessOrder',${o.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderBusinessBooking() {
    const tbody = document.getElementById('businessBookingTableBody');
    if (!tbody) return;
    tbody.innerHTML = businessBookingData.map(b =>
        `<tr><td>#${b.id}</td><td>${t(b.service)}</td><td>${b.date}</td><td><span class="badge-status ${b.status.toLowerCase()}">${t(b.status)}</span></td><td><button class="btn btn-primary btn-xs"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('businessBooking',${b.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderBusinessPayments() {
    const tbody = document.getElementById('businessPaymentTableBody');
    if (!tbody) return;
    tbody.innerHTML = businessPaymentData.map(p =>
        `<tr><td>${p.invoice}</td><td>${p.amount}</td><td>${p.date}</td><td><span class="badge-status ${p.status.toLowerCase()}">${t(p.status)}</span></td><td><button class="btn btn-primary btn-xs"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('businessPayment',${p.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderDelivery() {
    const tbody = document.getElementById('deliveryTableBody');
    if (!tbody) return;
    tbody.innerHTML = deliveryData.map(d =>
        `<tr><td>#${d.id}</td><td>${d.order}</td><td>${t(d.address)}</td><td><span class="badge-status ${d.status === 'Delivered' ? 'completed' : 'processing'}">${t(d.status)}</span></td><td><button class="btn btn-primary btn-xs"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('delivery',${d.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderCustomers() {
    const tbody = document.getElementById('customerTableBody');
    if (!tbody) return;
    tbody.innerHTML = customerData.map(c =>
        `<tr><td>${t(c.name)}</td><td>${c.email}</td><td>${c.orders}</td><td>${c.joined}</td><td><button class="btn btn-primary btn-xs"><i class="fas fa-edit"></i></button> <button class="btn btn-danger btn-xs" onclick="deleteItem('customer',${c.id})"><i class="fas fa-trash"></i></button></td></tr>`
    ).join('');
}

function renderCitizenDashboard() {
    const recent = document.getElementById('citizenRecentComplaints');
    if (recent) {
        recent.innerHTML = complaintData.slice(0, 5).map(c =>
            `<div class="list-item"><span><strong>${t(c.type)}</strong> <span class="text-muted">${c.date}</span></span><span class="badge-status ${c.status.replace(' ', '-').toLowerCase()}">${t(c.status)}</span></div>`
        ).join('');
    }
    const apps = document.getElementById('citizenAppointments');
    if (apps) {
        apps.innerHTML = [
            { doctor: 'Dr. Rahman', date: '2026-09-05 10:00' },
            { doctor: 'Dr. Khan', date: '2026-09-06 14:30' },
            { doctor: 'Dr. Sultana', date: '2026-09-07 09:15' }
        ].map(a =>
            `<div class="list-item"><span><i class="fas fa-user-md" style="color:var(--accent);"></i> ${t(a.doctor)}</span><span class="text-muted">${a.date}</span></div>`
        ).join('');
    }
}

function renderBusinessDashboard() {
    const recent = document.getElementById('businessRecentOrders');
    if (recent) {
        recent.innerHTML = businessOrderData.slice(0, 5).map(o =>
            `<div class="list-item"><span><strong>${t(o.customer)}</strong> <span class="text-muted">${o.total}</span></span><span class="badge-status ${o.status.toLowerCase()}">${t(o.status)}</span></div>`
        ).join('');
    }
    const top = document.getElementById('businessTopProducts');
    if (top) {
        top.innerHTML = productData.slice(0, 5).map(p =>
            `<div class="list-item"><span>${t(p.name)}</span><span>${p.stock} sold</span></div>`
        ).join('');
    }
}

function renderAdminDashboard() {
    const recent = document.getElementById('adminRecentComplaints');
    if (recent) {
        recent.innerHTML = complaintData.slice(0, 5).map(c =>
            `<div class="list-item"><span><strong>${t(c.type)}</strong> <span class="text-muted">${c.date}</span></span><span class="badge-status ${c.status.replace(' ', '-').toLowerCase()}">${t(c.status)}</span></div>`
        ).join('');
    }
    const users = getUsers();
    document.getElementById('adminTotalUsers').textContent = users.length;
}

// ================================================================
// Navigation
// ================================================================
const moduleMap = {
    'citizen-dashboard': 'Dashboard',
    'healthcare': 'Healthcare', 'education': 'Education', 'transport': 'Transportation',
    'realestate': 'Real Estate', 'ecommerce': 'E-Commerce', 'courier': 'Courier',
    'payments': 'Payments', 'finance': 'Finance', 'parking': 'Parking',
    'emergency': 'Emergency', 'complaints': 'Complaints', 'booking': 'Booking',
    'documents': 'Documents', 'notifications': 'Notifications', 'chat': 'Chat', 'map': 'Smart Map',
    'business-dashboard': 'Business Dashboard', 'business-registration': 'Registration',
    'business-profile': 'Profile', 'products': 'Products', 'business-orders': 'Orders',
    'business-booking': 'Booking', 'business-payments': 'Payments', 'delivery': 'Delivery',
    'customers': 'Customers', 'sales-analytics': 'Sales Analytics',
    'business-chat': 'Chat', 'business-notifications': 'Notifications',
    'admin-dashboard': 'Admin Dashboard', 'users': 'User Management',
    'businesses': 'Business Management', 'admin-healthcare': 'Healthcare Management',
    'admin-education': 'Education Management', 'admin-transport': 'Transport Management',
    'admin-property': 'Property Management', 'admin-ecommerce': 'E-Commerce Management',
    'admin-courier': 'Courier Management', 'admin-payments': 'Payment Management',
    'admin-parking': 'Parking Management', 'admin-emergency': 'Emergency Management',
    'admin-complaints': 'Complaint Management', 'admin-booking': 'Booking Management',
    'analytics': 'Analytics', 'admin-notifications': 'Notifications',
    'admin-chat': 'Chat Management', 'admin-documents': 'Document Management',
    'settings': 'Settings'
};
const renderMap = {
    'healthcare': renderHealthcare, 'education': renderEducation,
    'transport': renderTransport, 'realestate': renderRealEstate,
    'ecommerce': renderEcommerce, 'courier': renderCourier,
    'payments': renderPayments, 'finance': renderFinance,
    'parking': renderParking, 'emergency': renderEmergency,
    'complaints': renderComplaints, 'booking': renderBooking,
    'documents': renderDocuments, 'notifications': renderNotifications,
    'users': renderUsers, 'businesses': renderBusinesses,
    'business-registration': renderBusinesses, 'products': renderProducts,
    'business-orders': renderBusinessOrders, 'business-booking': renderBusinessBooking,
    'business-payments': renderBusinessPayments, 'delivery': renderDelivery,
    'customers': renderCustomers, 'admin-healthcare': renderHealthcare,
    'admin-education': renderEducation, 'admin-transport': renderTransport,
    'admin-property': renderRealEstate, 'admin-ecommerce': renderEcommerce,
    'admin-courier': renderCourier, 'admin-payments': renderPayments,
    'admin-parking': renderParking, 'admin-emergency': renderEmergency,
    'admin-complaints': renderComplaints, 'admin-booking': renderBooking,
    'admin-notifications': renderAdminNotifications,
    'admin-documents': renderDocuments,
    'business-notifications': renderBusinessNotifications
};
let currentModule = 'citizen-dashboard';

function navigateTo(module) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('panel-' + module);
    if (panel) panel.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-module="${module}"]`);
    if (navItem) navItem.classList.add('active');
    const title = document.getElementById('pageTitle');
    if (title) {
        const label = moduleMap[module] || module;
        title.innerHTML = `${t(label)} `;
    }
    currentModule = module;
    if (renderMap[module]) renderMap[module]();
    if (module === 'citizen-dashboard') renderCitizenDashboard();
    if (module === 'business-dashboard') renderBusinessDashboard();
    if (module === 'admin-dashboard') renderAdminDashboard();
    closeSidebar();
}

function setRole(role) {
    if (currentUser) currentUser.role = role;
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.role === role);
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        const itemRole = item.dataset.role;
        item.classList.toggle('hidden', itemRole !== role);
    });
    document.querySelectorAll('.nav-label').forEach(label => {
        if (label.dataset.role === role) label.style.display = 'block';
        else label.style.display = 'none';
    });
    navigateTo(role + '-dashboard');
    applyTranslations();
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('show');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
}
const hamburger = document.getElementById('hamburgerBtn');
if (hamburger) hamburger.addEventListener('click', toggleSidebar);
const overlay = document.getElementById('sidebarOverlay');
if (overlay) overlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.nav-item[data-module]').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.module));
});
document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => setRole(btn.dataset.role));
});

// ================================================================
// Modal
// ================================================================
let modalContext = { type: null, id: null };

function openModal(type, id = null) {
    modalContext = { type, id };
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const field1 = document.getElementById('modalField1');
    const field2 = document.getElementById('modalField2');
    const field3 = document.getElementById('modalField3');
    const field4 = document.getElementById('modalField4');
    const field5 = document.getElementById('modalField5');
    const pwGroup = document.getElementById('modalPasswordGroup');

    // Reset fields
    field1.value = '';
    field2.value = '';
    field3.value = 'active';
    field4.value = 'medium';
    field5.value = '';
    field1.style.display = 'block';
    field2.style.display = 'block';
    field3.style.display = 'block';
    field4.style.display = 'block';
    pwGroup.style.display = 'none';
    document.querySelector('#modalBody .form-row').style.display = 'grid';
    field3.type = 'text';

    // --- Finance: Update Wallet ---
    if (type === 'finance-wallet') {
        pwGroup.style.display = 'none';
        document.querySelector('#modalBody .form-row').style.display = 'none';
        field1.style.display = 'block';
        field2.style.display = 'none';
        field3.style.display = 'none';
        field4.style.display = 'none';
        document.getElementById('modalLabel1').textContent = t('New Balance');
        document.getElementById('modalTitle').textContent = t('Update Wallet');
        overlay.classList.add('show');
        return;
    }

    // --- Finance: Add Transaction ---
    if (type === 'finance-transaction') {
        pwGroup.style.display = 'none';
        document.querySelector('#modalBody .form-row').style.display = 'grid';
        field1.style.display = 'block';
        field2.style.display = 'block';
        field3.style.display = 'block';
        field4.style.display = 'none';
        field3.type = 'date';
        field3.value = new Date().toISOString().slice(0, 10);
        document.getElementById('modalLabel1').textContent = t('Description');
        document.getElementById('modalLabel2').textContent = t('Amount (e.g., +5000 or -2000)');
        document.getElementById('modalLabel3').textContent = t('Transaction Date');
        document.getElementById('modalTitle').textContent = t('Add Transaction');
        overlay.classList.add('show');
        return;
    }

    // --- Customize field3 options based on type ---
    if (type === 'user') {
        pwGroup.style.display = 'block';
        field3.innerHTML = `<option value="citizen">${t('Citizen')}</option><option value="business">${t('Business')}</option><option value="admin">${t('Admin')}</option>`;
        field4.innerHTML = `<option value="active">${t('Active')}</option><option value="inactive">${t('Inactive')}</option>`;
    } else if (type === 'healthcare') {
        // Healthcare needs "Yes"/"No" for Available
        field3.innerHTML = `<option value="Yes">${t('Yes')}</option><option value="No">${t('No')}</option>`;
        field4.innerHTML = `<option value="low">${t('Low')}</option><option value="medium" selected>${t('Medium')}</option><option value="high">${t('High')}</option>`;
        field3.value = 'Yes'; // default
    } else if (type === 'parking') {
        // Parking status: Available/Occupied
        field3.innerHTML = `<option value="Available">${t('Available')}</option><option value="Occupied">${t('Occupied')}</option>`;
        field4.innerHTML = `<option value="low">${t('Low')}</option><option value="medium" selected>${t('Medium')}</option><option value="high">${t('High')}</option>`;
        field3.value = 'Available';
    } else {
        // Other types: Active/Pending/Inactive
        field3.innerHTML = `<option value="active">${t('Active')}</option><option value="pending">${t('Pending')}</option><option value="inactive">${t('Inactive')}</option>`;
        field4.innerHTML = `<option value="low">${t('Low')}</option><option value="medium" selected>${t('Medium')}</option><option value="high">${t('High')}</option>`;
    }

    updateModalLabels(type);
    title.textContent = (id ? 'Edit' : 'Add') + ' ' + t(moduleMap[type] || type);

    // Fill data if editing
    if (id) {
        const collections = {
            healthcare: healthcareData, education: educationData, transport: transportData,
            realestate: realestateData, ecommerce: ecommerceData, courier: courierData,
            payment: paymentData, parking: parkingData, complaint: complaintData,
            booking: bookingData, document: documentData, business: businessData,
            product: productData
        };
        const col = collections[type];
        if (col) {
            const item = col.find(i => i.id === id);
            if (item) {
                field1.value = item.name || item.hospital || item.product || item.property || item.bill || item.parcel || item.service || item.type || item.sender || item.owner || item.route || item.location || '';
                field2.value = item.location || item.category || item.speciality || item.courses || item.price || item.amount || item.fee || item.description || item.date || item.receiver || item.doctor || item.type || item.owner || '';
                if (type !== 'user') {
                    // Set correct value for status field
                    if (type === 'healthcare') {
                        field3.value = item.available || 'Yes';
                    } else if (type === 'parking') {
                        field3.value = item.status || 'Available';
                    } else {
                        field3.value = item.status || 'active';
                    }
                    field4.value = item.priority || 'medium';
                }
            }
        }
        if (type === 'user') {
            const users = getUsers();
            const user = users.find(u => u.id === id);
            if (user) {
                field1.value = user.name || '';
                field2.value = user.email || '';
                field3.value = user.role || 'citizen';
                field4.value = user.status || 'active';
                field5.value = user.password || '';
            }
        }
    }
    overlay.classList.add('show');
}

function updateModalLabels(type) {
    const labelMap = {
        'healthcare': ['Hospital', 'Doctor', 'Available', 'Priority'],
        'education': ['Institution', 'Type', 'Status', 'Priority'],
        'transport': ['Route', 'Type', 'Status', 'Priority'],
        'realestate': ['Property', 'Type', 'Status', 'Priority'],
        'ecommerce': ['Product', 'Category', 'Status', 'Priority'],
        'courier': ['Parcel ID', 'Sender', 'Status', 'Priority'],
        'payment': ['Bill #', 'Type', 'Status', 'Priority'],
        'parking': ['Location', 'Slot', 'Status', 'Priority'],
        'complaint': ['Issue Type', 'Description', 'Status', 'Priority'],
        'booking': ['Service', 'Date', 'Status', 'Priority'],
        'document': ['Document Name', 'Type', 'Status', 'Priority'],
        'user': ['Full Name', 'Email', 'Role', 'Status'],
        'business': ['Business Name', 'Owner', 'Status', 'Priority'],
        'product': ['Product Name', 'Price', 'Status', 'Priority']
    };
    const labels = labelMap[type] || ['Field 1', 'Field 2', 'Status', 'Priority'];
    document.getElementById('modalLabel1').textContent = t(labels[0]);
    document.getElementById('modalLabel2').textContent = t(labels[1]);
    document.getElementById('modalLabel3').textContent = t(labels[2]);
    document.getElementById('modalLabel4').textContent = t(labels[3]);
    if (type === 'user') {
        document.getElementById('modalLabel5').textContent = t('Password');
    }
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
    modalContext = { type: null, id: null };
}

function saveModal() {
    const { type, id } = modalContext;
    console.log('🟢 saveModal called with type:', type, 'id:', id);

    const field1 = document.getElementById('modalField1').value.trim();
    const field2 = document.getElementById('modalField2').value.trim();
    const field3 = document.getElementById('modalField3').value;
    const field4 = document.getElementById('modalField4').value;
    const field5 = document.getElementById('modalField5').value.trim();

    // --- Finance: Update Wallet ---
    if (type === 'finance-wallet') {
        const newBalance = parseFloat(field1);
        if (isNaN(newBalance) || newBalance < 0) {
            alert(t('Please enter a valid positive number.'));
            return;
        }
        walletBalance = newBalance;
        saveData('wallet', walletBalance);
        closeModal();
        renderFinance();
        alert(t('Wallet updated!'));
        return;
    }

    // --- Finance: Add Transaction ---
    if (type === 'finance-transaction') {
        const desc = field1.trim();
        const amount = field2.trim();
        const date = field3 || new Date().toISOString().slice(0, 10);
        if (!desc || !amount) {
            alert(t('Please fill description and amount.'));
            return;
        }
        if (!amount.startsWith('+') && !amount.startsWith('-')) {
            alert(t('Amount must start with + or - (e.g., +5000 or -2000)'));
            return;
        }
        financeTransactions.push({ id: Date.now(), description: desc, amount: amount, date: date });
        saveData('finance', financeTransactions);
        closeModal();
        renderFinance();
        alert(t('Transaction added!'));
        return;
    }

    if (!field1) {
        alert('Please fill the first field.');
        return;
    }

    // --- Collections mapping ---
    const collections = {
        healthcare: healthcareData,
        education: educationData,
        transport: transportData,
        realestate: realestateData,
        ecommerce: ecommerceData,
        courier: courierData,
        payment: paymentData,
        parking: parkingData,
        complaint: complaintData,
        booking: bookingData,
        document: documentData,
        business: businessData,
        product: productData
    };

    // --- User Management (special case) ---
    if (type === 'user') {
        let users = getUsers();
        if (id) {
            const user = users.find(u => u.id === id);
            if (user) {
                user.name = field1 || user.name;
                user.email = field2 || user.email;
                user.role = field3 || user.role;
                user.status = field4 || user.status;
                if (field5) user.password = field5;
                saveUsers(users);
            }
        } else {
            const newUser = {
                id: Date.now(),
                name: field1,
                email: field2 || 'user@city.com',
                password: field5 || 'changeme',
                role: field3 || 'citizen',
                status: field4 || 'active',
                created: new Date().toISOString()
            };
            users.push(newUser);
            saveUsers(users);
        }
        closeModal();
        renderUsers();
        document.getElementById('adminTotalUsers').textContent = getUsers().length;
        alert(t('User saved!'));
        return;
    }

    // --- Other collections ---
    const col = collections[type];
    if (!col) {
        alert('Unknown type: ' + type);
        console.error('❌ Unknown type:', type);
        return;
    }

    console.log('📦 Current data before operation:', col);

    if (id) {
        // Edit existing
        const item = col.find(i => i.id === id);
        if (!item) {
            alert('Item not found with id: ' + id);
            return;
        }
        // Update properties based on type
        switch (type) {
            case 'healthcare':
                item.hospital = field1;
                item.doctor = field2 || 'Dr. X';
                item.available = field3; // now field3 is 'Yes' or 'No'
                break;
            case 'education':
                item.name = field1;
                item.type = field2 || 'School';
                break;
            case 'transport':
                item.route = field1;
                item.type = field2 || 'Bus';
                break;
            case 'realestate':
                item.property = field1;
                item.type = field2 || 'House';
                item.status = field3;
                break;
            case 'ecommerce':
                item.product = field1;
                item.category = field2 || 'General';
                break;
            case 'courier':
                item.sender = field1;
                item.receiver = field2 || 'Receiver';
                item.status = field3;
                break;
            case 'payment':
                item.type = field1;
                item.amount = field2 || '0';
                item.status = field3;
                break;
            case 'parking':
                item.location = field1;
                item.slot = field2 || 'A1';
                item.status = field3; // Available or Occupied
                break;
            case 'complaint':
                item.type = field1;
                item.description = field2 || 'No details';
                item.status = field3;
                break;
            case 'booking':
                item.service = field1;
                item.date = field2 || new Date().toISOString().slice(0, 10);
                item.status = field3;
                break;
            case 'document':
                item.name = field1;
                item.type = field2 || 'Personal';
                item.status = field3;
                break;
            case 'business':
                item.name = field1;
                item.owner = field2 || 'Owner';
                item.status = field3;
                break;
            case 'product':
                item.name = field1;
                item.price = field2 || '0';
                item.status = field3;
                break;
            default:
                item.name = field1;
                item.category = field2;
                item.status = field3;
        }
        console.log('✏️ Updated item:', item);
    } else {
        // Add new
        const newItem = { id: Date.now() };
        switch (type) {
            case 'healthcare':
                newItem.hospital = field1;
                newItem.doctor = field2 || 'Dr. X';
                newItem.speciality = 'General';
                newItem.available = field3; // Yes/No
                break;
            case 'education':
                newItem.name = field1;
                newItem.type = field2 || 'School';
                newItem.location = 'City';
                newItem.courses = 'N/A';
                break;
            case 'transport':
                newItem.route = field1;
                newItem.type = field2 || 'Bus';
                newItem.departure = '08:00';
                newItem.arrival = '12:00';
                newItem.fare = '0';
                break;
            case 'realestate':
                newItem.property = field1;
                newItem.type = field2 || 'House';
                newItem.location = 'City';
                newItem.price = '0';
                newItem.status = field3;
                break;
            case 'ecommerce':
                newItem.product = field1;
                newItem.category = field2 || 'General';
                newItem.price = '0';
                newItem.stock = '0';
                break;
            case 'courier':
                newItem.parcel = 'PK-' + (col.length + 1);
                newItem.sender = field1;
                newItem.receiver = field2 || 'Receiver';
                newItem.status = field3;
                break;
            case 'payment':
                newItem.bill = 'BILL-' + (col.length + 1);
                newItem.type = field1;
                newItem.amount = field2 || '0';
                newItem.date = new Date().toISOString().slice(0, 10);
                newItem.status = field3;
                break;
            case 'parking':
                newItem.location = field1;
                newItem.slot = field2 || 'A1';
                newItem.status = field3; // Available/Occupied
                newItem.fee = '৳100/hr';
                break;
            case 'complaint':
                newItem.type = field1;
                newItem.description = field2 || 'No details';
                newItem.date = new Date().toISOString().slice(0, 10);
                newItem.status = 'Submitted';
                break;
            case 'booking':
                newItem.service = field1;
                newItem.date = field2 || new Date().toISOString().slice(0, 10);
                newItem.status = field3;
                break;
            case 'document':
                newItem.name = field1;
                newItem.type = field2 || 'Personal';
                newItem.uploaded = new Date().toISOString().slice(0, 10);
                newItem.status = 'Pending';
                break;
            case 'business':
                newItem.name = field1;
                newItem.owner = field2 || 'Owner';
                newItem.type = 'General';
                newItem.status = field3;
                break;
            case 'product':
                newItem.name = field1;
                newItem.price = field2 || '0';
                newItem.stock = '0';
                newItem.status = field3;
                break;
            default:
                newItem.name = field1;
                newItem.category = field2;
                newItem.status = field3;
        }
        col.push(newItem);
        console.log('➕ Added new item:', newItem);
    }

    // ✅ Save to localStorage
    saveData(type, col);
    console.log('💾 Data saved to localStorage:', type, col);

    // ✅ Close modal
    closeModal();

    // ✅ বাধ্যতামূলকভাবে রেন্ডার করুন
    // প্রথমে explicit ফাংশন কল
    if (type === 'healthcare') {
        renderHealthcare();
    } else if (type === 'education') {
        renderEducation();
    } else if (type === 'transport') {
        renderTransport();
    } else if (type === 'realestate') {
        renderRealEstate();
    } else if (type === 'ecommerce') {
        renderEcommerce();
    } else if (type === 'courier') {
        renderCourier();
    } else if (type === 'payment') {
        renderPayments();
    } else if (type === 'parking') {
        renderParking();
    } else if (type === 'complaint') {
        renderComplaints();
    } else if (type === 'booking') {
        renderBooking();
    } else if (type === 'document') {
        renderDocuments();
    } else if (type === 'business') {
        renderBusinesses();
    } else if (type === 'product') {
        renderProducts();
    } else if (renderMap[type]) {
        // fallback
        renderMap[type]();
    }

    // ✅ ড্যাশবোর্ড আপডেট (যদি প্রয়োজন)
    if (currentModule === 'citizen-dashboard') renderCitizenDashboard();
    if (currentModule === 'business-dashboard') renderBusinessDashboard();
    if (currentModule === 'admin-dashboard') renderAdminDashboard();
    if (currentModule === 'users') renderUsers();

    // ✅ সাফল্য বার্তা
    alert(t('Saved successfully!'));
    console.log('✅ Save complete. Table should be updated now.');
}

// ================================================================
// Theme & Emergency & Search
// ================================================================
let darkMode = localStorage.getItem('darkMode') === 'true';
if (darkMode) document.documentElement.classList.add('dark');

document.querySelectorAll('#themeToggle, #themeToggleRole').forEach(el => {
    if (el) {
        el.addEventListener('click', function() {
            darkMode = !darkMode;
            document.documentElement.classList.toggle('dark', darkMode);
            localStorage.setItem('darkMode', darkMode);
            const icon = this.querySelector('i');
            const label = this.querySelector('span');
            if (icon) {
                icon.className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
            }
            if (label) {
                label.textContent = darkMode ? t('Light Mode') : t('Dark Mode');
            }
        });
        const icon = el.querySelector('i');
        const label = el.querySelector('span');
        if (icon) {
            icon.className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
        }
        if (label) {
            label.textContent = darkMode ? t('Light Mode') : t('Dark Mode');
        }
    }
});

const emergencyFab = document.getElementById('emergencyFab');
if (emergencyFab) {
    emergencyFab.addEventListener('click', () => {
        alert(t('Emergency alert sent! Help is on the way.'));
    });
}

const searchInput = document.getElementById('globalSearch');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        const activePanel = document.querySelector('.panel.active');
        if (!activePanel) return;
        const rows = activePanel.querySelectorAll('table tbody tr');
        rows.forEach(row => {
            row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
        });
    });
}

// ================================================================
// Global exposure for HTML onclick
// ================================================================
window.saveModal = saveModal;
window.openModal = openModal;
window.closeModal = closeModal;
window.deleteItem = deleteItem;
window.togglePasswordVisibility = togglePasswordVisibility;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.handleLogout = handleLogout;
window.showLogin = showLogin;
window.showRegister = showRegister;
window.showRoleSelection = showRoleSelection;
window.selectDashboardRole = selectDashboardRole;

// ================================================================
// Init
// ================================================================
function initDataAndRender() {
    renderHealthcare();
    renderEducation();
    renderTransport();
    renderRealEstate();
    renderEcommerce();
    renderCourier();
    renderPayments();
    renderFinance();
    renderParking();
    renderEmergency();
    renderComplaints();
    renderBooking();
    renderDocuments();
    renderNotifications();
    renderAdminNotifications();
    renderBusinessNotifications();
    renderUsers();
    renderBusinesses();
    renderProducts();
    renderBusinessOrders();
    renderBusinessBooking();
    renderBusinessPayments();
    renderDelivery();
    renderCustomers();
    renderCitizenDashboard();
    renderBusinessDashboard();
    renderAdminDashboard();
    applyTranslations();
}

initAuth();

document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeSidebar(); }
});