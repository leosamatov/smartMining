import {usd_ghz} from "config/constants"

export const periodEarn = (_amount, plan, days, bonus = null) => {
  let amount = (_amount * plan?.profit / 100 * days)

  const in_ghz = _amount * usd_ghz
  const fee = (in_ghz / 1000) * 0.01

  amount = amount - fee

  if (amount < 0) amount = 0

  if (bonus && typeof bonus === "number") amount = amount + (amount / 100 * bonus)

  return amount ? amount.toFixed(2) : "Individual"
}

export const calculatePower = (amount, bonus = null) => {
  const basePower = parseInt(amount * usd_ghz)

  if (bonus && typeof bonus === "number") return parseInt(basePower + (basePower / 100 * bonus))
  else return basePower
}

export const isMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem)
  })
}
