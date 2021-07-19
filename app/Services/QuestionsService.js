import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js"
class QuestionsService {
  async getAllQuestions(url) {
    const res = await api.get(url)
    console.log(res.data.results)

    let questions = res.data.results.map(q => new Question(q))
    ProxyState.questions = questions
  }
}

export const questionsService = new QuestionsService()