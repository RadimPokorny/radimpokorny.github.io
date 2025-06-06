<script setup lang="ts">
import { ref } from 'vue'

const primaryColor = 'text-green-500' // Hlavní barva theme
const primaryBgColor = 'bg-green-500' // Pro tlačítka atd.
const primaryHoverColor = 'hover:bg-green-100' // Pro hover efekty

const personalInfo = ref([
  { label: 'Availability', value: 'Always open to collaboration', icon: 'pi-clock' },
  { label: 'Region', value: 'Brno, Czech Republic', icon: 'pi-map-marker' },
  { label: 'E-mail', value: 'radimpokorny.2@seznam.cz', icon: 'pi-envelope' },
  { label: 'Languages', value: 'German, English, Spanish', icon: 'pi-language' },
  { label: 'Education', value: 'BUT FIT, Bachelor\'s degree ', icon: 'pi-book' },
  { label: 'Occupation', value: 'Junior Frontend Developer', icon: 'pi-briefcase' }
]);

const hobbies = ref([
  { name: 'Programming', icon: 'pi-code', description: 'Algorithm creation' },
  { name: 'Hardware', icon: 'pi-microchip', description: 'Assembly' },
  { name: 'Sport', icon: 'pi-wave-pulse', description: 'Running, Gym ' },
  { name: 'Football', icon: 'pi-megaphone', description: 'Player, Supporter' },
  { name: 'Music', icon: 'pi-headphones', description: 'AI-assisted' },
  { name: 'Gaming', icon: 'pi-prime', description: 'Gameplay enjoyer' }
]);

const skills = ref([
  { name: 'Vue.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind/CSS', level: 95 },
  { name: 'Python', level: 60 },
  { name: 'C/C++', level: 70 },
]);

const contacts = ref([
  {
    type: 'YouTube', value: 'RadimGoes', icon: 'pi-youtube', link: 'https://www.youtube.com/@RadimGoes' 
  },
  { 
    type: 'Discord', value: 'Radim11', icon: 'pi-discord', link: 'https://discord.com/users/1028856269307785286'
  },
  {
    type: 'WakaTime', value: 'popkorn69', icon: 'pi-hourglass', link: 'https://wakatime.com/@popkorn69' 
  }
]);

const socials = ref([
  { icon: 'pi-github', color: '', link: 'https://github.com/RadimPokorny' },
  { icon: 'pi-linkedin', color: 'text-blue-600', link: 'https://www.linkedin.com/in/radim-pokorn%C3%BD-46baa3354/' },
  { icon: 'pi-facebook', color: 'text-blue-600', link: 'https://www.facebook.com/radim.pokorny.737/' },
  { icon: 'pi-instagram', color: 'text-pink-500', link: 'https://www.instagram.com/radimgoes/' }
]);

const openLink = (url: string) => {
  if (url) window.open(url, '_blank')
}


</script>

<template>
  <div class="min-h-screen py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header Card -->
      <Card class="mb-8 shadow-lg">
        <template #content>
          <div class="flex flex-col md:flex-row items-center">
            <div class="mb-4 md:mb-0 md:mr-6">
              <Avatar image="pfp.jpg" size="xlarge" shape="circle"
                class="border-4 border-white shadow-md" />
            </div>
            <div>
              <h1 class="text-3xl font-bold ">Radim Pokorný</h1>
              <p class=" mt-1">Front-end developer and Software engineer</p>
              <div class="flex flex-wrap mt-3 gap-2">
                <Chip label="Vue.js" icon="pi pi-code" class="`bg-green-100 text-green-800`" />
                <Chip label="TypeScript" icon="pi pi-star" class="bg-purple-100 text-purple-800" />
                <Chip label="Tailwind" icon="pi pi-palette" class="bg-cyan-100 text-cyan-800" />
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Left Column -->
        <div class="md:col-span-2 space-y-6">
          <!-- About Me Section -->
          <Card>
            <template #title>
              <div class="text-xl font-semibold ">About me</div>
            </template>
            <template #content>
              <p class=" leading-relaxed">
                I am a web developer, where I am mainly focused on front-end development. I am currently studying at the
                BUT Brno University of Information Technology and I am currently developing front-end part-time for a
                company focused on cyber security.
              </p>
              <Divider />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div v-for="(info, index) in personalInfo" :key="index" class="flex items-start">
                  <i :class="`pi ${info.icon} mr-3 mt-1 ${primaryColor}`"></i>
                  <div>
                    <h3 class="font-semibold ">{{ info.label }}</h3>
                    <p class="">{{ info.value }}</p>
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <!-- Interests Section -->
          <Card>
            <template #title>
              <div class="text-xl font-semibold ">My Interests</div>
            </template>
            <template #content>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card v-for="(hobby, index) in hobbies" :key="index" 
                      class="hover:shadow-lg transition-all border-1 surface-border">
                  <template #content>
                    <div class="text-center p-3">
                      <i :class="`pi ${hobby.icon} text-3xl mb-2 ${primaryColor}`"></i>
                      <h3 class="font-medium ">{{ hobby.name }}</h3>
                      <p class="text-sm  mt-1">{{ hobby.description }}</p>
                    </div>
                  </template>
                </Card>
              </div>
            </template>
          </Card>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Skills Section -->
          <Card>
            <template #title>
              <div class="text-xl font-semibold ">Main Skills</div>
            </template>
            <template #content>
              <div v-for="(skill, index) in skills" :key="index" class="mb-4">
                <div class="flex justify-between mb-1">
                  <span class="font-medium ">{{ skill.name }}</span>
                  <span class="">{{ skill.level }}%</span>
                </div>
                <ProgressBar :value="skill.level" :showValue="false" class="h-2" :class="primaryBgColor"></ProgressBar>
              </div>
            </template>
          </Card>

          <!-- Contact Section -->
          <Card>
            <template #title>
              <div class="text-xl font-semibold ">Contact</div>
            </template>
            <template #content>
              <div class="space-y-4">
                <div v-for="(contact, index) in contacts" :key="index" 
                     class="flex items-center p-2 rounded transition-colors">
                  <Button :icon="`pi ${contact.icon}`" 
                          class="p-button-rounded p-button-text mr-3" 
                          @click="openLink(contact.link)" />
                  <div>
                    <p class="text-sm ">{{ contact.type }}</p>
                    <a v-if="contact.link" :href="contact.link" 
                       class="font-medium  hover:text-green-500 transition-colors" 
                       target="_blank">
                      {{ contact.value }}
                    </a>
                    <span v-else class="font-medium ">{{ contact.value }}</span>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="flex justify-center space-x-2">
                <Button v-for="(social, index) in socials" :key="index" 
                        :icon="`pi ${social.icon}`"
                        class="p-button-rounded p-button-text" 
                        :class="[social.color, primaryHoverColor]"
                        @click="openLink(social.link)" />
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Můžete přidat vlastní CSS pro Aura theme */
i{
  color: var(--p-button-text-primary-color) !important;
}
</style>