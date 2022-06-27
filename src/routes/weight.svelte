<script>
  let entries = [
    {
      date: "June 16, 2022",
      weight: 288.8,
    },
    {
      date: "June 17, 2022",
      weight: 284.4,
    },
    {
      date: "June 18, 2022",
      weight: 283.7,
    },
  ];
</script>

<svelte:head>
  <title>Wyatt.gg | weight</title>
</svelte:head>

<div class="text-center text-white my-8">
  <div class="text-left px-7 md:text-center">
    <div class="text-5xl">My Weight</div>
    <div class="text-1xl italic mt-2">A Gamer's Journey</div>
    <div
      class="my-4 text-center md:text-left flex flex-wrap justify-evenly max-w-6xl mx-auto lg:w-lg"
    >
      {#each entries as entry, i}
        <div class="my-5 flex-none w-7/12">
          <div class="text-3xl font-bold">Entry {i + 1}</div>
          <i>
            {new Date(entry.date).toLocaleString("en-us", { weekday: "long" })}
          </i>
          <div class="text-xs">{entry.date}</div>
          <div class="mt-2">
            Weight: <span class="text-xl font-bold inline-block">
              {entry.weight}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
