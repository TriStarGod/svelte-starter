<script>
  import Router from 'svelte-spa-router'
  import Home from './routes/Home.svelte'
  import About from './routes/About.svelte'

  const routes = {
    '/': Home,
    '/about': About,
  }
</script>

<nav class="flex items-center p-24 max-w-960 mx-auto">
  <a class="underline" href="#/">Home</a>
  <a class="underline ml-16" href="#/about">About</a>
</nav>
<Router {routes} />
