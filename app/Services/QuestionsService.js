import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js"
import NotificationsService from "../Services/NotificationsService.js";
class QuestionsService {
  async getAllQuestions(url) {
    const res = await api.get(url)
    console.log(res.data.results)

    let questions = res.data.results.map(q => new Question(q))
    ProxyState.questions = questions
    console.log(questions)
  }

  async choose(choice) {
    let questions = ProxyState.questions
    if (choice == questions[0].correct) {
      ProxyState.score++
      await NotificationsService.rightAnswer()
      location.reload()
    } else {
      await NotificationsService.wrongAnswer()
      location.reload()
    }
  }

}

export const questionsService = new QuestionsService()