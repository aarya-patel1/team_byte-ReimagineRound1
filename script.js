document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu li a").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  // Animate navigation items
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((item, index) => {
    item.style.animation = `fadeInDown 0.5s ease forwards ${index * 0.1}s`;
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
      comment:
        "Amazing experience! The home was beautiful and the host was very accommodating.",
    },
    {
      name: "Sarah M.",
      rating: 4,
      comment: "Great location and comfortable stay. Highly recommended!",
    },
    {
      name: "Michael R.",
      rating: 5,
      comment:
        "Exceptional service and stunning views. Will definitely come back!",
    },
    {
      name: "Emily L.",
      rating: 4,
      comment: "Cozy and clean space. Perfect for a weekend getaway.",
    },
    {
      name: "David W.",
      rating: 5,
      comment:
        "Unforgettable stay! The host went above and beyond to make us feel welcome.",
    },
    {
      name: "Sophie K.",
      rating: 4,
      comment:
        "Beautiful property with all the amenities you could ask for. Loved it!",
    },
    {
      name: "Alex T.",
      rating: 5,
      comment:
        "Incredible experience! The place exceeded all our expectations.",
    },
    {
      name: "Olivia P.",
      rating: 4,
      comment:
        "Wonderful stay in a unique and charming location. Would visit again!",
    },
  ];

  reviews.forEach((review, index) => {
    if (index < 8) {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `
        <img src="https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * 70
        )}" alt="${review.name}">
        <h3>${review.name}</h3>
        <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(
        5 - review.rating
      )}</div>
        <p>${review.comment}</p>
      `;
      reviewGrid.appendChild(reviewItem);
    }
  });

  // Destination slider functionality
  const slider = document.querySelector(".destination-container");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const hotelSlider = document.querySelector(".hotel-container");
  const prevBtn1 = document.querySelector(".prev-btn-1");
  const nextBtn1 = document.querySelector(".next-btn-1");
  // let slidesPerView = 3;
  // let currentIndex = 0;

  // ADD OR REMOVE ARROW ICONS BASED ON SCREEN WIDTHS
  function updateSlidesPerView() {
    if (window.innerWidth < 768) {
      slidesPerView = 1;
    } else if (window.innerWidth < 1024) {
      slidesPerView = 2;
    } else {
      slidesPerView = 3;
    }
  }

  function sliderFunc(prevBtn, nextBtn, itemName, slider) {
    let slidesPerView = 3;
    let currentIndex = 0;
    const slideWidth = slider.querySelector(`.${itemName}`).offsetWidth + 20; // Width + gap

    // UPDATING SLIDE POSTIONS
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updateButtonVisibility();
    }

    function updateButtonVisibility() {
      prevBtn.style.display = currentIndex === 0 ? "none" : "block";
      nextBtn.style.display =
        currentIndex >= slider.children.length - slidesPerView
          ? "none"
          : "block";
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
  }

  // Destination Slider
  sliderFunc(prevBtn, nextBtn, "destination-item", slider);

  // Hotel Slider
  sliderFunc(prevBtn1, nextBtn1, "hotel-item", hotelSlider);

  // // UPDATING SLIDE POSTIONS
  // function updateSliderPosition() {
  //   slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  //   updateButtonVisibility();
  // }

  // function updateButtonVisibility() {
  //   prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  //   nextBtn.style.display =
  //     currentIndex >= slider.children.length - slidesPerView ? "none" : "block";
  // }

  // prevBtn.addEventListener("click", () => {
  //   currentIndex = Math.max(currentIndex - slidesPerView, 0);
  //   updateSliderPosition();
  // });

  // nextBtn.addEventListener("click", () => {
  //   const maxIndex = slider.children.length - slidesPerView;
  //   currentIndex = Math.min(currentIndex + slidesPerView, maxIndex);
  //   updateSliderPosition();
  // });

  // // Initialize button visibility and slides per view
  // updateSlidesPerView();
  // updateButtonVisibility();

  // // Update slides per view on window resize
  // window.addEventListener("resize", () => {
  //   updateSlidesPerView();
  //   updateSliderPosition();
  // });

  ///

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
          behavior: "smooth",
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
      behavior: "smooth",
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
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModals));
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

  // Animate hero background
  const heroBackground = document.querySelector(".hero-background");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? 1 : -1;
    const parallaxFactor = 0.5;

    heroBackground.style.transform = `translateY(${
      currentScrollY * parallaxFactor * scrollDirection
    }px)`;
    lastScrollY = currentScrollY;
  });

  // See More Reviews button functionality
  const seeMoreBtn = document.querySelector(".see-more-btn");
  let reviewsVisible = 8;

  seeMoreBtn.addEventListener("click", () => {
    const hiddenReviews = Array.from(reviewGrid.children).slice(reviewsVisible);
    hiddenReviews.slice(0, 4).forEach((review) => {
      review.style.display = "block";
    });
    reviewsVisible += 4;

    if (reviewsVisible >= reviews.length) {
      seeMoreBtn.style.display = "none";
    }
  });

  // Initially hide reviews beyond the first 8
  Array.from(reviewGrid.children)
    .slice(8)
    .forEach((review) => {
      review.style.display = "none";
    });

  // Add date picker functionality to check-in and check-out inputs
  const checkinInput = document.getElementById("checkin");
  const checkoutInput = document.getElementById("checkout");

  // Set minimum date to today for check-in
  const today = new Date().toISOString().split("T")[0];
  checkinInput.min = today;

  checkinInput.addEventListener("change", function () {
    // Set minimum date for check-out to be the day after check-in
    const checkinDate = new Date(this.value);
    const minCheckoutDate = new Date(checkinDate);
    minCheckoutDate.setDate(minCheckoutDate.getDate() + 1);
    checkoutInput.min = minCheckoutDate.toISOString().split("T")[0];

    // If check-out date is before new check-in date, reset it
    if (new Date(checkoutInput.value) <= checkinDate) {
      checkoutInput.value = "";
    }
  });
});
