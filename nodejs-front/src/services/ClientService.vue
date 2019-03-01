<script>
let myApiUrl = 'http://localhost:3000/api/client'

export default {
  get () {
    return fetch(myApiUrl).then((response) => { return response.json() })
  },
  getClient (id) {
    return fetch(myApiUrl + '/' + id).then((response) => { return response.json() })
  },
  createClient (companyName, street, city, cp, refName, refFirstname, refPhone, refMail, activityArea) {
    fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'company_name': companyName,
        'street': street,
        'city': city,
        'cp': cp,
        'ref_name': refName,
        'ref_firstname': refFirstname,
        'ref_phone': refPhone,
        'ref_mail': refMail,
        'activity_area': activityArea
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    })
  },
  updateClient (id, companyName, street, city, cp, refName, refFirstname, refPhone, refMail, activityArea) {
    fetch(myApiUrl + '/' + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'company_name': companyName,
        'street': street,
        'city': city,
        'cp': cp,
        'ref_name': refName,
        'ref_firstname': refFirstname,
        'ref_phone': refPhone,
        'ref_mail': refMail,
        'activity_area': activityArea
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    })
  },
  deleteClient (id) {
    fetch(myApiUrl + '/' + id, { method: 'delete' }).then((response) => { return response.json() })
  }
}

</script>
