import { ProxyState } from "../AppState.js";

export function saveState() {
  localStorage.setItem('TriviaGame', JSON.stringify({
    score: ProxyState.score
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TriviaGame'))
  console.log(data)
  if (data != null) {
    // @ts-ignore
    ProxyState.score = JSON.stringify(data.score) * 1
  }

}