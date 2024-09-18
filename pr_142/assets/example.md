## TypeScript Example Code
```ts
var hi = "@gewd/markdown";

class Test implements MyInterface {
  constructor (private prop: string) {
    if (prop === 'text') {
      // adding an emoji :+1: as comment
    }
  }
}
```

## Mermaid example :grin:
Emoji's in mermaid need to be used in a double quote

> See examples of [Flowcharts](https://mermaid-js.github.io/mermaid/#/flowchart)
```graph LR
A[Hard] -->|Text | B("Round  :grin: ")
B --> C{Decision}
C -->|"Yes :+1:"| D[Result 1]
C -->|"No :-1:"| E[Result 2]
```
