<script>
let myApiUrl = 'http://localhost:3000/api/project'

export default {
  get () {
    return fetch(myApiUrl).then((response) => { return response.json() })
  },
  getProject (id) {
    return fetch(myApiUrl + '/' + id).then((response) => { return response.json() })
  },
  createProject (name, description, startDate, endDate, price, status) {
    fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'description': description,
        'start_date': startDate,
        'end_date': endDate,
        'price': price,
        'status': status
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    })
  },
  updateProject (id, name, description, startDate, endDate, price, status) {
    fetch(myApiUrl + '/' + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'description': description,
        'start_date': startDate,
        'end_date': endDate,
        'price': price,
        'status': status
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    })
  },
  deleteProject (id) {
    fetch(myApiUrl + '/' + id, { method: 'delete' }).then((response) => { return response.json() })
  }
}

</script>
