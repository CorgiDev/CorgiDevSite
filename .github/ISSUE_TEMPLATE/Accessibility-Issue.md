---
name: Issue Template
about: Report an issue relating to corgidev.com.
title: [User Reported Issue] <Provide Brief Issue Name between these arrow brackets>
labels: User-Reported
assignees: corgidev

---

## Steps to Reproduce

Provide the steps you would use to reproduce the issue you found, including what URL you need to go to first.

1. Navigate to URL.
1. [Placehodler text]

## Environment Found On

Provide as much of the following details about the environment you were using when you found the issue as you can, or are comfortable with. Provide specific version number if you can, but it is okay if you cannot.

This information can help identify if there is a bug with the environment that was used, which may be able to help me resolve the issue, or provide additional support

* **Operating System**: [Windows/MacOS/Linux/Android/iOS]
* **Browser**: [FireFox/Chrome/Edge]

### Assistive Technologies Used (If applicable)

List any assistive technologies that were used.

* (Screen readers, voice control like Dragon, )

### Other Applications Used to Verify

List any additional applications you used to verify the issue. Such as TPGI Color Contrast Analyzer, aXe DevTools, Accessibility Insights, ANDI Bookmarklet, etc.
Please provide sources to acquire these applications if possible. This helps with identifying if there might be a bug with the tool causing a false positive, or may help me better see the issue if I have trouble reproducing it otherwise.

## Expected Behavior

[Describe what behavior was expected.]

## Actual behavior

[Describe what behavior your actually encountered.]

## User Impact

Briefly describe how does this impacts your use of the site/application. This could help inform how I resolve the situation.

## Possible WCAG SC Failed

List what WCAG Success Criterion (SC) you feel this fits under, if any. Feel free to list more than one if you feel it could possibly fall under multiple SC. A good resource for looking up the various WCAG SC is [WCAG 2.2 Understanding Docs](https://www.w3.org/WAI/WCAG22/Understanding/).

* [EXAMPLE] [WCAG SC 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)

## Screenshots

Place your cursor in this section and then paste in the image, or use the GitHub `Attach Files` button visually represented by a paper clip icon.
This should place markdown for the image in this area. The markdown will be formatted as `![Alt text for Image](file source)`, with the initial alt text being just the image file name and the source being where GitHub uploads the file. Replace the alt text with a description of what the image displays. That way I can have an idea even if the image doesn't load for some reason.

Code Academy has a great page describing more of what you can do with images in Markdown called [Images | Markdown Concepts](https://www.codecademy.com/resources/docs/markdown/images).

## Code Snippets

Feel free to include any particular code snippets from a tool you used, or that you identified during the testing, which you feel could help identify the issue or where the impacted section is in the page.

> [!TIP]
> If you have the code snippet separated out into multiple lines, use the [fenced code block markdown](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks) represented by 3 backtick marks three backticks (```).
> However, if it is all together without line breaks, use the single backtick version instead. It is just easier for me to read then because of the way it displays when rendered on GitHub.
> It is also considered best practice, to include what language you are creating the 3 backtick version of a code block in if possible. This causes markdown to visually display the code with better [syntax highlighting](https://www.markdownguide.org/extended-syntax/#syntax-highlighting). This doesn't work for the single backtick version of a codeblock.

```html
<html>
    <head></head>
    <body>
        <p>This is just an example code block that has line breaks and was created using 3 backticks and includes the language for syntax highlighting.</p>
    </body>
</html>
```

`<html><head></head><body><p>This is just an example code block that has no line breaks, and was created using 1 backtick before and after.</p></body></html>`