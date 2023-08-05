"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unexpected-multiline */
const promises_1 = require("node:fs/promises");
const utils_1 = require("@iconify/utils");
/**
 * Default dimensions of generated SVG:
 * - '1em' -> 1em, easy to resize icons with font-size.
 * - 'auto' -> same as icon's viewBox.
 * - 'unset' -> no width/height in generated icons. You'll need to assign width and height in CSS.
 */
const height = '1em';
// logos icons json file location
const filename = require.resolve('@iconify-json/logos/icons.json');
// target dir to save svg icons
const target = 'src/assets/images/svg';
// list of icons to generate svg
const icons = ['logos:django-icon', 'logos:python', 'logos:vue', 'logos:vuetifyjs', 'logos:react', 'logos:typescript-icon', 'logos:javascript', 'logos:nuxt-icon', 'logos:graphql', 'logos:postgresql', 'logos:visual-studio-code', 'logos:ubuntu', 'logos:tailwindcss-icon', 'logos:docker-icon', 'logos:heroku-icon', 'logos:nodejs-icon', 'logos:sass', 'logos:npm-icon', 'logos:google-icon', 'logos:microsoft-icon'];
/**
 * Do Stuff
 */
async function generateIcons() {
    // create directory for output if missing.
    try {
        await (0, promises_1.mkdir)(target, {
            recursive: true,
        });
    }
    catch {
        //
    }
    // Load icon json file and parse it
    const parsedIconSet = JSON.parse(await (0, promises_1.readFile)(filename, 'utf-8'));
    icons.forEach(async (icon) => {
        // remove prefix to get icon name
        const iconName = icon.split(':')[1];
        // get icon data
        const data = (0, utils_1.getIconData)(parsedIconSet, iconName);
        if (!data)
            return; // icon with name does not exist
        // Generate SVG
        const { attributes, body } = (0, utils_1.iconToSVG)(data, { height });
        const svg = (0, utils_1.iconToHTML)(body, attributes);
        // write SVG to file
        await (0, promises_1.writeFile)(`${target}/${iconName}.svg`, svg, 'utf-8');
        console.log("generated ", iconName, ".svg");
    });
}
generateIcons();
