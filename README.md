# Mermaid ELK

This plugins brings back support for the [elk (eclipse layout kernel)](https://eclipse.dev/elk/) renderer for mermaidJS.

To switch to the renderer you can prepend your mermaid diagram with the following code:
```yml
---
config:
  layout: "elk"
---
%% Your mermaid code here...
```

Have fun!

## Credits
This plugin strongly depends on [@mermaid-js/layout-elk](https://github.com/mermaid-js/mermaid).
Please support that project if you like it.
