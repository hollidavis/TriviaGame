export default class NotificationsService {
  static async wrongAnswer() {
    // @ts-ignore
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'That was not the correct answer',
      confirm: "Try Again"
    })
  }

  static async rightAnswer() {
    // @ts-ignore
    await Swal.fire({
      icon: 'success',
      title: 'Good Job!',
      text: 'That is correct!',
      confirm: "Next"
    })
  }
}