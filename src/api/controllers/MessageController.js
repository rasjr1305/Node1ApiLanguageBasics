class MessageController {
  static message(req, res) {
    const msg = 'Hello World'
      try {
        return res.json({ message: msg });
      } catch (err) {
        return res.json({ message: 'Server error' });
      }
    }

  static messageLoop(req, res) {
    let msgArray = [];
    const msgNumber = 100;
    let msg = 'Hello World'
    try {
      for (let i = 0; i < msgNumber; i++) {
        msgArray[i] = `${i} - ${msg}` // Template String
      }
      return res.json({ message: msgArray });
    } catch (err) {
        return res.json({ message: 'Server error' });
    }
  }

  static evenOdd(req, res) {
    let msg;
    const num = req.params.num
    try {
      if (num % 2 == 0) { // num % 2 retorna o resto da divisao de num por 2
        msg = 'even'
      }
      else {
        msg = 'odd'
      }
      return res.json({ message: msg });
    } catch (err) {
      return res.json({ message: 'Server error' });
    }
  }
}
  // 
  export default MessageController; 