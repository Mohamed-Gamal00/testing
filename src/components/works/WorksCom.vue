<template>
  <div>
    <div class="container-xxl py-5 bg-primary hero-header mb-5">
      <div class="container my-5 py-5 px-lg-5">
        <div class="row g-5 py-5">
          <div class="col-12 text-center">
            <h1 class="text-white animated zoomIn">الأعمال</h1>
            <hr class="bg-white mx-auto mt-0" style="width: 90px" />
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a class="text-white" href="#">الرئيسية</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- filter works -->
    <WorksContent />
  </div>
</template>

<script>
import WorksContent from "@/components/works/WorksContent";
export default {
  name: "WorksCom",
  components: { WorksContent },
};
</script>

<style scoped></style>
