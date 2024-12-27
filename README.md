# Offcanvas component in Vue3 and Alpine.

In this repository you will find the offcanvas drawer component developed in Vue3 that is ready to be used in html files with AlpineJS/VanillaJS reactivity.

## Step 1 (Installing correct dependencies)

Make sure you have the right packages installed in your projects

```bash
npm i vue @vueuse/components @vueuse/core typescript vite vue-tsc alpinejs@latest
```

## Step 2 (Adding typescript support)

To have typescript support in our project, we need to configure it. Create 3 files in the root of your project, `tsconfig.app.json`, `tsconfig.node.json` and `tsconfig.json` files

Code to be added in `tsconfig.app.json` file:

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

Code to be added in `tsconfig.node.json` file:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

Code to be added in `tsconfig.json` file:

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## Step 3 (Adding the component itself)

Make a directory called `components` and inside it copy the file from this repository `/src/components/Offcanvas.ce.vue`. Make sure to add `.ce.vue` as the extension of the file no matter the name you choose in-order for the styles of your file to work correctly.

Note: make sure you have [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension installed in your VSCode (or any other editor) to have code syntax highlighting in your .vue files.

## Step 4 (Making a main.ts file)

Now make a `main.ts` file in your src folder and add the following code inside it:

```typescript
import { defineCustomElement } from "vue";
import [YourComponent] from "/path/to/components/[YourFile].ce.vue";

// Your code

const yourComponent = defineCustomElement(YourComponent);
customElements.define('your-component', yourComponent);
```

This code is responsible for importing the .vue component you created, converting it to a custom element, and making it a web-component to be used in your .html files.

Note: Make sure to add `-` in your component's name when you're using `customElements.define` in order for Vue to easily differentiate between native HTML Tags and custom web components.

## Step 5 (Configuring Vite to use Vue components as web components and compile all .html files)

Configure vite.config.ts to use vue and its components, compile main.ts file, .html files when we run or build the project.

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    // Compiler options for vue
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  // TailwindCSS compiling options
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  // Build options to build all .html files in the root of your project because by default Vite only looks up for index.html file.
  build: {
    rollupOptions: {
      input: {
        "variant-1": "./index.html",
        // your other .html files and there paths to be build using vite.
      },
    },
  },
});
```

## Step 6 (Adding Alpine)

Now back to your `main.ts` file, add the following code to run Alpine in your project.

```typescript
import { defineCustomElement } from "vue";
import Alpine from "alpinejs";
import [YourComponent] from "/path/to/components/[YourFile].ce.vue";


window.Alpine = Alpine;
Alpine.start();

// Your code

const yourComponent = defineCustomElement(YourComponent);
customElements.define('your-component', yourComponent);
```

If you're using typescript then main.ts file will give error in `window.Alpine` as it does not know from where Alpine is coming to the window. But we know that this is working and doesn't has any errors but Typescript will throw build error regardless if we build this code.

So to fix this we need to create a `global.d.ts` file in the same directory/folder we have our `main.ts` file in and add the following code:

```typescript
import { Alpine as AlpineType } from "alpinejs";

declare global {
  var Alpine: AlpineType;
}
```

By doing this, Typescript will automatically assume that there is a variable called Alpine and we can use it.

## Step 7 (Using the component)

Now that we have everything ready, we can use the offcanvas component in our index.html file like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <your-component is-open>
      <!-- Content of the drawer added inside. -->
    </your-component>
    <script type="module" src="/path/to/main.ts"></script>
  </body>
</html>
```

## Step 8 (Triggering the component using AlpineJS)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <div x-data="{showModal: false}">
      <button type="button" @click="showModal = true">Open the drawer</button>
      <your-component :is-open="showModal" @close-popup="showModal = false">
        <!-- Content of the drawer added inside. -->
      </your-component>
    </div>
    <script type="module" src="/path/to/main.ts"></script>
  </body>
</html>
```

## Step 9 (using the variants in the component)

Using variant 1 (with background un-accessible):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <div x-data="{showModal: false}">
      <button type="button" @click="showModal = true">Open the drawer</button>
      <your-component :is-open="showModal" @close-popup="showModal = false">
        <!-- Content of the drawer added inside. -->
      </your-component>
    </div>
    <script type="module" src="/path/to/main.ts"></script>
  </body>
</html>
```

Using variant 2 (with background accessible):

To use variant 2, we need to add additional boolean property called `is-background-visible` in our components attributes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <div x-data="{showModal: false}">
      <button type="button" @click="showModal = true">Open the drawer</button>
      <your-component
        :is-open="showModal"
        @close-popup="showModal = false"
        is-background-visible
      >
        <!-- Content of the drawer added inside. -->
      </your-component>
    </div>
    <script type="module" src="/path/to/main.ts"></script>
  </body>
</html>
```

Using variant 3 (with resize feature):

To use variant 3, we need to add additional property called `is-resizeable` in our component's attributes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <div x-data="{showModal: false}">
      <button type="button" @click="showModal = true">Open the drawer</button>
      <your-component
        :is-open="showModal"
        @close-popup="showModal = false"
        is-resizeable
      >
        <!-- Content of the drawer added inside. -->
      </your-component>
    </div>
    <script type="module" src="/path/to/main.ts"></script>
  </body>
</html>
```

Note: If we add both `is-background-visible` and `is-resizeable` in the attributes of our component like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <div x-data="{showModal: false}">
      <button type="button" @click="showModal = true">Open the drawer</button>
      <your-component
        :is-open="showModal"
        @close-popup="showModal = false"
        is-background-visible
        is-resizeable
      >
        <!-- Content of the drawer added inside. -->
      </your-component>
    </div>
    <script type="module" src="/path/to/main.ts"></script>
  </body>
</html>
```

Then it will only consider the 3rd variant as the component is developed with high priority to the 3rd variant, and we can't use position fixed and position static both at the same time. It will always consider is-resizeable and we still have access to the background in variant 3 so there's no point in adding both properties at the same time.

## Bonus

We can even change styles of our Offcanvas's overlay and inner modal by using `overlay-classes` and `modal-classes` like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <div x-data="{showModal: false}">
      <button type="button" @click="showModal = true">Open the drawer</button>
      <your-component
        :is-open="showModal"
        @close-popup="showModal = false"
        overlay-classes="!bg-red-500"
        modal-classes="!bg-[#181a24] !border-[#2a2e37]"
      >
        <!-- Content of the drawer added inside. -->
      </your-component>
    </div>
    <script type="module" src="/path/to/main.ts"></script>
  </body>
</html>
```

I hope by reading this document, you are successfully able use this component inside your project. If you have any questions then you can reach out to me at waleedomore@gmail.com

Thank you so much for reading. Happy coding!
