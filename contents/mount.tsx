import type { PlasmoContentScript, PlasmoGetOverlayAnchor } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://example.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => {
  const el = document.querySelector("div")
  console.log('getOverlayAnchor', el)
  return el
}

const PlasmoAnchor = () => {
  return (
    <span
      style={{
        background: "tomato",
        padding: 12,
        fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
      }}>
      With getOverlayAnchor
    </span>
  )
}

export default PlasmoAnchor
