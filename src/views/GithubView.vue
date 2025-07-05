<script setup>
import axios from 'axios'
import { ref, onMounted, onUnmounted } from 'vue'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/stackoverflow-light.css'

const layout = ref(1)
const token = import.meta.env.VITE_GITHUB_TOKEN
const profileData = ref(null)
const repoData = ref(null)
const isActive = ref(0)
const fileObject = ref(null)
const isFolderTreeLoaded = ref(false)
const currentRepo = ref(null)
const currentFile = ref(null)
const isBlobLoaded = ref(true)
const rawBlob = ref(null)
const decodeContent = ref('')
const decodeType = ref('')
const slide = ref(false)
const isLg = ref(false)

function checkScreen() {
  isLg.value = window.matchMedia('(min-width: 1024px)').matches
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})
function copyUrl(url) {
  navigator.clipboard.writeText(url).catch((err) => alert('Failed to copy: ' + err))
}

onMounted(async () => {
  const getDataProfile = await axios.get('https://api.github.com/users/SORNISITH', {
    headers: {
      Authorization: `token ${token}`,
    },
  })
  const getDataRepo = await axios.get('https://api.github.com/users/SORNISITH/repos', {
    headers: {
      Authorization: `token ${token}`,
    },
  })
  getAllFileFolderRepo(getDataRepo.data[0])
  profileData.value = getDataProfile.data
  repoData.value = getDataRepo.data
  console.log('Repo Data:', repoData.value)
  console.log('Profile Data:', profileData.value)
})

const getRawBlob = async (url, type, name) => {
  isBlobLoaded.value = true
  const result = await axios.get(url, {
    headers: { Authorization: `token ${token}` },
  })
  rawBlob.value = result.data
  isBlobLoaded.value = false
  decodeType.value = type
  currentFile.value = name
  if (type == 'png' || type == 'jpg' || type == 'jpeg' || type == 'svg') {
    decodeContent.value = `data:image/${type};base64,${result.data.content}`
  } else {
    decodeContent.value = atob(result.data.content)
  }
}

const getAllFileFolderRepo = async (data) => {
  isFolderTreeLoaded.value = false
  const result = await axios.get(
    `https://api.github.com/repos/SORNISITH/${data.name}/git/trees/${data.default_branch}?recursive=1`,
    {
      headers: { Authorization: `token ${token}` },
    },
  )
  console.log('File Object:', result.data)
  fileObject.value = result.data
  isFolderTreeLoaded.value = true
}
</script>

