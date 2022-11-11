# **VsCodeSnap is a fork** of CodeSnap

📸 Take beautiful screenshots of your code in VS Code!

![Example1](https://raw.githubusercontent.com/luisllamasbinaburo/CodeSnap/master/examples/vscode-snap-example1.png)

## This fork changes:

Create this fork because original CodeSnap has not been updated for 16 months, neither pull request are been accepted.

- Gradient background
![Example2](https://raw.githubusercontent.com/luisllamasbinaburo/CodeSnap/master/examples/vscode-snap-example2.png)
- Several window buttons style (Windows, OS X, y Gray Dots)
![Example3](https://raw.githubusercontent.com/luisllamasbinaburo/CodeSnap/master/examples/vscode-snap-example3.png)
- Line Highlight. Click over any code line to alternate between the the available modes blue (|), + green (+) and red (-)
- Buttons bar with save and copy buttons
- Zoom
- Line breaks, changed so it doesn't break words in half.
- Trim lines
- Much more...

If at any moment CodeSnap want to merge VsCodeSnap changes, just let me know to make a PR.

## Instalation
- Install: `ext install luisllamas.codesnap`

## Original readme from @adpyke.codesnap

### Features

- Quickly save screenshots of your code
- Copy screenshots to your clipboard
- Show line numbers
- Many other configuration options

### Usage Instructions

1. Open the command palette (Ctrl+Shift+P on Windows and Linux, Cmd+Shift+P on OS X) and search for `CodeSnap`.
2. Select the code you'd like to screenshot.
3. Adjust the width of the screenshot if desired.
4. Click the shutter button to save the screenshot to your disk.

**Tips**:

- You can also start CodeSnap by selecting code, right clicking, and clicking CodeSnap
- If you'd like to bind CodeSnap to a hotkey, open up your keyboard shortcut settings and bind `codesnap.start` to a custom keybinding.
- If you'd like to copy to clipboard instead of saving, click the image and press the copy keyboard shortcut (defaults are Ctrl+C on Windows and Linux, Cmd+C on OS X), or bind `codesnap.shutterAction` to `copy` in your settings

### Configuration

VSCodeSnap is highly configurable. Here's a list of settings you can change to tune the way your screenshots look:

**`vscodesnap.backgroundPalette`:** Predefined background palettes.

**`vscodesnap.containerBackground`:** The background of the snippet's container. Only applies when Palette is `Custom` Can be any valid CSS background (including gradients).

**`vscodesnap.boxShadow`:** The CSS box-shadow for the snippet. Can be any valid CSS box shadow.

**`vscodesnap.transparentBackground`:** Boolean value to use a transparent background when taking the screenshot.

**`vscodesnap.target`:** Either `container` to take the screenshot with the container, or `window` to only take the window.

**`vscodesnap.containerPadding`:** The padding for the snippet's container. Can be any valid CSS padding.

**`vscodesnap.windowBorderRadius`:** Integer value to use rounded corners, or zero to use square corners for the window.

**`vscodesnap.showWindowControls`:** Boolean value to show or hide top bar with title + window buttons.

**`vscodesnap.windowTitleStyle`:** Window title style, can be `folder_name - file_name`, `file_name`, `custom` or `none`.

**`vscodesnap.windowTitleCustomStyle`:** Window title text when Title Style is set to `none`.

**`vscodesnap.showLineNumbers`:** Boolean value to show or hide line numbers.

**`vscodesnap.realLineNumbers`:** Boolean value to start from the real line number of the file instead of 1.

**`vscodesnap.trimEmptyLines`:** Trim off empty lines at the beginning and at the end.

### Examples

![Example gradient](https://raw.githubusercontent.com/luisllamasbinaburo/CodeSnap/master/examples/gradient-background-code.png)

[Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) + [Operator Mono](https://www.typography.com/fonts/operator/styles/operatormono)

![Example 1](https://raw.githubusercontent.com/luisllamasbinaburo/CodeSnap/master/examples/material_operator-mono.png)

[Nord](https://github.com/arcticicestudio/nord-visual-studio-code) + [Cascadia Code](https://github.com/microsoft/cascadia-code)

![Example 2](https://raw.githubusercontent.com/luisllamasbinaburo/CodeSnap/master/examples/nord_cascadia-code.png)

Monokai + [Fira Code](https://github.com/tonsky/FiraCode)

![Example 3](https://raw.githubusercontent.com/luisllamasbinaburo/CodeSnap/master/examples/monokai_fira-code.png)

### Acknowledgements

The great [CodeSnap](https://github.com/kufii/CodeSnap), for it great extension.

The great [Polacode](https://github.com/octref/polacode), for the initial concept.

[Ray.so](https://ray.so/) for some design inspiration.
[Carbon](https://carbon.now.sh/) for some design inspiration.
