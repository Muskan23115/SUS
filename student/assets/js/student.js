document.addEventListener("DOMContentLoaded", () => {
  fetch('../assets/data/courses.json')
    .then(res => res.json())
    .then(courses => {
      const courseList = document.getElementById('courseList');
      courseList.innerHTML = courses.map(course => `
        <div class="course-card">
          <h2>${course.title}</h2>
          <p>Instructor: ${course.teacher}</p>
          <p>Price: ₹${course.price}</p>
          <button onclick="buyCourse('${course.id}', ${course.price})">Buy Now</button>
        </div>
      `).join('');
    });
});

function buyCourse(courseId, price) {
  alert(`Redirecting to Razorpay for course ID: ${courseId} at ₹${price}`);
  // Redirect to Razorpay mock later
  window.location.href = `/razorpay/checkout.html?courseId=${courseId}&price=${price}`;
}
