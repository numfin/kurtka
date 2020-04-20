import { Kurtka, createApp } from "kurtka";
(window as any).Kurtka = Kurtka;

import { App } from "@/components/App";
const el = document.querySelector(".app");
createApp(<App />, el!);
