import type { PlasmoContentScript, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://example.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () => {
  const el = document.querySelector("div")
  console.log('getInlineAnchor', el)
  return el
}

// Use this to optimize unmount lookups
export const getShadowHostId = () => "plasmo-inline-example-unique-id"

const PlasmoInline = () => {
  return (
    <div
      style={{
        width: "600px",
        margin: "5em auto",
        padding: "2em",
        background: "#fdfdff",
        borderRadius: "0.5em",
        boxShadow: "2px 3px 7px 2px rgb(0 0 0 / 2%)"
      }}
    >
      With getInlineAnchor
    </div>
  )
}

export default PlasmoInline
