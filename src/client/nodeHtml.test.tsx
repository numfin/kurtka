import { iterate } from "./helpers";

describe("nodeHtml", () => {
  describe("single element", () => {
    it("Should render an element", () => {
      const divJSX = <div />;
      expect(divJSX()).toMatchInlineSnapshot(`<div />`);
    });

    it("Should render element inside an element", () => {
      const headers = (
        <h1>
          <h2>h3</h2>
        </h1>
      );
      expect(headers()).toMatchInlineSnapshot(`
        <h1>
          <h2>
            h3
          </h2>
        </h1>
      `);
    });
  });

  describe("collection of elements", () => {
    it("Should render a collection of elements", () => {
      const divJSX = (
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          h3
          <p>p</p>
        </div>
      );
      expect(divJSX()).toMatchInlineSnapshot(`
        <div>
          <h1>
            h1
          </h1>
          <h2>
            h2
          </h2>
          h3
          <p>
            p
          </p>
        </div>
      `);
    });
  });

  describe("function returns array", () => {
    it("Should render array of elements", () => {
      const items = [1, 2];
      const divJSX = (
        <div>
          {iterate(items, (item) => (
            <div>{item}</div>
          ))}
        </div>
      );
      expect(divJSX()).toMatchInlineSnapshot(`
              <div>
                <div>
                  1
                </div>
                <div>
                  2
                </div>
              </div>
          `);
    });

    it("Should render dom elements exactly as array elements", () => {
      const items = [1];
      const divJSX = (
        <div>
          {iterate(items, (item) => (
            <div>{item}</div>
          ))}
        </div>
      );
      divJSX();
      items.push(2);
      expect(divJSX()).toMatchInlineSnapshot(`
        <div>
          <div>
            1
          </div>
          <div>
            2
          </div>
        </div>
    `);
      items.unshift(0);
      expect(divJSX()).toMatchInlineSnapshot(`
        <div>
          <div>
            0
          </div>
          <div>
            1
          </div>
          <div>
            2
          </div>
        </div>
    `);

      items.shift();
      expect(divJSX()).toMatchInlineSnapshot(`
        <div>
          <div>
            1
          </div>
          <div>
            2
          </div>
        </div>
    `);
    });

    it("Should reuse unique key elements in array", () => {
      const items = [1, 2, 3];
      const divJSX = (
        <div>
          {iterate(items, (item) => (
            <div>{item}</div>
          ))}
        </div>
      );
      const elementBefore = divJSX().childNodes.item(1);
      items.unshift(0);
      items.push(4);
      items.shift();
      items.pop();
      const elementAfter = divJSX().childNodes.item(1);
      expect(elementBefore.isSameNode(elementAfter)).toBeTruthy();
    });
  });
});
