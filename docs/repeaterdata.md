# Repeater

`Repeater` is a data type used to represent a repeatable or iterable data structure. It allows you to define a list of data items that can be repeated multiple times, such as a list of items, tasks, or elements. Here are the attributes associated with `Repeater`:

- **type (string)**: "repeater"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (any[])**: The default value, which is an array of items.
- **min (number)**: The minimum number of repetitions.
- **max (number)**: The maximum number of repetitions.
- **template (object)**: An object with `templateName` (string) and `items` (DataItem[]).

## Example

Here's an example of how to use `Repeater`:

```json
{
  "type": "repeater",
  "id": "uniqueIdentifier",
  "name": "Task List",
  "desc": "Represents a list of tasks that can be repeated.",
  "default": [
    {
      "taskName": "Task 1",
      "description": "",
      "taskText": "Some Text",
      "taskColor": "#172538",
      "taskImgSrc": null
    }
  ],
  "min": 1,
  "max": 5,
  "template": {
    "templateName": "taskTemplate",
    "items": [
      {
        "type": "text",
        "id": "taskText",
        "name": "Task text:",
        "default": "Test"
      },
      {
        "type": "color",
        "id": "taskColor",
        "name": "Task Color:",
        "default": "#f9910c"
      },
      {
        "type": "image",
        "id": "taskImgSrc",
        "name": "Upload Task Image:",
        "default": null
      }
    ]
  },
}
```
