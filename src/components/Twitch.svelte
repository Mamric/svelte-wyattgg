<script>
  let URLPATH =
    process.env.NODE_ENV === "development" ? "localhost:3000" : "www.wyatt.gg";
</script>

<div class="flex justify-center">
  <div class="max-w-4xl flex-1">
    <iframe
      title="Twitch Stream Screen"
      src={`https://player.twitch.tv/?channel=scpwyatt&parent=${URLPATH}`}
      allowFullScreen={true}
      scrolling="no"
      height="400rem"
      width="100%"
    />
    <iframe
      title="Twitch Stream Chat"
      id="chat_embed"
      src={`https://www.twitch.tv/embed/scpwyatt/chat?parent=${URLPATH}&darkpopout`}
      height="500rem"
      width="100%"
    />
  </div>
</div>
