export default class Question {
  constructor({ question, correct_answer, incorrect_answers, type }) {
    this.question = question
    this.correct = correct_answer
    this.answers = ['True', 'False']
    if (type == 'multiple') {
      this.answers = incorrect_answers
      let randIndex = Math.floor(Math.random() * 3)
      this.answers.splice(randIndex, 0, this.correct)
    }
  }
  get Template() {
    let template = `<div class="col text-center"><h2 class= "my-3">${this.question}<h2></div>
    <div class = "col-md-6 d-flex justify-content-around">`
    this.answers.forEach(a => {
      template += `<button type="button" class="btn btn-primary">${a}</button>`
    })
    template += `</div>`
    return template
  }
}
