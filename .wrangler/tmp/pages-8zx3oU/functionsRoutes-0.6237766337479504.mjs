import { onRequestPost as __api_subscribe_ts_onRequestPost } from "/Users/dhlotter/Downloads/sourcecontrol/website-message-mirror/functions/api/subscribe.ts"

export const routes = [
    {
      routePath: "/api/subscribe",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_subscribe_ts_onRequestPost],
    },
  ]