/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
  type targetType = "_blank" | "_self" | "_parent" | "_top";
  type link = {
    url: string;
    text: string;
    newPage?: Boolean;
    target: targetType;
    title: string;
  };
}
