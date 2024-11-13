// components/Loader.js
const Loader = () => {
    return (
      <div class="flex items-center justify-center h-screen">
  <div class="relative w-32 h-20">
    <p class="absolute top-0 p-0 m-0 text-lg text-[#C8B6FF] animate-text">Loading...</p>
    <span class="absolute bottom-0 block h-6 w-6 bg-[#9A79FF] rounded-full animate-loading">
      <span class="absolute top-0 left-0 w-full h-full bg-[#D1C2FF] rounded-full animate-loading2"></span>
    </span>
  </div>
</div>

    );
  };
  
  export default Loader;
  