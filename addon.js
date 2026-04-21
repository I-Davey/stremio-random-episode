const { addonBuilder, serveHTTP } = require('stremio-addon-sdk')

const manifest = {
  id: 'community.random.episode.button',
  version: '2.0.0',
  name: 'Random Episode Button',
  description: 'Adds a Random Episode button on series detail pages.',
  resources: [
    {
      name: 'meta',
      types: ['series'],
      idPrefixes: ['tt']
    }
  ],
  types: ['series'],
  behaviorHints: {
    configurable: true,
    configurationRequired: false
  },
  config: [
    {
      key: 'watchedEpisodeIds',
      type: 'text',
      title: 'Watched episode IDs (comma-separated)',
      required: false,
      default: ''
    }
  ]
}

const builder = new addonBuilder(manifest)

const parseWatchedIds = (args) => {
  const raw = String(args?.config?.watchedEpisodeIds || '')
  return new Set(
    raw
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)
  )
}

const getSeriesMeta = async (seriesId) => {
  const response = await fetch(`https://v3-cinemeta.strem.io/meta/series/${encodeURIComponent(seriesId)}.json`)
  if (!response.ok) {
    throw new Error(`Cinemeta request failed with status ${response.status}`)
  }

  const payload = await response.json()
  return payload?.meta
}

const chooseRandomEpisode = (videos) => videos[Math.floor(Math.random() * videos.length)]

builder.defineMetaHandler(async (args) => {
  if (args.type !== 'series' || !String(args.id || '').startsWith('tt')) {
    return { meta: null }
  }

  const seriesId = args.id

  try {
    const watchedIds = parseWatchedIds(args)
    const seriesMeta = await getSeriesMeta(seriesId)
    const episodes = Array.isArray(seriesMeta?.videos)
      ? seriesMeta.videos.filter((video) => String(video.id || '').startsWith(`${seriesId}:`))
      : []
    const unwatched = episodes.filter((video) => !watchedIds.has(String(video.id || '')))

    if (!unwatched.length) {
      return {
        meta: {
          id: seriesId,
          type: 'series',
          name: seriesMeta?.name || seriesId,
          links: [
            {
              name: '🎲 Random Episode (all marked watched)',
              category: 'random',
              url: `stremio:///detail/series/${seriesId}`
            }
          ]
        }
      }
    }

    const picked = chooseRandomEpisode(unwatched)

    return {
      meta: {
        id: seriesId,
        type: 'series',
        name: seriesMeta?.name || seriesId,
        links: [
          {
            name: '🎲 Random Episode',
            category: 'random',
            url: `stremio:///detail/series/${seriesId}/${encodeURIComponent(picked.id)}`
          }
        ]
      }
    }
  } catch (error) {
    return {
      meta: {
        id: seriesId,
        type: 'series',
        name: seriesId,
        links: [
          {
            name: '🎲 Random Episode (error)',
            category: 'random',
            url: `stremio:///detail/series/${seriesId}`
          }
        ]
      }
    }
  }
})

const port = Number(process.env.PORT || 7000)
serveHTTP(builder.getInterface(), { port })
console.log(`Random Episode addon running on http://127.0.0.1:${port}/manifest.json`)
