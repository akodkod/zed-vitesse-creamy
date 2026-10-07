# Vitesse Soft for Zed

A light Zed theme matched to Vitesse Light Soft in VS Code, including this setup's warm outer frame. The palette comes from Anthony Fu's Vitesse 1.0.1. This is an independent Zed mapping, not a modified copy of Vitesse Refined.

## Install

Copy `themes/vitesse-soft.json` to `~/.config/zed/themes/`, open Zed's theme selector (`Cmd+K`, then `Cmd+T` on macOS), and select **Vitesse Light Soft — VS Code**.

```sh
mkdir -p ~/.config/zed/themes
cp themes/vitesse-soft.json ~/.config/zed/themes/
```

The theme is already installed and selected on the machine where it was created. To revert, select **Vitesse Refined Light Soft**. Font and icon preferences are independent of this theme.

## Matching decisions

- Editor, sidebar and elevated surfaces use the original warm `#F1F0E9` background.
- Title and status bars use `#E8E6DD`, matching the user's VS Code overrides.
- Active tabs share the editor background; inactive tabs use a subtle warm tint.
- Zed's muted UI labels use opaque `#4E4F47`, matching VS Code's sidebar foreground instead of fading ordinary file names.
- Keywords are green, functions olive, strings muted rust, comments sage, and numbers blue-teal.
- Variable references and parameters are neutral to reduce the orange cast visible in Ruby. Member/property captures remain ochre; instance-variable captures remain tan.
- Ruby symbols are green and superclass captures olive, following the observed VS Code rendering.
- Generic operators are gray to match the assignment and inheritance punctuation in the compared Ruby file. Explicit keyword-operator captures retain Vitesse's red.
- Terminal ANSI black and bright white match the VS Code palette rather than using the background or normal white.

## Limits

Zed uses Tree-sitter captures and optional semantic tokens; VS Code uses TextMate scopes and language-server semantic tokens. A theme cannot recreate distinctions that Zed's grammar does not expose (for example, a variable declaration versus every reference, or the different roles of Ruby constants). This theme favors the observed Ruby rendering while retaining Vitesse colors for TypeScript, JSX and other language captures. Those mappings are not a guarantee of identical highlighting in every language.

VS Code's rounded Modern UI frame, rainbow brackets and orange tab-top border are not reproduced by this theme. Font rendering, size, weight, icons and layout remain application settings. Vitesse's deliberately pale comments and punctuation are preserved; this is not a high-contrast accessibility variant.

## Preview and validation

`examples/palette.rb` and `examples/palette.tsx` provide small comparison files. The theme was visually compared using the same Ruby source file in both running editors. Its JSON and colors are checked against Zed's theme format; Zed successfully loads it and exposes it in the theme picker.

References: [Vitesse](https://github.com/antfu/vscode-theme-vitesse), [Zed theme documentation](https://zed.dev/docs/extensions/themes), [theme schema](https://zed.dev/schema/themes/v0.2.0.json).

## License

MIT. See `LICENSE` for the original palette attribution to Primer and Anthony Fu.
