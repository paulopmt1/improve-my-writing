## Improve My Writing

This plugin helps us write better text using ChatGPT. It's a superbly crafted code created for me to learn more about Gutenberg and ChatGPT.

<img width="1334" alt="image" src="https://user-images.githubusercontent.com/1044309/234110557-a5fdcd53-0dfa-4a62-98c4-ffbccf293843.png">


[![Here's a video showing it in action:](https://user-images.githubusercontent.com/1044309/234110557-a5fdcd53-0dfa-4a62-98c4-ffbccf293843.png)](https://user-images.githubusercontent.com/1044309/234110346-4d2076b6-23eb-4fd4-9fcb-e47cd47733a1.mp4 "Video")

## How to play with it?

1. Clone this repo
1. Install [wp-env in your environment](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)
1. Get your [ChatGPT API key](https://platform.openai.com/account/api-keys)
1. Replace [the CHAT_GPT_KEY on the edit.js file](https://github.com/paulopmt1/improve-my-writing/blob/main/src/edit.js#L15)
1. Run `wp-env start` in the plugin's folder
1. Create a new post acessing your [local WordPress installation](http://localhost:8888/wp-admin/post-new.php)
1. Be happy and modify the files! If you wanna see changes, just run `npm start` and refresh your admin page :)
