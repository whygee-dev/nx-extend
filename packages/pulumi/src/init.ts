import { loadConfig, register } from 'tsconfig-paths'

export function setupTypescript(directory: string): void {
  const config = loadConfig(directory)
  if (config.resultType === 'failed') {
    console.log('Could not load tsconfig to map paths, aborting.')
    process.exit(1)
  }

  register({
    baseUrl: config.absoluteBaseUrl,
    paths: config.paths
  })
}
