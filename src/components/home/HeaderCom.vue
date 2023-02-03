<template>
  <div>
    <!-- Navbar & Hero Start -->
    <div class="container-xxl position-relative p-0">
      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="text-white mb-4 animated zoomIn">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
              </h1>
              <p class="text-white pb-3 animated zoomIn">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
              <a
                href=""
                class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft fw-bold"
              >
                المزيد</a
              >
              <a
                href=""
                class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight fw-bold"
                >تواصل معنا</a
              >
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <img class="img-fluid" src="img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar & Hero End -->
  </div>
  <!-- about component -->
  <div class="bg-white">
    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(29, 29, 39, 0.7)">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body d-flex align-items-center justify-content-center"
          >
            <div class="input-group" style="max-width: 600px">
              <input
                type="text"
                class="form-control bg-transparent border-light p-3"
                placeholder="Type search keyword"
              />
              <button class="btn btn-light px-4">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Full Screen Search End -->

    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container px-lg-5">
        <div class="row g-5">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="section-title position-relative mb-4 pb-2">
              <h6 class="position-relative text-primary ps-4 fs-3 fw-bold">
                من نحن
              </h6>
              <h2 class="mt-2">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
              </h2>
            </div>
            <p class="mb-4">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد
            </p>
            <div class="row g-3">
              <div class="col-sm-6">
                <h6 class="mb-3">
                  <i class="fa fa-check text-primary me-2"></i>هذا النص هو مثال
                </h6>
                <h6 class="mb-0">
                  <i class="fa fa-check text-primary me-2"></i>هذا النص هو مثال
                </h6>
              </div>
              <div class="col-sm-6">
                <h6 class="mb-3">
                  <i class="fa fa-check text-primary me-2"></i>هذا النص هو مثال
                </h6>
                <h6 class="mb-0">
                  <i class="fa fa-check text-primary me-2"></i>هذا النص هو مثال
                </h6>
              </div>
            </div>
            <div class="d-flex align-items-center mt-4">
              <a class="btn btn-primary rounded-pill px-4 me-3" href=""
                >المزيد</a
              >
              <a class="btn btn-outline-primary btn-square me-3" href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-outline-primary btn-square me-3" href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-outline-primary btn-square me-3" href=""
                ><i class="fab fa-instagram"></i
              ></a>
              <a class="btn btn-outline-primary btn-square me-3" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid wow zoomIn"
              data-wow-delay="0.5s"
              src="img/about.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <!-- Newsletter Start -->
    <div
      class="container-xxl bg-primary pb-lg-5 newsletter my-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div class="container px-lg-5">
        <div class="row align-items-center" style="height: 250px">
          <div class="col-12 col-md-6">
            <h3 class="text-white">هذا النص هو مثال لنص يمكن أن يستبدل</h3>
            <small class="text-white"
              >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</small
            >
            <div class="position-relative w-100 mt-3">
              <input
                class="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Enter Your Email"
                style="height: 48px"
              />
              <button
                type="button"
                class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i class="fa fa-paper-plane text-primary fs-4"></i>
              </button>
            </div>
          </div>
          <div class="col-md-6 text-center mb-n5 d-none d-md-block">
            <img
              class="img-fluid mt-5"
              style="height: 250px"
              src="img/newsletter.png"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Newsletter End -->
    <!-- Navbar & Hero End -->
  </div>
  <!-- Service Start -->
  <div class="container-xxl py-5">
    <div class="container px-lg-5">
      <div class="row">
        <div
          class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h6 class="position-relative d-inline text-primary fs-3 fw-bold ps-4">
            الخدمات
          </h6>
          <h2 class="mt-2">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
          </h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">هذا النص هو مثال</h5>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
              <a class="btn px-3 mt-auto mx-auto" href="">اعرف اكثر</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">هذا النص هو مثال</h5>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
              <a class="btn px-3 mt-auto mx-auto" href="">اعرف اكثر</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">هذا النص هو مثال</h5>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
              <a class="btn px-3 mt-auto mx-auto" href="">اعرف اكثر</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">هذا النص هو مثال</h5>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
              <a class="btn px-3 mt-auto mx-auto" href="">اعرف اكثر</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">هذا النص هو مثال</h5>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
              <a class="btn px-3 mt-auto mx-auto" href="">اعرف اكثر</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">هذا النص هو مثال</h5>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
              <a class="btn px-3 mt-auto mx-auto" href="">اعرف اكثر</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->
  <!-- contact us -->
  <ContactContent />
  <FooterCom />
</template>

<script>
import ContactContent from "@/components/contact/ContactContent.vue";
import FooterCom from "@/components/footer/FooterCom";
export default {
  name: "HeaderCom",
  components: { ContactContent, FooterCom },
};
</script>

<style scoped></style>
