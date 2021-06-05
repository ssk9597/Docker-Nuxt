<template>
  <div>
    <input type="text" v-model="name" />
    <br />
    <button @click="addName">送信する</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api';

declare global {
  interface Window {
    liff: any;
  }
}
window.liff = window.liff || {};

export default defineComponent({
  setup() {
    const name = ref<string>('');

    onMounted(async () => {
      await window.liff.init({
        liffId: process.env.LIFF_ID as string,
      });
    });

    const addName = async (): Promise<void> => {
      try {
        await window.liff.sendMessages([
          {
            type: 'text',
            text: name.value,
          },
        ]);
        await window.liff.closeWindow();
      } catch (err: any) {
        window.alert(err);
        await window.liff.closeWindow();
      }
    };

    return {
      name,
      addName,
    };
  },
});
</script>
