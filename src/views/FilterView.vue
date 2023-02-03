<template>
  <div class="container graphics">
    <!-- text -->
    <div class="container pt-lg-5">
      <div class="row d-flex justify-content-center">
        <!-- text -->
        <div class="col-md-10">
          <h1
            class="text-end text-lg-center background backgroundcenter fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            data-aos-once="false"
          >
            <strong> جرافيك </strong>
          </h1>
          <div style="width: 100%">
            <p class="fw-bold text-center">
              نساعدك في تحقيق أهدافك والمساهمة في جعل فكرتك حية على أرض الواقع،
              بتقديم خدمات تقنية وتسويقية احترافية.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- FILTER BUTTONS -->
    <div class="filters text-center mb-3">
      <!-- SHOW ALL BUTTON -->
      <!-- FILTER BUTTONS -->
      <div class="p-3" style="overflow: auto; white-space: nowrap">
        <button
          class="filter-button fw-bold bttn btn-border-3"
          @click="showAll()"
        >
          الكل
        </button>
        <button
          class="filter-button fw-bold bttn btn-border-3"
          v-for="(cat, index) in cats"
          :key="index"
          @click="filterArticle(cat)"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>
    <!-- products -->
    <div class="row d-flex justify-content-center">
      <!-- text -->
      <div class="col-md-10">
        <div class="row justify-content-start">
          <div
            class="col-lg-3 containerr col-md-6 p-3"
            v-for="item in filterapps"
            :key="item.id"
            data-aos="zoom-in"
            :data-aos-delay="100 + i * 10"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-once="1"
          >
            <div class="card border-0 graphics_img">
              <div class="images" v-viewer.static="{ title: false }">
                <img
                  :src="item.image"
                  height="200"
                  title="false"
                  style="width: 100%"
                />
              </div>
              <!-- <div class="text-center">
                <img :src="item.image" height="200" style="width: 100%" />
              </div> -->
              <!-- directive -->
              <!-- <div class="images" v-viewer>
                <img
                  style="width: 200px"
                  v-for="src in images"
                  :key="src"
                  :src="src"
                />
              </div> -->
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
  name: "GraphicCom",
  data() {
    return {
      // images: [
      //   "https://img.freepik.com/free-photo/close-up-young-adult-enjoying-warm-drink_23-2149134373.jpg?w=740&t=st=1672488370~exp=1672488970~hmac=87f604c13d559be68b0c9a47f1ba4e7b0b87d3d7e31904b9ba02e3e4adff2cd1",
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
      // ],
      filteredCat: null,
      cats: [
        { id: 1, name: "graphic1" },
        { id: 2, name: "graphic2" },
        { id: 3, name: "graphic3" },
      ],
      products: [
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
<style scoped>
/************************************scrollbar**********************************/
.graphics ::-webkit-scrollbar {
  height: 5px;
  background-color: #421a1a;
}
/* Track */
.graphics ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.graphics ::-webkit-scrollbar-thumb {
  background: #008ab8;
  transition: all 1s ease-in-out;
}

/* Handle on hover */
.graphics ::-webkit-scrollbar-thumb:hover {
  background: #8e8f8f;
}
/*********************************button product css الاقسام********************************* */
.graphics .bttn {
  position: relative;
  display: inline-block;
  /* margin: 15px;
        padding: 12px 27px; */
  text-align: center;
  font-size: 16px;
  /* letter-spacing: 1px; */
  text-decoration: none;
  color: #999999;
  background: #ffffff;
  border: 3px solid #999999;
  cursor: pointer;
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}
.graphics .bttn.btn-border-3::after,
.bttn.btn-border-3::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: 0.5s;
}

.graphics .bttn.btn-border-3::after {
  top: -9px;
  left: -9px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.graphics .bttn.btn-border-3::before {
  bottom: -9px;
  right: -9px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.graphics .bttn.btn-border-3:hover {
  color: #111a53;
  border: transparent;
}

.graphics .bttn.btn-border-3:hover::after,
.bttn.btn-border-3:hover::before {
  width: 30px;
  height: 30px;
  border-color: #ffe711;
}
.graphics .filter-button {
  /* text-transform: uppercase; */
  margin: 6px 6px;
  width: 130.43px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
}
/*******************************************/
.graphics.containerr {
  /* padding: 1em 0; */
  /* float: left; */
  /* width: 50%; */
}

.graphics.item {
  /* flex: 0 32%; */
  /* height: 100px; */
  margin-bottom: 2%; /* (100-32*3)/2 */
}

/***********************card style*******************************/
.graphics {
  direction: rtl;
  color: #111a53;
}

.graphics .containerr {
  padding: 1em 0;
  float: left;
  width: 50%;
}
.graphics .graphics_img {
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  cursor: grab;
}
.graphics .graphics_img img {
  transition: all 0.3s ease-in-out;
  transform: scale(0.9);
}
.graphics .graphics_img:hover img {
  transform: scale(1);
}
/* mobile */
@media screen and (max-width: 640px) {
  .graphics .containerr {
    display: block;
    width: 100%;
  }
  .graphics .graphics_img {
    width: 100%;
    object-fit: cover;
  }
  .graphics .graphics_img img {
    width: 100%;
  }
}
/* ipad */
@media screen and (min-width: 768px) {
  .graphics .containerr {
    width: 48.33333%;
  }
  .graphics .graphics_img {
    width: 100%;
    object-fit: cover;
  }
  .graphics .graphics_img img {
    width: 100%;
    height: 150px;
  }
}

/* Large devices (laptops/desktops) */
@media screen and (min-width: 920px) {
  .graphics .containerr {
    width: 33.33333%;
  }
  .graphics .graphics_img {
    height: 220px;
    width: 100%;
  }
  .graphics .graphics_img img {
    max-width: 100%;
  }
}
@media only screen and (min-width: 1024px) {
  .graphics .containerr {
    width: 33.33333%;
  }
  .graphics .graphics_img {
    height: 200px;
    width: 100%;
    /* background-color: #111a53; */
  }
  .graphics .graphics_img img {
    max-width: 100%;
    height: 200px;
  }
}
</style>
