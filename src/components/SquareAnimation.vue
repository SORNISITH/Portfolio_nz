<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, onMounted, onBeforeUnmount, type CSSProperties } from 'vue'

const initialOrder = [
  'rgba(120, 120, 120, 0.1)', // Light gray
  'rgba(0, 122, 255, 0.1)', // Light blue
  'rgba(34, 197, 94, 0.1)', // Light green
  'rgba(55, 65, 81, 0.1)', // Light dark-gray/slate
]

const order = ref([...initialOrder])

let intervalId: number | null = null
const getRotationClass = (index) => {
  const rotations = ['rotate-0', 'rotate-90', 'rotate-90', 'rotate-0']
  return rotations[index % rotations.length]
}
onMounted(() => {
  intervalId = window.setInterval(() => {
    order.value = shuffle(order.value)
  }, 1000)
})

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
}

const container: CSSProperties = {
  listStyle: 'none',
  padding: '0px',
  margin: '0px',
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1px',
  width: '300px',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const item = {
  width: '100px',
  height: '88px',
  borderRadius: '10px',
}
</script>
<style scoped>
.box {
  width: 60vmin;
  height: 50vmin;
  display: grid;
  place-content: center;
  color: white;
  text-shadow: 0 1px 0 #000;
  --border-angle: 0turn;
  --main-bg: conic-gradient(from var(--border-angle), #213, #112 5%, #112 60%, #213 95%);

  border: solid 5px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(
    from var(--border-angle),
    transparent 25%,
    #08f,
    #f03 99%,
    transparent
  );

  background:
    var(--main-bg) padding-box,
    var(--gradient-border) border-box,
    var(--main-bg) border-box;

  background-position: center center;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  &:hover {
    animation-play-state: paused;
  }
}

@property --border-angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0turn;
}
</style>
<template>
  <ul :style="container">
    <motion.li
      class="p-1"
      v-for="(backgroundColor, index) in order"
      :key="backgroundColor"
      layout
      :transition="spring"
      :style="{ ...item }"
    >
      <svg
        v-if="index == 0 || index == 3"
        :class="getRotationClass(index)"
        id="BG"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <clipPath id="clippath">
            <path
              d="M500,0h.001C775.958,0,1000,224.042,1000,499.999h0c0,275.958-224.042,500.001-499.999,500.001h-.001C224.042,1000,0,775.958,0,500.001H0C0,224.042,224.042,0,500,0Z"
              fill="none"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#clippath)">
          <g>
            <polygon points="292.89 0 292.89 1000 0 707.11 0 292.89 292.89 0" fill="#231f20" />
            <polygon
              points="1000 292.89 1000 707.11 707.11 1000 707.11 0 1000 292.89"
              fill="#231f20"
            />
            <path
              d="M292.896-.002H-.002V292.896L707.105,1000.002h292.898v-292.898S292.896-.002,292.896-.002Zm325.436,498.695c0,65.188-52.846,118.034-118.034,118.034h0c-65.188,0-118.034-52.845-118.034-118.034h0c0-65.189,52.846-118.034,118.034-118.034h0c65.188,0,118.034,52.845,118.034,118.034h0Z"
              fill="#414042"
            />
          </g>
          <rect
            x="426.253"
            y="426.285"
            width="145.898"
            height="145.898"
            rx="72.949"
            ry="72.949"
            fill="#231f20"
          />
        </g>
      </svg>

      <svg
        v-if="index !== 0 && index !== 3"
        :class="getRotationClass(index)"
        id="BG"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <clipPath id="clippath">
            <path
              d="M500,0h.001C775.958,0,1000,224.042,1000,499.999h0c0,275.958-224.042,500.001-499.999,500.001h-.001C224.042,1000,0,775.958,0,500.001H0C0,224.042,224.042,0,500,0Z"
              fill="none"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#clippath)">
          <g>
            <polygon points="292.89 0 292.89 1000 0 707.11 0 292.89 292.89 0" fill="#231f20" />
            <polygon
              points="1000 292.89 1000 707.11 707.11 1000 707.11 0 1000 292.89"
              fill="#231f20"
            />
            <path
              d="M292.896-.002H-.002V292.896L707.105,1000.002h292.898v-292.898S292.896-.002,292.896-.002Zm325.436,498.695c0,65.188-52.846,118.034-118.034,118.034h0c-65.188,0-118.034-52.845-118.034-118.034h0c0-65.189,52.846-118.034,118.034-118.034h0c65.188,0,118.034,52.845,118.034,118.034h0Z"
              fill="#414042"
            />
          </g>
          <rect
            x="426.253"
            y="426.285"
            width="145.898"
            height="145.898"
            rx="72.949"
            ry="72.949"
            fill="#231f20"
          />
        </g>
      </svg>
    </motion.li>
  </ul>
</template>
