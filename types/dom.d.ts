declare namespace dom {
  interface BaseAttributes {
    events?: Record<string, Function>;
    style?: Partial<CSSStyleDeclaration>;
    [attr: string]: any;
  }

  interface Elements {
    /** html element */
    [tag: string]: dom.BaseAttributes;
    /** <div /> element*/
    div: dom.BaseAttributes;
    /** <button /> element*/
    button: dom.BaseAttributes;
  }
}
