<template>
  <h1>hello this is ligh box</h1>
  <div class="container">
    <div class="grid" ref="grid" id="grid">test</div>
    <p>This is a p element.</p>
    <p>This is a p element.</p>
    <p id="demo"></p>
    <div id="main">click</div>
    <div id="notice"></div>
    <div></div>
    <div>
      <!-- directive -->
      <div class="images" v-viewer>
        <img
          style="width: 200px; height: 130px; margin: 5px"
          v-for="src in images"
          :key="src"
          :src="src"
        />
      </div>
    </div>
  </div>
</template>
<script>
import getAllUrlParams from "@/assets/js/javascrip.js";
export default {
  name: "GraphicCom",
  components: {},
  data() {
    return {
      images: [
        "https://img.freepik.com/free-photo/close-up-young-adult-enjoying-warm-drink_23-2149134373.jpg?w=740&t=st=1672488370~exp=1672488970~hmac=87f604c13d559be68b0c9a47f1ba4e7b0b87d3d7e31904b9ba02e3e4adff2cd1",
        "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=900&t=st=1672497244~exp=1672497844~hmac=5d3ac2cf1dae973a4aa1010048251ffad4cf8e93ab9aac128d8a14fa08b0ea91",

        "https://img.freepik.com/free-vector/minimalist-background-gradient-design-style_483537-2988.jpg?w=826&t=st=1672497292~exp=1672497892~hmac=5dde22047d413f18ad76e2a13d28cce4050575c86be4749f1b0d479a2c067d87",

        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",

        "https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg?w=740&t=st=1672497393~exp=1672497993~hmac=3b0286ad7b29f8baa045d3d141cc46745afec9bcc567f5df2f8a8e13641d84a5",
      ],
    };
  },
  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
      });
    },
  },
  mounted() {
    this.urls = getAllUrlParams();
  },
};
</script>
<style></style>
