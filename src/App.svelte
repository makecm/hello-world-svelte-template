<script lang="ts">
  import type { TemplateProps } from './types/global';

  import Logos from './components/Logos.svelte';
  import Shapes from './components/Shapes.svelte';

  export let templateProps: TemplateProps;
</script>

<div id="app" style="background-image: url({ templateProps.backgroundImage })">

  {#if templateProps.showLogos}
  <div style="z-index: 2;">
    <Logos />
  </div>
  {/if}

  <h1>{ templateProps.headline }</h1>

  <Shapes />
</div>

<style>
  #app {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  h1 {
    font-size: clamp( 16px, 10vh, 250px);
    font-weight: 700;
    line-height: 100%;
    color: #1f2a44;
    text-align: center;
    width: 100%;
    padding: 0 2rem;
    z-index: 1;
  }
</style>