<template>
  <div v-if="!profileData" class="flex w-full items-center justify-center h-100">
    <div
      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
  </div>
  <div v-else class="bg-gray-100 flex flex-col w-full">
    <div class="">
      <a
        target="_blank"
        :href="profileData.html_url"
        class="block w-[100%] rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
      >
        <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
          <div class="sm:order-last sm:shrink-0">
            <img
              alt="github profile"
              :src="profileData?.avatar_url"
              class="size-32 rounded-full object-cover sm:size-[100px]"
            />
          </div>

          <div class="mt-4 sm:mt-0">
            <h3 class="font-semibold text-blue-900 hover:underline text-4xl">
              {{ profileData?.name || '' }}
            </h3>

            <a
              target="_blank"
              :href="profileData.html_url"
              class="mt-4 text-2xl line-clamp-2 text-pretty text-gray-700"
            >
              {{ profileData.html_url }}
            </a>

            <div class="text-2xl items-center flex">
              <span> Repos : {{ profileData.public_repos }} </span>
              <span class="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700">
                Public
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div v-show="layout == 2" class="pt-0">
      <div class="border-gray-300 border-1 w-full h-10 flex p-2 items-center">
        <button
          @click="
            () => {
              layout = 1
              decodeContent = ''
            }
          "
          class="mr-20 bg-red-300 p-2 cursor-pointer hover:text-red-600 hover:scale-120"
        >
          {{ '< ' }}Back
        </button>
        <p>PATH : {{ currentFile }}</p>
      </div>

      <div v-if="isBlobLoaded" class="flex w-full items-center justify-center h-100">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
          >
        </div>
      </div>
      <div
        v-if="
          decodeType == 'png' || decodeType == 'jpg' || decodeType == 'jpeg' || decodeType == 'svg'
        "
        class="bg-gray-200 h-200 overflow-y-scroll mt-1 w-full flex p-2"
      >
        <img :src="decodeContent" class="w-full h-auto object-contain" />

        <!-- <pre>{{ decodeContent }}</pre> -->
      </div>

      <div v-else class="bg-gray-200 h-200 overflow-scroll mt-1 w-full flex p-1">
        <hljsVuePlugin.component autodetect class="w-full h-full" :code="decodeContent" />
        <!-- <pre>{{ decodeContent }}</pre> -->
      </div>
    </div>
    <div class="cursor-pointer bg-white shadow-sm p-4 w-full border border-gray-200">
      <span @click="slide = !slide" class="flex select-none gap-5 items-center w-full"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          :class="slide ? 'rotate-90' : ''"
          fill="#000000"
        >
          <path
            d="M560-320h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"
          />
        </svg>
        <p class="text-blue-500 text-xl">File/Folder</p>
      </span>
    </div>

    <div v-show="layout == 1" class="pt-0">
      <div class="rounded-md relative border flex w-full border-gray-100 shadow-sm">
        <div
          v-show="!slide"
          class="flex absolute top-0 left-0 w-[100%] lg:static lg:w-[50%] scale-100 bg-gray-50 flex-col h-200 overflow-y-scroll"
        >
          <div
            @click="
              () => {
                isActive = index
                currentRepo = repo.name
                getAllFileFolderRepo(repo)

                if (isLg) {
                } else {
                  slide = true
                }
              }
            "
            :key="repo.id"
            v-for="(repo, index) in repoData"
            class="border-l-5 border-green-500 cursor-pointer hover:bg-blue-100 transition-colors duration-200 p-4 w-[99%]"
            :class="{ 'bg-blue-200': index == isActive }"
          >
            <div class="w-full ml-5 flex justify-between p-1 items-start">
              <a
                :href="repo.html_url"
                target="_blank"
                class="text-xl font-semibold text-blue-600 hover:underline"
              >
                {{ repo.name }}
              </a>
              <span class="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700">
                {{ index + 1 + ' : ' }}
                Public
              </span>
            </div>
            <!-- ✅ Clone URL with Copy Button -->
            <div class="flex w-full items-center justify-between bg-gray-200 rounded-md px-3 py-2">
              <code @click="copyUrl(repo.html_url)" class="text-sm text-gray-800 break-all">
                {{ repo.html_url }}
              </code>
              <button
                @click="copyUrl(repo.html_url)"
                class="ml-3 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 active:scale-95 transition"
              >
                Copy
              </button>
            </div>

            <div class="flex m-2 flex-wrap gap-3 text-sm text-gray-500 mb-4">
              <div>
                🌿 Default Branch:
                <span class="font-medium text-gray-700">master</span>
              </div>
              <div>📁 Forked: <span class="font-medium text-gray-700">Yes</span></div>
              <div>⭐ Stars: <span class="font-medium text-gray-700">0</span></div>
              <div>🍴 Forks: <span class="font-medium text-gray-700">0</span></div>
              <div>
                🕒 Updated:
                <span class="font-medium text-gray-700">2024-07-20</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[100%] lg:[60%] h-200 overflow-hidden">
          <div v-if="!isFolderTreeLoaded" class="flex w-full items-center justify-center h-100">
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
              >
            </div>
          </div>
          <div v-else class="flex w-full h-full overflow-y-scroll">
            <ol class="w-full">
              <li
                class="flex w-full items-center hover:bg-gray-200 duration-500 transition-colors cursor-pointer p-1 border-b border-gray-200"
                :key="index"
                v-for="(tree, index) in fileObject.tree"
              >
                <span class="w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path
                      d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
                    />
                  </svg>
                </span>
                <span class="mr-5 bg-blue-200 rounded-sm p-2 w-20">
                  .{{ tree.path.split('.').pop().slice(-4) }}</span
                >
                <a
                  @click="
                    () => {
                      layout = 2
                      getRawBlob(tree.url, tree.path.split('.').pop(), tree.path)
                    }
                  "
                  class="hover:underline w-[50%]"
                >
                  {{ tree.path }}
                </a>
                <code class="flex items-center text-sm text-gray-500">
                  size
                  {{ tree.size }} kb</code
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
