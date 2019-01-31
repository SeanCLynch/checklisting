<template>
  <div id="bg-boxes" class="container mx-auto">
    <div class="flex flex-col">

      <!-- Hero & Tagline -->
      <div id="hero" class="flex flex-col h-screen">
        <div class="text-center self-center mt-auto mb-auto rounded-lg p-4">

          <div class="font-sans font-bold text-3xl lg:text-5xl text-grey-darkest pb-2">
            Checklisting, together
          </div>

          <div class="mt-4 mb-4 text-sm leading-normal lg:text-xl text-grey-darkest font-sans">
            Checklisting.Club is a simple, principled, collaborative checklist editor.
          </div>

          <div class="align-center">
            <button class="px-3 py-2 border rounded text-lg text-white bg-green hover:text-green hover:border-green hover:bg-white">
              Sign up
            </button>
            <button class="px-3 py-2 border rounded text-lg text-green bg-white hover:text-white hover:border-white hover:bg-green">
              Learn more
            </button>
          </div>

        </div>
      </div>

      <!-- Features -->
      <div id="pricing" class="flex-1 text-center pt-4 bg-purple">
        <div class="mt-4">
          <div class="text-xl font-semibold text-white">Features</div>
        </div>
      </div>

      <div id="features" class="flex flex-wrap bg-purple text-white pb-6">
        <div class="lg:flex-1">
          <div class="text-center mt-8 text-xl font-medium">Easily create checklists</div>
          <div class="text-center text-sm leading-normal p-4">Use our editor to codify and manage complex processes. We let the list speak for itself.</div>
        </div>

        <div class="lg:flex-1">
          <div class="text-center mt-8 text-xl font-medium">Check with best practices</div>
          <div class="text-center text-sm leading-normal p-4">Maximize your efficiency using well researched best practices such as length, wording and type. </div>
        </div>

        <div class="lg:flex-1">
          <div class="text-center mt-8 text-xl font-medium">Control your formatting</div>
          <div class="text-center text-sm leading-normal p-4">Format your checklists however you would like to using the power and flexibility of LaTex. </div>
        </div>

        <div class="lg:flex-1">
          <div class="text-center mt-8 text-xl font-medium">Share and collaborate</div>
          <div class="text-center text-sm leading-normal p-4">Work with your community to make great things happen! Share and build upon the work of your peers! </div>
        </div>
      </div>

      <!-- Example -->
      <div id="example" class="flex-1 text-center mb-6 p-4 pt-6">
        <div class="mt-6 mb-6">
          <div class="text-xl font-semibold text-grey-darkest">Open Experimentation</div>
          <div class="text-sm leading-normal p-4">Try out any of our sample lists below and see for yourself!</div>
	  <div class="align-center mb-6">
	    <button class="px-3 py-2 border rounded text-white bg-purple">Security</button>
	    <button class="px-3 py-2 border rounded text-white bg-purple">Childbirth</button>
        </div>
        <img src="@/assets/list-example.png" style="width: 75%" />
      </div>

      <!-- Social Proof -->
      <div id="proof" class="flex flex-col">
        <div class="flex-no-grow self-center text-center m-8 mb-24 p-4 rounded-lg bg-purple-light w-auto">
          10,000 / 10,000! Amazing Stats!
        </div>
      </div>

      <!-- Pricing -->
      <div id="pricing" class="flex-1 text-center pt-4 bg-grey-light">
        <div class="mt-4">
          <div class="text-xl font-semibold text-black">Pricing</div>
          <div class="text-sm leading-normal p-4">Pay what you want.</div>
        </div>
      </div>

      <div id="features" class="flex flex-wrap">
        <div class="lg:flex-1 bg-grey-light mr-auto ml-auto rounded">
          <div class="text-center mt-6 text-xl font-medium">No Account</div>
          <div class="text-center text-sm leading-normal p-4 mr-16 ml-16 p-4">With no account you can view and edit checklists, but not save any.</div>
        </div>

        <div class="lg:flex-1 bg-grey-light mr-auto ml-auto rounded">
          <div class="text-center mt-6 text-xl font-medium">Free Account</div>
          <div class="text-center text-sm leading-normal p-4 mr-16 ml-16 p-4">With a free account you can view, edit, save and share any public checklists.</div>
        </div>

        <div class="lg:flex-1 bg-grey-light mr-auto ml-auto rounded">
          <div class="text-center mt-6 text-xl font-medium">Paid Account</div>
          <div class="text-center text-sm leading-normal p-4 mr-16 ml-16">With a paid account you can view, edit, save and share any public or private checklists.</div>
        </div>
      </div>


      <!-- Call to Action -->
      <div id="cta-top" class="flex-1 text-center pt-8">
        <div class="mt-8 mb-4">
          <div class="text-xl font-semibold text-grey-darkest">Sign up today!</div>
        </div>
      </div>

      <div id="cta" class="flex">
        <div class="text-center self-center mr-auto ml-auto rounded-lg pb-20">
          <div class="align-center bg-green rounded">
            <form class="w-full max-w-sm">
              <div class="flex items-center border-b border-b-2 border-grey rounded py-2">
                <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Full name">
                <button class="flex-no-shrink bg-white hover:bg-purple border-white hover:border-purple hover:text-white text-sm border-4 text-green py-1 px-2 mr-2 rounded" type="button">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <!-- Footer -->
      <section class="bg-purple py-8 w-full">
        <div class="container mx-auto px-8">
            <div class="table w-full">
                <div class="block sm:table-cell">
                    <p class="uppercase text-purple-lighter text-sm sm:mb-6">Links</p>
                    <ul class="list-reset text-xs mb-6">
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">FAQ</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">Help</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">Support</a>
                        </li>
                    </ul>
                </div>
                <div class="block sm:table-cell">
                    <p class="uppercase text-purple-lighter text-sm sm:mb-6">Legal</p>
                    <ul class="list-reset text-xs mb-6">
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">Terms</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div class="block sm:table-cell">
                    <p class="uppercase text-purple-lighter text-sm sm:mb-6">Social</p>
                    <ul class="list-reset text-xs mb-6">
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">Facebook</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">Linkedin</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-white">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div class="block sm:table-cell">
                    <p class="uppercase text-purple-lighter text-sm sm:mb-6">Company</p>
                    <ul class="list-reset text-xs mb-6">
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-grey-dark">Official Blog</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-grey-dark">About Us</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="#" class="text-purple-lighter hover:text-grey-dark">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
	name: 'Homepage',
  components: {
    'navbar': Navbar,
  }
};
</script>

<style>
#bg-boxes {
  background-size: auto;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23a779e9' fill-opacity='0.15' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

#hero, #cta {
  background-image: linear-gradient(to bottom, transparent, rgba(255,0,0,0), rgba(214,187,252,1))
}

#example {
  background-image: linear-gradient(to top, transparent, rgba(255,0,0,0), rgba(214,187,252,1))
}

#cta-top {
  background-image: linear-gradient(to top, transparent, rgba(255,0,0,0), rgba(248,250,252,1))
}

#proof {
  background-image: linear-gradient(to bottom, transparent, rgba(255,0,0,0), rgba(248,250,252,1))
}
</style>
