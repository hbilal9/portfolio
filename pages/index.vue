<script setup>
import { ref } from 'vue';
import { mdiGithub, mdiInstagram, mdiTwitter, mdiLinkedin, mdiArrowTopRight, mdiLinkVariant, mdiArrowRight, mdiStar, mdiTrayArrowDown   } from '@mdi/js';

function handleTheMouseMove(e){
        const x = e.clientX;
        const y = e.clientY;
        mouseLightRef.value.style.left = (x + 'px');
        mouseLightRef.value.style.top =  (y + 'px');
        mouseLightRef.value.style.opacity = '1';
}

const mouseLightRef = ref('');
onMounted(() => {
      document.addEventListener('mousemove', handleTheMouseMove);
  });


onBeforeUnmount(() => {
    document.removeEventListener('mousemove', handleTheMouseMove);
  });

</script>

<template>
  <div class="relative w-full h-full">
      <div ref="mouseLightRef" class="hidden lg:block blur-xl opacity-0 fixed top-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-0 pointer-events-none z-50 h-[800px] w-[800px] bg-color"></div>
    <!-- <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style=""></div> -->
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:flex lg:justify-between lg:gap-4">

        <!-- Navbar -->
        <Navbar></Navbar>

        <div id="content" class="pt-24 lg:w-1/2 lg:py-16">

          <!-- About Section -->
          <About></About>

          <!-- Experience Section -->
          <Experience></Experience>

          <!-- Projects section -->
          <Projects></Projects>


          <!-- APIS integration section-->
          <APISIntegrations></APISIntegrations>

          <!-- Footer -->
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>  
</template>
<style scoped>
.bg-color{
  /* background: radial-gradient(600px at 300px 300px, rgba(29, 78, 216, 0.15), transparent 80%); */
  background: radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%);
}
</style>