<template>
  <div class="container graphics">
    <!-- FILTER BUTTONS -->
    <div class="filters text-center mb-3">
      <!-- SHOW ALL BUTTON -->
      <!-- FILTER BUTTONS -->
      <div class="p-3" style="overflow: auto; white-space: nowrap">
        <button
          class="btn px-3 pe-4 btn m-2 btn-outline-primary"
          @click="showAll()"
        >
          الكل
        </button>
        <button
          class="btn px-3 pe-4 btn m-2 btn-outline-primary"
          v-for="(cat, index) in cats"
          :key="index"
          @click="filterArticle(cat)"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>
    <!-- works -->
    <div class="row g-4 portfolio-container d-flex justify-content-start">
      <div
        class="col-lg-3 col-md-6 portfolio-item first wow zoomIn"
        data-wow-delay="0.1s"
        data-aos="zoom-in"
        :data-aos-delay="100 + i * 10"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="600"
        data-aos-once="1"
        v-for="item in filterapps"
        :key="item.id"
      >
        <div class="position-relative rounded overflow-hidden">
          <div class="images" v-viewer.static="{ title: false }">
            <img
              :src="item.image"
              height="200"
              title="false"
              style="width: 100%"
            />
          </div>
          <div class="portfolio-overlay">
            <a class="btn btn-light"
              ><i class="fa fa-plus fa-2x text-primary"></i
            ></a>
            <div class="mt-auto">
              <small class="text-white"
                ><i class="fa fa-folder me-2"></i>Web Design</small
              >
              <a class="h5 d-block text-white mt-1 mb-0" href=""
                >Project Name</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "WorksContent",
  data() {
    return {
      filteredCat: null,
      cats: [
        { id: 1, name: "مشروع 1" },
        { id: 2, name: "مشروع 2" },
        { id: 3, name: "مشروع 3" },
      ],
      products: [
        {
          id: 1,
          cat_id: 1,
          image:
            "https://img.freepik.com/free-photo/close-up-young-adult-enjoying-warm-drink_23-2149134373.jpg?w=740&t=st=1672488370~exp=1672488970~hmac=87f604c13d559be68b0c9a47f1ba4e7b0b87d3d7e31904b9ba02e3e4adff2cd1",
        },
        {
          id: 2,
          cat_id: 2,
          image:
            "https://img.freepik.com/free-photo/close-up-young-adult-enjoying-warm-drink_23-2149134373.jpg?w=740&t=st=1672488370~exp=1672488970~hmac=87f604c13d559be68b0c9a47f1ba4e7b0b87d3d7e31904b9ba02e3e4adff2cd1",
        },
        {
          id: 3,
          cat_id: 2,
          image:
            "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=900&t=st=1672497244~exp=1672497844~hmac=5d3ac2cf1dae973a4aa1010048251ffad4cf8e93ab9aac128d8a14fa08b0ea91",
        },
        {
          id: 4,
          cat_id: 2,
          image:
            "https://img.freepik.com/free-vector/minimalist-background-gradient-design-style_483537-2988.jpg?w=826&t=st=1672497292~exp=1672497892~hmac=5dde22047d413f18ad76e2a13d28cce4050575c86be4749f1b0d479a2c067d87",
        },
        {
          id: 5,
          cat_id: 3,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
        },
        {
          id: 6,
          cat_id: 3,
          image:
            "https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg?w=740&t=st=1672497393~exp=1672497993~hmac=3b0286ad7b29f8baa045d3d141cc46745afec9bcc567f5df2f8a8e13641d84a5",
        },
      ],
    };
  },
  methods: {
    filterArticle(cat) {
      // Set filteredCat data to
      // selected product's name
      this.filteredCat = cat.id;
    },
    // set filteredCat data to null
    showAll() {
      this.filteredCat = null;
    },
  },
  computed: {
    // When filteredCat data changed
    // filterapps computed property will
    // automatically create new data model
    // by filtering out unmatched products
    filterapps() {
      // If filteredCat is equal to null
      // display all data
      const data = this.filteredCat
        ? this.products.filter((item) => item.cat_id === this.filteredCat)
        : this.products;
      return data;
    },
  },
  async mounted() {
    console.log("cats");
    let result = await axios.get(`http://192.168.1.63:8000/api/apps`);
    if (result.status == 200) {
      console.log("result cats", result.data.cats);
      this.cats = result.data.cats;
      console.log(this.cats);
      this.products = result.data.apps;
      console.log("result apps", this.apps);
    }
  },
};
</script>
<style scoped></style>
