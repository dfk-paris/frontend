let configuration = {
  staticUrl: 'https://static.dfkg.org/public',
  apiUrl: ''
}

export default class DfkFrontend {
  static configure(newConfiguration) {
    Object.assign(configuration, newConfiguration)
  }

  static config() {
    return configuration
  }
}
