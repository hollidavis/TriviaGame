import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

function _draw() {
  let questions = ProxyState.questions
  let template = ''
  questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template
  document.getElementById('score').innerText = ProxyState.score.toString()
}
export default class QuestionsController {
  constructor() {
    ProxyState.on('questions', _draw)
    ProxyState.on('score', _draw)
    ProxyState.on('questions', saveState)
    ProxyState.on('score', saveState)
    this.getAll()
    _draw()
    loadState()
  }

  async getAll() {
    try {
      await questionsService.getAllQuestions()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }

  choose(choice) {
    questionsService.choose(choice)
  }
}
