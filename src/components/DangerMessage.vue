<template>
  <article class="message is-danger">
    <div class="message-header">
      <p>
        <span class="icon">
          <i class="fas fa-skull-crossbones"></i>
        </span>
        危险
      </p>
    </div>
    <div class="message-body">
      <p>本网站提供的毒性和危险性评判仅供参考，不保证准确性。因此，不应依赖此类评判。必要时，请寻求专业建议。如果您认为您的动物生病了或可能摄入了有毒物质，或对本网站信息有疑问，请联系当地兽医。</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DangerMessage'
})
</script> 