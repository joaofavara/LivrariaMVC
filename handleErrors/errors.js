class ValidationError extends Error {
    constructor(message) {
      super(message)
      this.name = 'ValidationError'
      this.message = message
    }
  }
  class DatabaseError extends Error {
    constructor(message) {
      super(message)
      this.name = 'DatabaseError'
      this.message = message
    }
  }
  module.exports = {
    ValidationError,
    DatabaseError
  }