<template>
  <article class="message is-warning">
    <div class="message-header">
      <p>
        <span class="icon">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
        警告
      </p>
    </div>
    <div class="message-body">
      <p>本网站包含了对动物有全身影响或对胃肠道有强烈影响的植物。请注意，本网站中的信息并<strong>不是全面</strong>的，而是最常遇到的植物的汇总。个别植物在外观上可能与本网站中使用的照片不同，请务必检查植物的名称以确定其毒性。</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WarningMessage'
})
</script> 