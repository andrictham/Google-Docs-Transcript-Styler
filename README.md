# Google-Docs-List-Styler
A simple Google Docs script that iterates through all list items and styles it with a paragraph style. Useful for styling transcripts such that the interviewer’s questions are quickly scannable.

## Why use this?

I made this script to make styling interview transcripts for user interviews less of a nightmare.

When you transcribe an interview, you want to write the interviewee’s responses freely without quotes. This makes it easy to copy and paste wherever you need it. 

Also, to save you time, you don’t want to have to preface your quotes with who said it in every line like so:

> INTERVIEWER: Why do you visit museums?

> INTERVIEWEE: I like how the Art inspires me and opens up questions about the future of humanity.

> INTERVIEWER: Tell me more about that. What sparked your interest in Art?

> INTERVIEWEE: Yeah, so, my Dad was an artist, and when I was a kid, every weekend we would...

You can see how this gets tedious very quickly when your transcript hits over 20 pages.

However, you still want to document the questions or prompts from the interviewer within the document, so that you get the full flow and context of the conversation. One easy way to do so is to add a hypen (-) before the interviewer’s speech. 

This automatically creates a list item in Google Docs, and is an easy way to style text quickly when you are touch typing. It’s also easy to understand as shorthand for “the other person speaking in a conversation”.

>   — Why do you visit museums?

> I like how the Art inspires me and opens up questions about the future of humanity.
  
>   — Tell me more about that. What sparked your interest in Art?

> Yeah, so, my Dad was an artist, and when I was a kid, every weekend we would...

The downside is, when scanning a document quickly, it’s very hard to spot them visually. To add visual weight, we want to stylize the questions somehow to stand out from the sea of text that’s the interviewee’s responses.

Enter an automated list styler. Using this script, you can use a Paragraph Style, such as "Heading 1" or "Subtitle" that is built into Google Docs, and apply it to list items throughout a document. Run this script any time you want, and voila, a neat transcript.

## How to use
This script is written to be used within specific Google documents.

To use it, simple open Tools > Script editor from within your document, and paste the code into the text editor that appears. 

Then, run the onOpen function to initialize the script within our UI. This will show a custom menu in our Google Docs editor.

If you want to run the script directly without the UI, run the listStyler function.
