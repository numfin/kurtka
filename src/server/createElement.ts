// import { Component } from "../client/Component";

// export function createElement<Props extends Record<string, unknown> | null>(
//   C: new (...p: any[]) => Component,
//   props: Props,
//   children?: Component
// ) {
//   if (typeof C !== "string") {
//     const component = new C(props);
//     return component.render(children);
//   }
//   const attrs = Object.entries(props ?? {})
//     .map(([k, v]) => ` ${k}="${v}"`)
//     .join("");
//   return `<${C}${attrs}></${C}>`;
// }
