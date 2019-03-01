<script>
let myApiUrl = 'http://localhost:3000/api/employee'

export default {
  get () {
    return fetch(myApiUrl).then((response) => { return response.json() })
  },
  getEmployee (id) {
    return fetch(myApiUrl + '/' + id).then((response) => { return response.json() })
  },
  createEmployee (name, firstname, username, birthday, street, cp, city, phone, mail, job) {
    fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'firstname': firstname,
        'username': username,
        'birthday': birthday,
        'street': street,
        'cp': cp,
        'city': city,
        'phone': phone,
        'mail': mail,
        'job': job
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    })
  },
  updateEmployee (id, name, firstname, username, birthday, street, cp, city, phone, mail, job) {
    fetch(myApiUrl + '/' + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'firstname': firstname,
        'username': username,
        'birthday': birthday,
        'street': street,
        'cp': cp,
        'city': city,
        'phone': phone,
        'mail': mail,
        'job': job
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    })
  },
  deleteEmployee (id) {
    fetch(myApiUrl + '/' + id, { method: 'delete' }).then((response) => { return response.json() })
  }
}

</script>
