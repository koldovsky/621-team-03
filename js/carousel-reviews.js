(function () {
    const customerReviewsJson = `[
      {
          "reviewId": "001",
          "reviewStr": "Great lights, amazing customer service <br> Delivered speedily and with special care from the customer service department as we needed it by a certain date. They couldn’t guarantee this due to the circumstances with covid etc. But they went above and beyond and the lights arrived on time!Although the actual lights are smaller than we imagined, they look great and we are moving them to a different part of the house.The quality is great( of course!)"
  
      },
      {
          "reviewId": "002",
          "reviewStr": "Ordered and received Maroq Door mat and delighted with it. Order, process and delivery was very staightford. I would recommend using this company and I certainly will in the future"
  
      },
      {
          "reviewId": "003",
          "reviewStr": "Service is quick and efficient<br> Service is quick and efficient from order to delivery. The lights are lovely and give off a lovely soft, warm light. Just right to light up a dull corner"
  
      }
  ]`;
  
    const customerReviews = JSON.parse(customerReviewsJson);
    let customerReviewsHtml = [];
    function showCustomerReviews(customerReviews) {
      const allCustomerReviews = [...customerReviews];
      for (const review of allCustomerReviews) {
        customerReviewsHtml.push(
          `<p class="slide-reviews undertitle-content">${review.reviewStr}</p>`
        );
      }
      return customerReviewsHtml;
    }
  
    showCustomerReviews(customerReviews);
    const slidesReviews = [...customerReviewsHtml];
    let currentReviewSlideIdx = 0;
    function showCurrentReviewSlide() {
      const slideReviewContainer = document.querySelector(
        ".customer-reviews-carousel"
      );
      slideReviewContainer.innerHTML = slidesReviews[currentReviewSlideIdx];
    }
    function nextReviewSlide() {
      currentReviewSlideIdx++;
      if (currentReviewSlideIdx >= slidesReviews.length)
        currentReviewSlideIdx = 0;
      showCurrentReviewSlide();
    }
    function previousReviewSlide() {
      currentReviewSlideIdx--;
      if (currentReviewSlideIdx < 0)
        currentReviewSlideIdx = slidesReviews.length - 1;
      showCurrentReviewSlide();
    }
    setInterval(nextReviewSlide, 5000);
    showCurrentReviewSlide();
  
    document
      .querySelector(".move-slide-right-review")
      .addEventListener("click", nextReviewSlide);
  
    document
      .querySelector(".move-slide-left-review")
      .addEventListener("click", previousReviewSlide);
  })();
