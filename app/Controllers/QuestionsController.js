import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";

function _draw() {
  let questions = ProxyState.questions
  let template = ''
  questions.forEach(q => template += q.Template)
  console.log(template)
  document.getElementById('questions').innerHTML = template
}
export default class QuestionsController {
  constructor() {
    ProxyState.on('questions', _draw)
    this.getAll()
    _draw
  }

  async getAll() {
    try {
      await questionsService.getAllQuestions()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }
}