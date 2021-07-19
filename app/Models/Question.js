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
    return /*html*/`
    <div class="col-md-6">
      <div class="card">
        <div class="card-header text-center">
          <h2>${this.question}</h2>
        </div>
        <div class="card-body d-flex flex-column">
          ${this.MyAnswers}
        </div>
      </div>
    </div>`
  }

  get MyAnswers() {
    let template = ''
    return /*html*/`
      <button type="button" name="" id="" class="btn btn-primary my-2" btn-lg btn-block">${this.answers}</button>
    `
  }
}
