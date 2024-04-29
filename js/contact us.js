document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#darkModeToggle');

    // تحقق من قيمة وضع الظلام المحفوظة في الذاكرة المحلية
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // تحديد الوضع الحالي (وضع الظلام أو عدمه) بناءً على قيمة الذاكرة المحلية
    if (isDarkMode) {
        enableDarkMode();
        darkModeToggle.checked = true;
    }

    // استماع لحدث تغيير التبديل
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled'); // حفظ الوضع المظلم في الذاكرة المحلية
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', null); // إزالة الوضع المظلم من الذاكرة المحلية
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
    }
});

// اختيار الزر بواسطة الـ ID وإضافة مستمع لحدث النقر
document.getElementById('changeBackgroundButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});