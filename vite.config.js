import strip from '@rollup/plugin-strip'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    {
      ...strip(
        // { include: /\**\/*.js/ } // <- this works, but the default of '**/*.js' doesn't
      ),
      apply: "build"
    }
  ]
}
