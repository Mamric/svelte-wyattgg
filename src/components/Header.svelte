<script lang="ts">
  let linkStyles = "m-2 p-1 hover:cursor-pointer align-middle";
  const links = [
    {
      url: "/weight",
      text: "Weight",
      target: "_self",
      title: "Weight",
    },
    {
      url: "//twitch.tv/scpWyatt",
      text: "Twitch",
      target: "_blank",
      title: "Go to the Twitch",
    },
    {
      url: "//discord.gg/scpWyatt",
      text: "Discord",
      target: "_blank",
      title: "Go to the Discord",
    },
    {
      url: "//reddit.com/r/scpWyatt2",
      text: "Reddit",
      target: "_blank",
      title: "Go to the Subreddit",
    },
  ];
</script>

<header class="border-solid border-b-2 border-gray-800 pb-3 py-1">
  <div class="max-w-6xl mx-auto">
    <div
      class="text-gray-100 text-lg md:flex items-center justify-center md:justify-start text-center"
    >
      <a
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 mx-2 pb-1 text-4xl font-bold"
        href="/"
        title="Wyatt.gg Home" sveltekit:prefetch>Wyatt.gg</a
      >
      <div>
        <span class="text-white">
          {#each links as link}
            <a
              href={link.url}
              title={link.title}
              target={link.target}
              class={linkStyles + " hover:underline"}
              sveltekit:prefetch
              >{link.text}</a
            >
          {/each}
        </span>
        <a
          href="//streamelements.com/scpwyatt/tip"
          target="_blank"
          rel="noreferrer"
          title="Donate to Wyatt!"
          class={linkStyles +
            " bg-red-600 rounded-md hover:bg-red-700 transition-all duration-75 ease-in-out"}
          >Donate
        </a>
      </div>
    </div>
  </div>
</header>
