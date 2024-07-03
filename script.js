document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));

  // Animate navigation items
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((item, index) => {
      item.style.animation = `fadeInDown 0.5s ease forwards ${index * 0.1}s`;
    });
  
    // Parallax effect for hero section
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  
    // Animate search form on scroll
    const searchForm = document.querySelector(".search-form");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        searchForm.classList.add("sticky");
      } else {
        searchForm.classList.remove("sticky");
      }
    });
  
    // Generate random reviews
    const reviewGrid = document.getElementById("reviewGrid");
    const reviews = [
      {
        name: "John D.",
        rating: 5,
        comment: "Amazing experience! The home was beautiful and the host was very accommodating.",
      },
      {
        name: "Sarah M.",
        rating: 4,
        comment: "Great location and comfortable stay. Highly recommended!",
      },
      {
        name: "Michael R.",
        rating: 5,
        comment: "Exceptional service and stunning views. Will definitely come back!",
      },
      {
        name: "Emily L.",
        rating: 4,
        comment: "Cozy and clean space. Perfect for a weekend getaway.",
      },
      {
        name: "David W.",
        rating: 5,
        comment: "Unforgettable stay! The host went above and beyond to make us feel welcome.",
      },
      {
        name: "Sophie K.",
        rating: 4,
        comment: "Beautiful property with all the amenities you could ask for. Loved it!",
      },
    ];
  
    reviews.forEach((review) => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `
        <img src="https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}" alt="${review.name}">
        <h3>${review.name}</h3>
        <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
        <p>${review.comment}</p>
      `;
      reviewGrid.appendChild(reviewItem);
    });
  
    // Destination slider functionality
    const slider = document.querySelector(".destination-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slideWidth = slider.querySelector(".destination-item").offsetWidth + 20; // Width + gap
    let slidesPerView = 3;
    let currentIndex = 0;
  
    function updateSlidesPerView() {
      if (window.innerWidth < 768) {
        slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        slidesPerView = 2;
      } else {
        slidesPerView = 3;
      }
    }
  
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updateButtonVisibility();
    }
  
    function updateButtonVisibility() {
      prevBtn.style.display = currentIndex === 0 ? "none" : "block";
      nextBtn.style.display = currentIndex >= slider.children.length - slidesPerView ? "none" : "block";
    }
  
    prevBtn.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - slidesPerView, 0);
      updateSliderPosition();
    });
  
    nextBtn.addEventListener("click", () => {
      const maxIndex = slider.children.length - slidesPerView;
      currentIndex = Math.min(currentIndex + slidesPerView, maxIndex);
      updateSliderPosition();
    });
  
    // Initialize button visibility and slides per view
    updateSlidesPerView();
    updateButtonVisibility();
  
    // Update slides per view on window resize
    window.addEventListener("resize", () => {
      updateSlidesPerView();
      updateSliderPosition();
    });
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Scroll to top button functionality
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Modal functionality
    const modalOverlay = document.getElementById("modalOverlay");
    const signupModal = document.getElementById("signupModal");
    const loginModal = document.getElementById("loginModal");
    const joinBtn = document.getElementById("joinBtn");
    const closeBtns = document.querySelectorAll(".close-btn");
    const switchToLogin = document.getElementById("switchToLogin");
    const switchToSignup = document.getElementById("switchToSignup");
  
    function openModal(modal) {
      modalOverlay.style.display = "block";
      modal.style.display = "block";
    }
  
    function closeModals() {
      modalOverlay.style.display = "none";
      signupModal.style.display = "none";
      loginModal.style.display = "none";
    }
  
    joinBtn.addEventListener("click", () => openModal(signupModal));
    closeBtns.forEach(btn => btn.addEventListener("click", closeModals));
    switchToLogin.addEventListener("click", (e) => {
      e.preventDefault();
      signupModal.style.display = "none";
      openModal(loginModal);
    });
    switchToSignup.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.style.display = "none";
      openModal(signupModal);
    });
  
    // Close modal when clicking outside
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModals();
      }
    });
  
    // Form submission (prevent default for demo)
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Signup functionality would be implemented here.");
      closeModals();
    });
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login functionality would be implemented here.");
      closeModals();
    });
  });