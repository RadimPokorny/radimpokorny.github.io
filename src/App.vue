<script setup lang="ts">
import { ref } from 'vue';

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
        type: 'YouTube', value: 'RadimGoes', icon: 'pi-youtube', color: 'blue', link: 'https://www.youtube.com/@RadimGoes' },
      { type: 'Discord', value: 'Radim11', icon: 'pi-discord', color: 'green' },
      {
        type: 'Adresa', value: 'WakaTime', icon: 'pi-hourglass', color: 'orange', link: 'https://wakatime.com/@popkorn69' }
    ]);

    const socials = ref([
      { icon: 'pi-github', color: 'gray', link: 'https://github.com/RadimPokorny' },
      { icon: 'pi-linkedin', color: 'blue', link: 'https://www.linkedin.com/in/radim-pokorn%C3%BD-46baa3354/' },
      { icon: 'pi-facebook', color: 'blue', link: 'https://www.facebook.com/radim.pokorny.737/' },
      { icon: 'pi-instagram', color: 'pink', link: 'https://www.instagram.com/radimgoes/' }
    ]);

const openLink = (url: string) => {
  window.open(url, '_blank');
};

</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Hlavička -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div class="p-6">
          <div class="flex flex-col md:flex-row items-center">
            <div class="mb-4 md:mb-0 md:mr-6">
              <Avatar image="pfp.jpg" size="xlarge" shape="circle"
                class="border-4 border-white overflow-hidden object-cover object-center" />
            </div>
            <div>
              <h1 class="text-3xl font-bold text-black">Radim Pokorný</h1>
              <p class="text-blue-500 mt-1">Front-end developer and Software engineer</p>
              <div class="flex flex-wrap mt-3 gap-2">
                <Chip label="Vue.js" icon="pi pi-code" class="bg-white text-blue-600" />
                <Chip label="TypeScript" icon="pi pi-star" class="bg-white text-blue-600" />
                <Chip label="Tailwind" icon="pi pi-palette" class="bg-white text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hlavní obsah -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Levý sloupec -->
        <div class="md:col-span-2 space-y-8">
          <!-- Sekce O mně -->
          <Card class="shadow-md">
            <template #title>About me</template>
            <template #content>
              <p class="text-gray-700 leading-relaxed">
                I am a web developer, where I am mainly focused on front-end development. I am currently studying at the
                BUT Brno University of Information Technology and I am currently developing front-end part-time for a
                company focused on cyber security.
              </p>
              <Divider />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div v-for="(info, index) in personalInfo" :key="index" class="flex items-start">
                  <i :class="`pi ${info.icon} mr-3 mt-1 text-blue-500`"></i>
                  <div>
                    <h3 class="font-semibold text-gray-800">{{ info.label }}</h3>
                    <p class="text-gray-600">{{ info.value }}</p>
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <!-- Sekce Zájmy -->
          <Card class="shadow-md mt-6">
            <template #title>My Interests</template>
            <template #content>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(hobby, index) in hobbies" :key="index" class="text-center">
                  <div class="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <i :class="`pi ${hobby.icon} text-3xl text-blue-500 mb-2`"></i>
                    <h3 class="font-medium">{{ hobby.name }}</h3>
                    <p class="text-sm text-gray-600 mt-1">{{ hobby.description }}</p>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>

        <!-- Pravý sloupec -->
        <div class="space-y-8">
          <!-- Sekce Dovednosti -->
          <Card class="shadow-md">
            <template #title>Main Skills</template>
            <template #content>
              <div v-for="(skill, index) in skills" :key="index" class="mb-4">
                <div class="flex justify-between mb-1">
                  <span class="font-medium">{{ skill.name }}</span>
                  <span class="text-gray-500">{{ skill.level }}%</span>
                </div>
                <ProgressBar :value="skill.level" :showValue="false" class="h-2"></ProgressBar>
              </div>
            </template>
          </Card>

          <!-- Sekce Kontakt -->
          <Card class="shadow-md">
            <template #title>Contact</template>
            <template #content>
              <div class="space-y-4">
                <div v-for="(contact, index) in contacts" :key="index" class="flex items-center">
                  <Button :icon="`pi ${contact.icon}`" class="p-button-rounded p-button-text p-button-plain mr-3"
                    :class="`text-${contact.color}-500`" />
                  <div>
                    <p class="text-sm text-gray-500">{{ contact.type }}</p>
                    <a :href="contact.link" class="font-medium hover:text-blue-600 transition-colors" target="_blank">
                      {{ contact.value }}
                    </a>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="flex justify-center space-x-4">
                <Button v-for="(social, index) in socials" :key="index" :icon="`pi ${social.icon}`"
                  class="p-button-rounded p-button-text" :class="`text-${social.color}-500 hover:bg-${social.color}-50`"
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
</style>
