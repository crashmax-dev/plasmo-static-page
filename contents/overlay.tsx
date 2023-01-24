import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://example.com/*"]
}

// trigger for MutationObserver
const PlasmoOverlay = () => null

export default PlasmoOverlay
