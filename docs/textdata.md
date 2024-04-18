# Text

`Text` is a data type used to represent text or textual content with various formatting options. It allows you to define and store text-based data, including text alignment, color, stroke, and shadow. Here are the attributes associated with `Text`:

- **type (string)**: "text"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (any)**: The default text content.
- **multiline (object, Optional)**: An object with `enabled` (boolean) and `lineHeight` (number).
- **align (string, Optional)**: Text alignment ("left," "center," "right").
- **color (string, Optional)**: Text color.
- **stroke (object, Optional)**: An object with `color` (string) and `thickness` (number).
- **shadow (object, Optional)**: An object with `color` (string), `alpha` (number), `x` (number), `y` (number), and `blur` (number).
- **tts (object, Optional)**: An object with `data` (string | null) (base64 mp3), `gender` (number), `pitch` (number), and `language` (string).

## Example

Here's an example of how to use `Text`:

```json
{
  "type": "text",
  "id": "uniqueIdentifier",
  "name": "Header Text",
  "desc": "Defines the header text with special formatting.",
  "default": "Welcome to our website!",
  "multiline": {
    "enabled": true,
    "lineHeight": 1.5
  },
  "align": "center",
  "color": "#0074E4",
  "stroke": {
    "color": "#FFFFFF",
    "alpha": 0.5,
    "thickness": 2
  },
  "shadow": {
    "color": "#000000",
    "x": 1,
    "y": 1,
    "blur": 2
  },
}
```

## Returns
Without multiline, JavaScript String: `Download Now`
With multiline (or other options), Javascript Object:
```js
{
  "text": "Tired of big payments? Use your\nfinger to slash and save.",
  "multiline": {
      "enabled": true,
      "lineHeight": 1.5
  }
}
```
