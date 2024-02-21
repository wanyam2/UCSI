document.addEventListener('DOMContentLoaded', function() {
    const coursesData = [
        {
            image: '../img/course_image.jpg',
            name: 'course1',
            code: 'CS101'
        },
        {
            image: '../img/course_image.jpg',
            name: 'course2',
            code: 'CS201'
        },
        {
            image: '../img/course_image.jpg',
            name: 'course3',
            code: 'CS301'
        },
        {
            image: '../img/course_image.jpg',
            name: 'course4',
            code: 'DB401'
        },
        {
            image: '../img/course_image.jpg',
            name: 'course5',
            code: 'OS501'
        },
        {
            image: '../img/course_image.jpg',
            name: 'course6',
            code: 'CN601'
        },
        {
            image: '../img/course_image.jpg',
            name: 'course7',
            code: 'AI701'
        }
    ];

    const courseWrapper = document.querySelector('.course-wrapper');
    coursesData.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
        <img src="${course.image}" alt="${course.name}" style="height:400px;">
        <div class="course-info">
          <h4>${course.name}</h4>
          <p>${course.code}</p>
        </div>
      `;
        courseWrapper.appendChild(courseItem);
    });

    updateSliderWidth();
});

function updateSliderWidth() {
    const courseWrapper = document.querySelector('.course-wrapper');
    const courseItems = document.querySelectorAll('.course-item');
    courseWrapper.style.width = `${courseItems.length * 20}%`; // 5개 아이템 기준
}

let currentSlide = 0;
function moveSlide(step) {
    const slides = document.querySelector('.course-wrapper');
    const totalSlides = slides.children.length;
    const visibleItems = window.innerWidth > 768 ? 5 : window.innerWidth > 480 ? 3 : 1;
    const slideWidth = slides.clientWidth / visibleItems;

    // 마지막 슬라이드에서 더 이상 넘어가지 않도록 조정
    if (currentSlide + step >= totalSlides - visibleItems + 1) {
        currentSlide = 0;
    } else if (currentSlide + step < 0) {
        currentSlide = totalSlides - visibleItems;
    } else {
        currentSlide += step;
    }

    slides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

js